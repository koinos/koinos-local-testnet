import { Contract, utils } from "koilib";
import { wallets } from "./wallets";
import { abiResources } from "./abi/resources";
import { abiPob } from "./abi/pob";
import { abiGovernance } from "./abi/governance";
import { abiNameService } from "./abi/name_service";
import { abiFund } from "./abi/fund";
import { abiFreemanasharer } from "./abi/freemanasharer";

const koinContract = new Contract({
  id: wallets.koin.address,
  abi: utils.tokenAbi,
  provider: wallets.koin.provider,
  signer: wallets.koin,
});

const vhpContract = new Contract({
  id: wallets.vhp.address,
  abi: utils.tokenAbi,
  provider: wallets.vhp.provider,
  signer: wallets.vhp,
});

const resourcesContract = new Contract({
  id: wallets.resources.address,
  abi: abiResources,
  provider: wallets.resources.provider,
  signer: wallets.resources,
});

const pobContract = new Contract({
  id: wallets.pob.address,
  abi: abiPob,
  provider: wallets.pob.provider,
  signer: wallets.pob,
});

const governanceContract = new Contract({
  id: wallets.governance.address,
  abi: abiGovernance,
  provider: wallets.governance.provider,
  signer: wallets.governance,
});

const nameServiceContract = new Contract({
  id: wallets.nameService.address,
  abi: abiNameService,
  provider: wallets.nameService.provider,
  signer: wallets.nameService,
});

const fundContract = new Contract({
  id: wallets.fund.address,
  abi: abiFund,
  provider: wallets.fund.provider,
  signer: wallets.fund,
});

const getContractMetadataContract = new Contract({
  id: wallets.getContractMetadata.address,
  abi: {},
  provider: wallets.getContractMetadata.provider,
  signer: wallets.getContractMetadata,
});

const freemanasharerContract = new Contract({
  id: wallets.freemanasharer.address,
  abi: abiFreemanasharer,
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