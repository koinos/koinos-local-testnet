#!/bin/bash

SLEEP_TIME=7

cat << EOF

Uploading new contracts...

EOF
koinos-cli -f upgrade/scripts/1-fund.txt
sleep $SLEEP_TIME
koinos-cli -f upgrade/scripts/2-1-upload_koin.txt
sleep $SLEEP_TIME
koinos-cli -f upgrade/scripts/2-2-upload_vhp.txt
sleep $SLEEP_TIME

cat << EOF
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█░▄▄█░██░█░▄▄▀█░▄▀▄░██▄██▄░▄█▄░▄██▄██░▄▄▀█░▄▄▄███▀▄▄▀█░▄▄▀█▀▄▄▀█▀▄▄▀█▀▄▄▀█░▄▄█░▄▄▀█░██
█▄▄▀█░██░█░▄▄▀█░█▄█░██░▄██░███░███░▄█░██░█░█▄▀███░▀▀░█░▀▀▄█░██░█░▀▀░█░██░█▄▄▀█░▀▀░█░██
█▄▄▄██▄▄▄█▄▄▄▄█▄███▄█▄▄▄██▄███▄██▄▄▄█▄██▄█▄▄▄▄███░████▄█▄▄██▄▄██░█████▄▄██▄▄▄█▄██▄█▄▄█
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
EOF
koinos-cli -f upgrade/scripts/3-submit_proposal.txt
sleep $SLEEP_TIME
