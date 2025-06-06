#!/bin/bash

SLEEP_TIME=7

cat << EOF
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██░██░█▀▄▄▀█░██▀▄▄▀█░▄▄▀█░▄▀██▄██░▄▄▀█░▄▄▄███▀▄▀█▀▄▄▀█░▄▄▀█▄░▄█░▄▄▀█░▄▄▀█▀▄▀█▄░▄█░▄▄
██░██░█░▀▀░█░██░██░█░▀▀░█░█░██░▄█░██░█░█▄▀███░█▀█░██░█░██░██░██░▀▀▄█░▀▀░█░█▀██░██▄▄▀
██▄▀▀▄█░████▄▄██▄▄██▄██▄█▄▄██▄▄▄█▄██▄█▄▄▄▄████▄███▄▄██▄██▄██▄██▄█▄▄█▄██▄██▄███▄██▄▄▄
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

EOF
koinos-cli -f scripts/1-1-upload_koin.txt
sleep $SLEEP_TIME
koinos-cli -f scripts/1-2-upload_vhp.txt
sleep $SLEEP_TIME
koinos-cli -f scripts/1-3-upload_resources.txt
sleep $SLEEP_TIME
koinos-cli -f scripts/1-4-upload_pob.txt
sleep $SLEEP_TIME
koinos-cli -f scripts/1-5-upload_governance.txt
sleep $SLEEP_TIME
koinos-cli -f scripts/1-6-upload_name_service.txt
sleep $SLEEP_TIME
koinos-cli -f scripts/1-7-upload_get_contract_metadata.txt
sleep $SLEEP_TIME

cat << EOF
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██░▄▄░█░▄▄▀█▀▄▄▀█░▄▀▄░█▀▄▄▀█▄░▄██▄██░▄▄▀█░▄▄▄███░▄▄█░██░█░▄▄█▄░▄█░▄▄█░▄▀▄░███▀▄▀█▀▄▄▀█░▄▄▀█▄░▄█░▄▄▀█░▄▄▀█▀▄▀█▄░▄█░▄▄
██░▀▀░█░▀▀▄█░██░█░█▄█░█░██░██░███░▄█░██░█░█▄▀███▄▄▀█░▀▀░█▄▄▀██░██░▄▄█░█▄█░███░█▀█░██░█░██░██░██░▀▀▄█░▀▀░█░█▀██░██▄▄▀
██░████▄█▄▄██▄▄██▄███▄██▄▄███▄██▄▄▄█▄██▄█▄▄▄▄███▄▄▄█▀▀▀▄█▄▄▄██▄██▄▄▄█▄███▄████▄███▄▄██▄██▄██▄██▄█▄▄█▄██▄██▄███▄██▄▄▄
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
EOF
koinos-cli -f scripts/2-system_contracts.txt
sleep $SLEEP_TIME

cat << EOF
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██░▀██░█░▄▄▀█░▄▀▄░█░▄▄███░▄▄█░▄▄█░▄▄▀█▀███▀██▄██▀▄▀█░▄▄███░▄▄█░██░█░▄▄█▀▄▀█░▄▄▀█░██░██░▄▄
██░█░█░█░▀▀░█░█▄█░█░▄▄███▄▄▀█░▄▄█░▀▀▄██░▀░███░▄█░█▀█░▄▄███▄▄▀█░▀▀░█▄▄▀█░█▀█░▀▀░█░██░██▄▄▀
██░██▄░█▄██▄█▄███▄█▄▄▄███▄▄▄█▄▄▄█▄█▄▄███▄███▄▄▄██▄██▄▄▄███▄▄▄█▀▀▀▄█▄▄▄██▄██▄██▄█▄▄█▄▄█▄▄▄
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
EOF
koinos-cli -f scripts/3-name_service_syscalls.txt
sleep $SLEEP_TIME

cat << EOF
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██░▄▄▀█░▄▄█░▄▄▄██▄██░▄▄█▄░▄█░▄▄█░▄▄▀██▄██░▄▄▀█░▄▄▄███░▄▄▀█░▄▄▀█░▄▀▄░█░▄▄█░▄▄
██░▀▀▄█░▄▄█░█▄▀██░▄█▄▄▀██░██░▄▄█░▀▀▄██░▄█░██░█░█▄▀███░██░█░▀▀░█░█▄█░█░▄▄█▄▄▀
██░██░█▄▄▄█▄▄▄▄█▄▄▄█▄▄▄██▄██▄▄▄█▄█▄▄█▄▄▄█▄██▄█▄▄▄▄███▄██▄█▄██▄█▄███▄█▄▄▄█▄▄▄
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

EOF
koinos-cli -f scripts/4-register_names.txt
sleep $SLEEP_TIME

