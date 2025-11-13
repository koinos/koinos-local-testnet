import { Signer, Provider } from "koilib";
import * as dotenv from "dotenv";

dotenv.config();

const provider = new Provider(process.env.JSONRPC_ENDPOINT);

const genesisSigner = Signer.fromWif(process.env.GENESIS_PRIVATE_KEY);
genesisSigner.provider = provider;

const koinSigner = Signer.fromWif(process.env.KOIN_PRIVATE_KEY);
koinSigner.provider = provider;

const pobSigner = Signer.fromWif(process.env.POB_PRIVATE_KEY);
pobSigner.provider = provider;

const resourcesSigner = Signer.fromWif(process.env.RESOURCES_PRIVATE_KEY);
resourcesSigner.provider = provider;

const vhpSigner = Signer.fromWif(process.env.VHP_PRIVATE_KEY);
vhpSigner.provider = provider;

const nameServiceSigner = Signer.fromWif(process.env.NAME_SERVICE_PRIVATE_KEY);
nameServiceSigner.provider = provider;

const governanceSigner = Signer.fromWif(process.env.GOVERNANCE_PRIVATE_KEY);
governanceSigner.provider = provider;

const getContractMetadataSigner = Signer.fromWif(process.env.GET_CONTRACT_METADATA_PRIVATE_KEY);
getContractMetadataSigner.provider = provider;

const fundSigner = Signer.fromWif(process.env.FUND_PRIVATE_KEY);
fundSigner.provider = provider;

const freemanasharerSigner = Signer.fromWif(process.env.FREEMANASHARER_PRIVATE_KEY);
freemanasharerSigner.provider = provider;

export const wallets = {
  genesis: genesisSigner,
  koin: koinSigner,
  pob: pobSigner,
  resources: resourcesSigner,
  vhp: vhpSigner,
  nameService: nameServiceSigner,
  getContractMetadata: getContractMetadataSigner,
  governance: governanceSigner,
  fund: fundSigner,
  freemanasharer: freemanasharerSigner,
}

