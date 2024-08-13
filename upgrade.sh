#!/bin/bash

SLEEP_TIME=7

cat << EOF

Uploading new contracts...

EOF
koinos-cli -f upgrade/scripts/1-fund.txt
sleep 15
koinos-cli -f upgrade/scripts/2-1-upload_koin.txt
koinos-cli -f upgrade/scripts/2-2-upload_vhp.txt
koinos-cli -f upgrade/scripts/2-3-upload_koin_wrapper.txt
koinos-cli -f upgrade/scripts/2-4-upload_mock_smart_wallet.txt
sleep 15

cat << EOF
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█░▄▄█░██░█░▄▄▀█░▄▀▄░██▄██▄░▄█▄░▄██▄██░▄▄▀█░▄▄▄███▀▄▄▀█░▄▄▀█▀▄▄▀█▀▄▄▀█▀▄▄▀█░▄▄█░▄▄▀█░██
█▄▄▀█░██░█░▄▄▀█░█▄█░██░▄██░███░███░▄█░██░█░█▄▀███░▀▀░█░▀▀▄█░██░█░▀▀░█░██░█▄▄▀█░▀▀░█░██
█▄▄▄██▄▄▄█▄▄▄▄█▄███▄█▄▄▄██▄███▄██▄▄▄█▄██▄█▄▄▄▄███░████▄█▄▄██▄▄██░█████▄▄██▄▄▄█▄██▄█▄▄█
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
EOF
koinos-cli -f upgrade/scripts/3-submit_proposal.txt
