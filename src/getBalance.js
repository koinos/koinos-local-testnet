import { wallets } from "./wallets.js";
import { Contract, Provider, utils } from "koilib";
(async () => {
  const provider = new Provider("http://localhost:8082");
  const contract = new Contract({
    id: wallets.koin.address,
    abi: utils.tokenAbi,
    provider: provider,
  });
  const balance = await contract.functions.balanceOf({
    owner: wallets.genesis.address,
  });
  console.log(balance);
})();
