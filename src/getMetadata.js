import { contracts } from "./contracts.js";

(async () => {
  const metadata = await contracts.pob.provider.invokeGetContractMetadata(
    contracts.pob.getId()
  );
  console.log(metadata);
})();
