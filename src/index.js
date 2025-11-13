import { wallets } from "./wallets.js";
import { contracts } from "./contracts.js";
import { Transaction } from "koilib";

async function deployContracts() {
  const deployOptions = {
    authorizesCallContract: true,
    authorizesTransactionApplication: true,
    authorizesUploadContract: true,
  };

  // Upload all contracts
  for (const name of Object.keys(contracts)) {
    console.log(`Uploading ${name} contract...`);
    const contract = contracts[name];
    const deploy = await contract.deploy(deployOptions);
    await deploy.transaction.wait();
    console.log(`${name} contract uploaded successfully`);
  }
}

async function setSystemContracts() {
  const systemContracts = [
    "governance",
    "name_service",
    "resources",
    "pob",
    "vhp",
    "koin",
    "get_contract_metadata",
    "fund",
  ]

  const transaction = new Transaction({
    signer: wallets.genesis,
    provider: wallets.genesis.provider,
  });

  for (const name of systemContracts) {
    console.log(`Setting ${name} contract as system contract...`);
    await transaction.pushOperation({
      set_system_contract: {
        contract_id: contracts[name].id,
        system_contract: true,
      }
    });
  }

  console.log("Setting get_contract_name syscall...");
  await transaction.pushOperation({
    set_system_call: {
      call_id: 10000, // get_contract_name
      target: {
        // thunk_id: 0,
        system_call_bundle: {
          contract_id: contracts.nameService.id,
          entry_point: Number(contracts.nameService.abi.methods.get_contract_name.entry_point),
        }
      },
    },
  });

  console.log("Setting get_contract_address syscall...");
  await transaction.pushOperation({
    set_system_call: {
      call_id: 10001, // get_contract_address
      target: {
        // thunk_id: 0,
        system_call_bundle: {
          contract_id: contracts.nameService.id,
          entry_point: Number(contracts.nameService.abi.methods.get_contract_address.entry_point),
        }
      },
    },
  });

  await transaction.prepare();
  await transaction.sign();
  await transaction.send();
  await transaction.wait();
  console.log("System contracts and syscalls set successfully");
}

async function setNameServiceRecords() {
  const transaction = new Transaction({
    signer: wallets.genesis,
    provider: wallets.genesis.provider,
  });

  console.log("Setting contract names in the name service...");
  for (const contractName of Object.keys(contracts)) {
    console.log(`Setting ${name} contract name in the name service...`);
    let name;
    switch (contractName) {
      case "nameService":
        name = "name_service";
        break;
      case "fund":
        name = "koinos-fund";
        break;
      default:
        name = contractName;
        break;
    }
    await transaction.pushOperation(contracts.nameService.functions.set_record, {
      name: name,
      address: contracts[contractName].id,
    });
  }
  await transaction.prepare();
  await transaction.sign();
  await transaction.send();
  await transaction.wait();
  console.log("name service records set successfully");
}

async function mintBurnKoin() {
  const transaction = new Transaction({
    signer: wallets.genesis,
    provider: wallets.genesis.provider,
  });
  
  await transaction.pushOperation(contracts.koin.functions.mint, {
    to: wallets.genesis.address,
    value: "1000000000000000",
  });
  
  await transaction.pushOperation(contracts.koin.functions.mint, {
    to: wallets.freemanasharer.address,
    value: "10000000000000",
  });

  // allow pob to burn 5 million koin
  await transaction.pushOperation(contracts.koin.functions.approve, {
    owner: wallets.genesis.address,
    spender: wallets.pob.address,
    value: "500000000000000",
  });

  // burn 5 million koin
  await transaction.pushOperation(contracts.pob.functions.burn, {
    burn_address: wallets.genesis.address,
    vhp_address: wallets.genesis.address,
    value: "500000000000000",
  });

  await transaction.prepare();
  await transaction.sign();
  await transaction.send();
  await transaction.wait();
  console.log("10 million koin minted for genesis account");
  console.log("100k koin minted for freemanasharer account");
  console.log("5 million koin burned for genesis account");
}

