import crypto from "crypto";
import { Signer, Provider } from "koilib";

const JSONRPC_ENDPOINT = "http://localhost:8082";
const GENESIS_PRIVATE_KEY = "L17qNvW52v3bfSdoCgm5aaXot6fjCL5qSMeYVCDnrz7rQzCZjQQi";
const KOIN_PRIVATE_KEY = "Kzv1sLqJq45Aco8yryYcvXhjPNeja5BLmRPs4TWobxxREkXbLnhg";
const POB_PRIVATE_KEY = "L5k37mtowajMxSNPxUtYUxdhSJnB66hahpUUqMfhBVZByjfy2VVR";
const RESOURCES_PRIVATE_KEY = "L4EGFxjEu1rfHVhHkukzmnXrPJ1PKpGCzYymVfgSxF6SrXNWMC3h";
const VHP_PRIVATE_KEY = "L5cYzwAat1XqVEFSuyfCBN61ebVUHZ5CAfFYsMkgZF8YzXgAyzto";
const NAME_SERVICE_PRIVATE_KEY = "KxdBPEUWL2LPokEaLGaucMWmgUqCC5ckbLChYqbAwm3j2ypARmdy";
const GOVERNANCE_PRIVATE_KEY = "KyzyNMMAvWiCMxsxfZbVjuhHhZT6Z3iBhB6NWN9VHPqB6hGp74Hd";
const GET_CONTRACT_METADATA_PRIVATE_KEY = "L163ee4Y5NR7qkmG9hQ1kch5jizwdgbJ2LGor4Yu9NYUKied4maw";
const FUND_PRIVATE_KEY = "L24uDACpTzaXeQfN73xV4TcabyxsNpR8R4miXSeLnMnoZnmfw5ax";
const FREEMANASHARER_PRIVATE_KEY = "L1TgxVxvEPx52iZxPwApCKdxUV66NWq5ZfeFzDF5ySyrXb2YJe52";

const provider = new Provider(JSONRPC_ENDPOINT);

const genesisSigner = Signer.fromWif(GENESIS_PRIVATE_KEY);
genesisSigner.provider = provider;

const koinSigner = Signer.fromWif(KOIN_PRIVATE_KEY);
koinSigner.provider = provider;

const pobSigner = Signer.fromWif(POB_PRIVATE_KEY);
pobSigner.provider = provider;

const resourcesSigner = Signer.fromWif(RESOURCES_PRIVATE_KEY);
resourcesSigner.provider = provider;

const vhpSigner = Signer.fromWif(VHP_PRIVATE_KEY);
vhpSigner.provider = provider;

const nameServiceSigner = Signer.fromWif(NAME_SERVICE_PRIVATE_KEY);
nameServiceSigner.provider = provider;

const governanceSigner = Signer.fromWif(GOVERNANCE_PRIVATE_KEY);
governanceSigner.provider = provider;

const getContractMetadataSigner = Signer.fromWif(GET_CONTRACT_METADATA_PRIVATE_KEY);
getContractMetadataSigner.provider = provider;

const fundSigner = Signer.fromWif(FUND_PRIVATE_KEY);
fundSigner.provider = provider;

const freemanasharerSigner = Signer.fromWif(FREEMANASHARER_PRIVATE_KEY);
freemanasharerSigner.provider = provider;

function randomSigner() {
  const signer = new Signer({ privateKey: crypto.randomBytes(32).toString("hex") });
  signer.provider = provider;
  return signer;
}

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
  random: randomSigner,
}

