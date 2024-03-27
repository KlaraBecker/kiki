use serde::{Deserialize, Serialize};
use serde_json::json;
use socket_io_client::SocketIO;
use std::time::Duration;

#[derive(Debug, Deserialize, Serialize)]
struct PostBalances {
    #[serde(rename = "preBalances")]
    pre_balances: Vec<u64>,
    #[serde(rename = "postBalances")]
    post_balances: Vec<u64>,
}

#[derive(Debug, Deserialize, Serialize)]
struct PostTokenBalances {
    #[serde(rename = "preTokenBalances")]
    pre_token_balances: Vec<PreTokenBalances>,
    #[serde(rename = "postTokenBalances")]
    post_token_balances: Vec<PostTokenBalances>,
}

#[derive(Debug, Deserialize, Serialize)]
struct PreTokenBalances {
    mint: String,
    owner: String,
    uiTokenAmount: UiTokenAmount,
}

#[derive(Debug, Deserialize, Serialize)]
struct UiTokenAmount {
    uiAmountString: String,
}

#[derive(Debug, Deserialize, Serialize)]
struct Block {
    result: BlockResult,
}

#[derive(Debug, Deserialize, Serialize)]
struct BlockResult {
    transactions: Vec<Transaction>,
    blockTime: u64,
}

#[derive(Debug, Deserialize, Serialize)]
struct Transaction {
    meta: TransactionMeta,
    transaction: TransactionDetails,
}

#[derive(Debug, Deserialize, Serialize)]
struct TransactionMeta {
    err: Option<String>,
}

#[derive(Debug, Deserialize, Serialize)]
struct TransactionDetails {
    signatures: Vec<String>,
    message: TransactionMessage,
}

#[derive(Debug, Deserialize, Serialize)]
struct TransactionMessage {
    accountKeys: Vec<String>,
}

fn main() {
    let api_url = "https://api.mainnet-beta.solana.com";
    let set_headers = [("Content-Type", "application/json")];
    let mut data_params = 122727237;
    let mut sio = SocketIO::connect("http://localhost:2200", Some("/notification")).unwrap();

    loop {
        let raw_data = json!({
