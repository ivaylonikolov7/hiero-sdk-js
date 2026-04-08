#!/bin/bash
# Generate minimal proto JS files for non-transaction types
# Each file contains only the specific proto messages needed + their dependencies

set -e

PROTO_DIR="src/proto"
OUT_DIR="src/minimal"
PBJS="npx pbjs"
PBTS="npx pbts"
COMMON_ARGS="-t static-module -w es6 --es6 --dependency protobufjs/minimal"

generate() {
    local name=$1
    local root=$2
    local filter_json=$3
    shift 3
    local proto_files=("$@")

    echo "Generating ${name}..."

    # Write filter file
    local filter_file="/tmp/filter_${name}.json"
    echo "${filter_json}" > "${filter_file}"

    # Generate JS
    $PBJS $COMMON_ARGS -r "hashgraph_${root}" \
        --filter "${filter_file}" \
        -p "${PROTO_DIR}" \
        -o "${OUT_DIR}/${name}.js" \
        "${proto_files[@]}"

    # Generate TypeScript definitions
    $PBTS -o "${OUT_DIR}/${name}.d.ts" "${OUT_DIR}/${name}.js"

    rm -f "${filter_file}"
}

# 1. Entity IDs (AccountID, ContractID, FileID, TokenID, TopicID, ScheduleID, NftID, TransactionID, Key, KeyList)
generate "entity_ids" "entity_ids" \
    '{"messageNames":["proto.AccountID","proto.ContractID","proto.FileID","proto.TokenID","proto.TopicID","proto.ScheduleID","proto.NftID","proto.TransactionID","proto.Key","proto.KeyList","proto.ThresholdKey"]}' \
    "${PROTO_DIR}/services_basic_types.proto"

# 2. Transaction core (Transaction, TransactionBody, TransactionList, SignedTransaction, SignatureMap)
generate "transaction_core" "transaction_core" \
    '{"messageNames":["proto.Transaction","proto.TransactionBody","proto.TransactionList","proto.SignedTransaction","proto.SignatureMap","proto.SignaturePair"]}' \
    "${PROTO_DIR}/services_transaction.proto" "${PROTO_DIR}/services_transaction_contents.proto" "${PROTO_DIR}/sdk_transaction_list.proto"

# 3. Query & Response
generate "query_response" "query_response" \
    '{"messageNames":["proto.Query","proto.Response","proto.QueryHeader","proto.ResponseHeader","proto.ResponseCodeEnum","proto.ResponseType"]}' \
    "${PROTO_DIR}/services_query.proto" "${PROTO_DIR}/services_response.proto" "${PROTO_DIR}/services_query_header.proto" "${PROTO_DIR}/services_response_header.proto" "${PROTO_DIR}/services_response_code.proto"

# 4. Crypto info responses
generate "crypto_info" "crypto_info" \
    '{"messageNames":["proto.CryptoGetInfoResponse","proto.CryptoGetAccountBalanceResponse"]}' \
    "${PROTO_DIR}/services_crypto_get_info.proto" "${PROTO_DIR}/services_crypto_get_account_balance.proto"

# 5. Consensus info
generate "consensus_info" "consensus_info" \
    '{"messageNames":["proto.ConsensusGetTopicInfoResponse"]}' \
    "${PROTO_DIR}/services_consensus_get_topic_info.proto"

# 6. Contract info
generate "contract_info" "contract_info" \
    '{"messageNames":["proto.ContractGetInfoResponse","proto.ContractStateChange","proto.StorageChange","proto.ContractNonceInfo"]}' \
    "${PROTO_DIR}/services_contract_get_info.proto" "${PROTO_DIR}/streams_contract_state_change.proto"

# 7. File info
generate "file_info" "file_info" \
    '{"messageNames":["proto.FileGetInfoResponse","proto.FileGetContentsResponse"]}' \
    "${PROTO_DIR}/services_file_get_info.proto" "${PROTO_DIR}/services_file_get_contents.proto"

# 8. Token info
generate "token_info" "token_info" \
    '{"messageNames":["proto.TokenInfo","proto.TokenType","proto.TokenSupplyType","proto.TokenFreezeStatus","proto.TokenKycStatus","proto.TokenPauseStatus","proto.TokenKeyValidation","proto.SubType"]}' \
    "${PROTO_DIR}/services_token_get_info.proto"

# 9. Fee types
generate "fee_types" "fee_types" \
    '{"messageNames":["proto.FeeComponents","proto.FeeData","proto.FeeSchedule","proto.CurrentAndNextFeeSchedule","proto.TransactionFeeSchedule","proto.ExchangeRateSet","proto.ExchangeRate"]}' \
    "${PROTO_DIR}/services_exchange_rate.proto"

# 10. Network info
generate "network_info" "network_info" \
    '{"messageNames":["proto.NetworkGetVersionInfoResponse","proto.SemanticVersion","proto.NodeAddressBook","proto.NodeAddress","proto.StakingInfo"]}' \
    "${PROTO_DIR}/services_network_get_version_info.proto" "${PROTO_DIR}/services_basic_types.proto"

# 11. Receipt & Record
generate "receipt_record" "receipt_record" \
    '{"messageNames":["proto.TransactionGetReceiptResponse","proto.TransactionGetRecordResponse","proto.TransactionReceipt","proto.TransactionRecord"]}' \
    "${PROTO_DIR}/services_transaction_get_receipt.proto" "${PROTO_DIR}/services_transaction_get_record.proto" "${PROTO_DIR}/services_transaction_record.proto"

# 12. Schedule types
generate "schedule_types" "schedule_types" \
    '{"messageNames":["proto.SchedulableTransactionBody","proto.ScheduleInfo","proto.ScheduleGetInfoResponse"]}' \
    "${PROTO_DIR}/services_schedulable_transaction_body.proto" "${PROTO_DIR}/services_schedule_get_info.proto"

# 13. Misc types (PendingAirdropId, FreezeType, HederaFunctionality)
generate "misc_types" "misc_types" \
    '{"messageNames":["proto.PendingAirdropId","proto.PendingAirdropRecord","proto.FreezeType","proto.HederaFunctionality"]}' \
    "${PROTO_DIR}/services_basic_types.proto" "${PROTO_DIR}/services_freeze_type.proto"

echo "Done generating minimal type files!"
