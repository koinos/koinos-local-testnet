# Koinos local testnet

## Instructions

1. Copy the `config/` directory to your `koinos/koinos` directory
2. Copy the `env` file to your `koinos/koinos` directory and rename it to `.env`
3. Start up the Koinos cluster with `docker compose up`
4. When the cluster has started producing blocks, execute the the `bootstrap.sh` script
5. After the script completes, you can change the block producer to run `pob` algorithm

