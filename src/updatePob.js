import fs from "fs";
import path from "path";
import { wallets } from "./wallets.js";
import { contracts } from "./contracts.js";
import { Transaction, utils } from "koilib";

const currentDir = path.dirname(new URL(import.meta.url).pathname);
const wasmDir = path.join(currentDir, "wasm");

const proposer = wallets.random();
const FEE_PROPOSAL = "10000000000";

async function storeNewBytecodePob() {
  const transaction = new Transaction({
    signer: proposer,
    provider: proposer.provider,
  });
  await transaction.pushOperation(contracts.bytestorage.functions.save_bytecode, {
    name: "pob2",
    bytecode: utils.encodeBase64url(
      new Uint8Array(fs.readFileSync(path.join(wasmDir, "pob2.wasm")))
    ),
    abi: JSON.stringify(contracts.pob.abi),
  });
  await transaction.prepare({
    rcLimit: 10e8-1,
    payer: wallets.freemanasharer.address,
    payee: proposer.address,
  });
  await transaction.send();
  await transaction.wait();
  console.log("New bytecode stored for pob2 contract\n");
}

async function generateProposalUpdatePob() {
  const tx = new Transaction({
    signer: proposer,
    provider: proposer.provider,
  });
  await tx.pushOperation(contracts.bytelauncher.functions.upload_contract, {
    bytecode_name: "pob2",
    contract_id: contracts.pob.getId(),
  });
  await tx.prepare({ payer: proposer.address });
  const operationMerkleRoot = tx.transaction.header.operation_merkle_root;
  const proposalId = `0x${Buffer.from(operationMerkleRoot, "base64").toString("hex")}`;
  return {
    operations: tx.transaction.operations,
    operationMerkleRoot,
    proposalId,
  };
}

async function submitProposalUpdatePob() {
  const { operations, operationMerkleRoot, proposalId } = await generateProposalUpdatePob();

  // submit the proposal to the governance contract
  const txSubmit = new Transaction({
    signer: proposer,
    provider: proposer.provider,
    options: {
      rcLimit: 10e8-1,
      payee: proposer.address,
    },
  });

  // allow governance to burn FEE
  await txSubmit.pushOperation(contracts.koin.functions.approve, {
    owner: proposer.address,
    spender: wallets.governance.address,
    value: FEE_PROPOSAL,
  });

  await txSubmit.pushOperation(contracts.governance.functions.submit_proposal, {
    operations,
    operation_merkle_root: operationMerkleRoot,
    fee: FEE_PROPOSAL,
  });
  await txSubmit.send();
  await txSubmit.wait();

  console.log(`Proposal submitted successfully`);
  console.log(`Proposal ID: ${proposalId}\n`);
}

async function transferKoinToProposer() {
  console.log("Transferring koin to proposer...");
  const transaction = new Transaction({
    signer: wallets.genesis,
    provider: wallets.genesis.provider,
    options: {
      rcLimit: 10e8-1,
      payer: wallets.freemanasharer.address,
      payee: wallets.genesis.address
    },
  });

  const value = (BigInt(FEE_PROPOSAL) * 10n).toString();
  await transaction.pushOperation(contracts.koin.functions.transfer, {
    from: wallets.genesis.address,
    to: proposer.address,
    value,
  });
  await transaction.send();
  await transaction.wait();
  console.log(`${value} koin transferred to proposer account ${proposer.address}\n`);
}

async function main() {
  const command = process.argv[2];

  if (command === "generate") {
    const { proposalId } = await generateProposalUpdatePob();
    console.log(`Proposal ID: ${proposalId}`);
    return;
  }

  if (command === "submit") {
    await transferKoinToProposer();
    await storeNewBytecodePob();
    await submitProposalUpdatePob();
    return;
  }

  console.error("Usage: node src/updatePob.js <generate|submit>");
  process.exit(1);
}

main();