async function registerPublicKey() {
  const transaction = new Transaction({
    signer: wallets.genesis,
    provider: wallets.genesis.provider,
  });

  await transaction.pushOperation(contracts.pob.functions.register_public_key, {
    producer_address: wallets.genesis.address,
    public_key: utils.encodeBase64url(wallets.genesis.publicKey),
  }); 

  await transaction.prepare();
  await transaction.sign();
  await transaction.send();
  await transaction.wait();

  console.log("public key registered for genesis account");
  const headInfo = await transaction.provider.getHeadInfo();
  return headInfo.head_topology.height;
}

async function waitUntilBlockHeight(blockHeight) {
  const provider = wallets.genesis.provider;
  let headInfo = await provider.getHeadInfo();
  while (headInfo.head_topology.height < blockHeight) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    headInfo = await provider.getHeadInfo();
  }
}

async function overrideSystemCalls() {
  const transaction = new Transaction({
    signer: wallets.genesis,
    provider: wallets.genesis.provider,
  });
  
  // override pre_block_callback syscall
  console.log("Setting pre_block_callback syscall...");
  await transaction.pushOperation({
    set_system_call: {
      call_id: 8, // pre_block_callback
      target: {
        // thunk_id: 0,
        system_call_bundle: {
          contract_id: contracts.governance.id,
          entry_point: 0x531d5d4e,
        }
      },
    },
  });

  // override process_block_signature syscall
  console.log("Setting process_block_signature syscall...");
  await transaction.pushOperation({
    set_system_call: {
      call_id: 101, // process_block_signature
      target: {
        // thunk_id: 0,
        system_call_bundle: {
          contract_id: contracts.pob.id,
          entry_point: 0xe0adbeab,
        }
      },
    },
  });

  // override get_account_rc syscall
  console.log("Setting get_account_rc syscall...");
  await transaction.pushOperation({
    set_system_call: {
      call_id: 201, // get_account_rc
      target: {
        // thunk_id: 0,
        system_call_bundle: {
          contract_id: contracts.koin.id,
          entry_point: 0x2d464aab,
        }
      },
    },
  });

  // override consume_account_rc syscall
  console.log("Setting consume_account_rc syscall...");
  await transaction.pushOperation({
    set_system_call: {
      call_id: 202, // consume_account_rc
      target: {
        // thunk_id: 0,
        system_call_bundle: {
          contract_id: contracts.koin.id,
          entry_point: 0x80e3f5c9,
        }
      },
    },
  });

  // override get_resource_limits syscall
  console.log("Setting get_resource_limits syscall...");
  await transaction.pushOperation({
    set_system_call: {
      call_id: 203, // get_resource_limits
      target: {
        // thunk_id: 0,
        system_call_bundle: {
          contract_id: contracts.resources.id,
          entry_point: 0x427a0394,
        }
      },
    },
  });

  // override consume_block_resources syscall
  console.log("Setting consume_block_resources syscall...");
  await transaction.pushOperation({
    set_system_call: {
      call_id: 204, // consume_block_resources
      target: {
        // thunk_id: 0,
        system_call_bundle: {
          contract_id: contracts.resources.id,
          entry_point: 0x9850b1fd,
        }
      },
    },
  });

  // override check_system_authority syscall
  console.log("Setting check_system_authority syscall...");
  await transaction.pushOperation({
    set_system_call: {
      call_id: 110, // check_system_authority
      target: {
        // thunk_id: 0,
        system_call_bundle: {
          contract_id: contracts.governance.id,
          entry_point: 0xa88d06c9,
        }
      },
    },
  });

  // override get_contract_metadata syscall
  console.log("Setting get_contract_metadata syscall...");
  await transaction.pushOperation({
    set_system_call: {
      call_id: 112, // get_contract_metadata
      target: {
        // thunk_id: 0,
        system_call_bundle: {
          contract_id: contracts.getContractMetadata.id,
          entry_point: 0x784faa08,
        }
      },
    },
  });

  await transaction.prepare();
  await transaction.sign();
  await transaction.send();
  await transaction.wait();
  console.log("System calls overridden successfully");
}

async function main() {
  await deployContracts();
  await setSystemContracts();
  const blockHeight = await registerPublicKey();
  await setNameServiceRecords();
  await mintBurnKoin();
  await waitUntilBlockHeight(blockHeight + 20);
  await overrideSystemCalls();

  console.log("Bootstrap complete");
  console.log(`set "algorithm: pob" in config.yml and restart the node`);
}

main();