import { wallets } from "./wallets.js";
import { contracts } from "./contracts.js";
import { Transaction } from "koilib";

const proposer = wallets.random();
const FEE_PROPOSAL = "1000000000";

async function storeNewBytecodePob() {
  const transaction = new Transaction({
    signer: proposer,
    provider: proposer.provider,
  });
  await transaction.pushOperation(contracts.bytestorage.functions.set_bytecode, {
    name: "pob2",
    bytecode: contracts.pob.bytecode,
    abi: JSON.stringify(contracts.pob.abi),
  });
  await transaction.prepare({
    rcLimit: 3e6,
    payer: wallets.freemanasharer.address,
  });
  await transaction.sign();
  await transaction.send();
  await transaction.wait();
  console.log("New bytecode stored for pob2 contract\n");
}

async function generateProposalUpdatePob() {
  const tx = new Transaction();
  await tx.pushOperation(contracts.bytelauncher.functions.upload_contract, {
    bytecode_name: "pob2",
    contract_id: contracts.pob.getId(),
  });
  await tx.prepare();
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
      rcLimit: 3e6,
      payer: wallets.freemanasharer.address
    },
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
      rcLimit: 3e6,
      payer: wallets.freemanasharer.address
    },
  });

  await transaction.pushOperation(contracts.koin.functions.transfer, {
    from: wallets.genesis.address,
    to: proposer.address,
    value: FEE_PROPOSAL,
  });
  await transaction.send();
  await transaction.wait();
  console.log(`${FEE_PROPOSAL} koin transferred to proposer account\n`);
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
