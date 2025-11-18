# Koinos local testnet

## Prerequisites

- Ensure that `koinos-cli` is on your path

## Instructions

1. Copy the `config/` directory to your `koinos/koinos` directory
2. Copy the `env` file to your `koinos/koinos` directory and rename it to `.env`
3. Set up the block producer by creating the directory `mkdir -p ~/.local.koinos/block_producer` and copying the private key `cp producer/private.key ~/.local.koinos/block_producer/private.key`
4. Start up the Koinos cluster with `docker compose up`
5. Install dependencies to run the script (you need node JS installed): `yarn install`
6. When the cluster has started producing blocks, execute `yarn bootstrap`
7. After the script completes, you can change the block producer to run `pob` algorithm by modifying `config/config.yml`

