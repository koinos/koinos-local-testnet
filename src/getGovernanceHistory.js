import { contracts } from "./contracts.js";
import path from "path";

(async () => {
  const x = await contracts.bytestorage.provider.call("account_history.get_account_history", {
    address: contracts.governance.getId(),
    ascending: true,
    limit: 50,
    seq_num: 0,
  });

  console.log(JSON.stringify(x, null, 2));
})();
