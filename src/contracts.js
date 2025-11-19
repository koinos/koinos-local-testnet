import fs from "fs";
import path from "path";
import { Contract, utils } from "koilib";
import { wallets } from "./wallets.js";
import { abiResources } from "./abi/resources.js";
import { abiPob } from "./abi/pob.js";
import { abiGovernance } from "./abi/governance.js";
import { abiNameService } from "./abi/name_service.js";
import { abiFund } from "./abi/fund.js";
import { abiFreemanasharer } from "./abi/freemanasharer.js";

delete utils.tokenAbi.koilib_types.nested.koinos.nested.btype;
const currentDir = path.dirname(new URL(import.meta.url).pathname);
const wasmDir = path.join(currentDir, "wasm");

const abiVhp = JSON.parse(JSON.stringify(utils.tokenAbi));
abiVhp.methods.effective_balance_of = {
  argument: "token.balance_of_args",
  return: "token.uint64",
  description: "Get effective balance of an account",
  read_only: true,
  entry_point: 0x629f31e6,
};

const koinContract = new Contract({
  id: wallets.koin.address,
  abi: utils.tokenAbi,
  bytecode: new Uint8Array(fs.readFileSync(path.join(wasmDir, "koin.wasm"))),
  provider: wallets.koin.provider,
  signer: wallets.koin,
});

const vhpContract = new Contract({
  id: wallets.vhp.address,
  abi: abiVhp,
  bytecode: new Uint8Array(fs.readFileSync(path.join(wasmDir, "vhp.wasm"))),
  provider: wallets.vhp.provider,
  signer: wallets.vhp,
});

const resourcesContract = new Contract({
  id: wallets.resources.address,
  abi: abiResources,
  bytecode: new Uint8Array(fs.readFileSync(path.join(wasmDir, "resources.wasm"))),
  provider: wallets.resources.provider,
  signer: wallets.resources,
});

const pobContract = new Contract({
  id: wallets.pob.address,
  abi: abiPob,
  bytecode: new Uint8Array(fs.readFileSync(path.join(wasmDir, "pob.wasm"))),
  provider: wallets.pob.provider,
  signer: wallets.pob,
});

const governanceContract = new Contract({
  id: wallets.governance.address,
  abi: abiGovernance,
  bytecode: new Uint8Array(fs.readFileSync(path.join(wasmDir, "governance.wasm"))),
  provider: wallets.governance.provider,
  signer: wallets.governance,
});

const nameServiceContract = new Contract({
  id: wallets.nameService.address,
  abi: abiNameService,
  bytecode: new Uint8Array(fs.readFileSync(path.join(wasmDir, "name_service.wasm"))),
  provider: wallets.nameService.provider,
  signer: wallets.nameService,
});

const fundContract = new Contract({
  id: wallets.fund.address,
  abi: abiFund,
  bytecode: new Uint8Array(fs.readFileSync(path.join(wasmDir, "fund.wasm"))),
  provider: wallets.fund.provider,
  signer: wallets.fund,
});

const getContractMetadataContract = new Contract({
  id: wallets.getContractMetadata.address,
  abi: {},
  bytecode: new Uint8Array(fs.readFileSync(path.join(wasmDir, "get_contract_metadata.wasm"))),
  provider: wallets.getContractMetadata.provider,
  signer: wallets.getContractMetadata,
});

const freemanasharerContract = new Contract({
  id: wallets.freemanasharer.address,
  abi: abiFreemanasharer,
  bytecode: new Uint8Array(fs.readFileSync(path.join(wasmDir, "freemanasharer.wasm"))),
  provider: wallets.freemanasharer.provider,
  signer: wallets.freemanasharer,
});

export const contracts = {
  koin: koinContract,
  vhp: vhpContract,
  resources: resourcesContract,
  pob: pobContract,
  governance: governanceContract,
  nameService: nameServiceContract,
  fund: fundContract,
  freemanasharer: freemanasharerContract,
  getContractMetadata: getContractMetadataContract,
};