cat << EOF
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██░▄▀▄░██▄██░▄▄▀█▄░▄██▄██░▄▄▀█░▄▄▄███░▄▄▀█░▄▄▀█░▄▀███░▄▄▀█░██░█░▄▄▀█░▄▄▀██▄██░▄▄▀█░▄▄▄████░█▀▄██░▄▄▄░█▄░▄██░▀██░
██░█░█░██░▄█░██░██░███░▄█░██░█░█▄▀███░▀▀░█░██░█░█░███░▄▄▀█░██░█░▀▀▄█░██░██░▄█░██░█░█▄▀████░▄▀███░███░██░███░█░█░
██░███░█▄▄▄█▄██▄██▄██▄▄▄█▄██▄█▄▄▄▄███▄██▄█▄██▄█▄▄████▄▄▄▄██▄▄▄█▄█▄▄█▄██▄█▄▄▄█▄██▄█▄▄▄▄████░██░██░▀▀▀░█▀░▀██░██▄░
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

EOF
koinos-cli -f scripts/5-mint_koin.txt
sleep $SLEEP_TIME
koinos-cli -f scripts/6-burn_koin.txt
sleep $SLEEP_TIME

cat << EOF
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█░▄▄▀█░▄▄█░▄▄▄██▄██░▄▄█▄░▄█░▄▄█░▄▄▀██▄██░▄▄▀█░▄▄▄███▀▄▄▀█░██░█░▄▄▀█░███▄██▀▄▀███░█▀█░▄▄█░██░
█░▀▀▄█░▄▄█░█▄▀██░▄█▄▄▀██░██░▄▄█░▀▀▄██░▄█░██░█░█▄▀███░▀▀░█░██░█░▄▄▀█░███░▄█░█▀███░▄▀█░▄▄█░▀▀░
█▄█▄▄█▄▄▄█▄▄▄▄█▄▄▄█▄▄▄██▄██▄▄▄█▄█▄▄█▄▄▄█▄██▄█▄▄▄▄███░█████▄▄▄█▄▄▄▄█▄▄█▄▄▄██▄████▄█▄█▄▄▄█▀▀▀▄
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
EOF
koinos-cli -f scripts/7-register_public_key.txt

cat << EOF
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█░███░█░▄▄▀██▄██▄░▄██▄██░▄▄▀█░▄▄▄███░▄░█░▄▄███░▄▄▀█░██▀▄▄▀█▀▄▀█░█▀█░▄▄
█▄▀░▀▄█░▀▀░██░▄██░███░▄█░██░█░█▄▀████▀▄█▄▄▀███░▄▄▀█░██░██░█░█▀█░▄▀█▄▄▀
██▄█▄██▄██▄█▄▄▄██▄██▄▄▄█▄██▄█▄▄▄▄███░▀▀█▀▀▄███▄▄▄▄█▄▄██▄▄███▄██▄█▄█▄▄▄
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
EOF
sleep $(( $SLEEP_TIME*25 ))

cat << EOF
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█▀▄▄▀█▀███▀█░▄▄█░▄▄▀█░▄▄▀██▄██░▄▀██▄██░▄▄▀█░▄▄▄███░▄▄█░██░█░▄▄█▄░▄█░▄▄█░▄▀▄░███▀▄▀█░▄▄▀█░██░██░▄▄
█░██░██░▀░██░▄▄█░▀▀▄█░▀▀▄██░▄█░█░██░▄█░██░█░█▄▀███▄▄▀█░▀▀░█▄▄▀██░██░▄▄█░█▄█░███░█▀█░▀▀░█░██░██▄▄▀
██▄▄████▄███▄▄▄█▄█▄▄█▄█▄▄█▄▄▄█▄▄██▄▄▄█▄██▄█▄▄▄▄███▄▄▄█▀▀▀▄█▄▄▄██▄██▄▄▄█▄███▄████▄██▄██▄█▄▄█▄▄█▄▄▄
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
EOF
koinos-cli -f scripts/8-override_syscalls.txt
sleep $SLEEP_TIME

cat << EOF
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█░██░█▀▄▄▀█░▄▀█░▄▄▀█▄░▄█░▄▄███░▄▄▀█░██▀▄▄▀█▀▄▀█░█▀███▀▄▄▀█░▄▄▀█▀▄▄▀█░▄▀█░██░█▀▄▀█░▄▄█░▄▄▀███▄░▄█▀▄▄▀███▀▄▄▀█▀▄▄▀█░▄▄▀
█░██░█░▀▀░█░█░█░▀▀░██░██░▄▄███░▄▄▀█░██░██░█░█▀█░▄▀███░▀▀░█░▀▀▄█░██░█░█░█░██░█░█▀█░▄▄█░▀▀▄████░██░██░███░▀▀░█░██░█░▄▄▀
██▄▄▄█░████▄▄██▄██▄██▄██▄▄▄███▄▄▄▄█▄▄██▄▄███▄██▄█▄███░████▄█▄▄██▄▄██▄▄███▄▄▄██▄██▄▄▄█▄█▄▄████▄███▄▄████░█████▄▄██▄▄▄▄
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
EOF
