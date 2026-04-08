/**
 * Tree-shake test dApp
 *
 * This file imports only a small subset of the SDK.
 * After bundling, check the output size — if tree-shaking works,
 * unused modules (e.g. TokenCreateTransaction, ScheduleCreateTransaction,
 * ContractCreateTransaction, etc.) should be eliminated.
 */

// --- Minimal imports: just enough to do a simple transfer ---
import {
    Client,
    AccountId,
    PrivateKey,
    TransferTransaction,
    Hbar,
} from "@hiero-ledger/sdk";

async function main() {
    const operatorId = AccountId.fromString("0.0.1234");
    const operatorKey = PrivateKey.generateED25519();

    const client = Client.forTestnet().setOperator(operatorId, operatorKey);

    const tx = new TransferTransaction()
        .addHbarTransfer(operatorId, new Hbar(-1))
        .addHbarTransfer("0.0.5678", new Hbar(1));

    const response = await tx.execute(client);
    const receipt = await response.getReceipt(client);

    console.log("Transfer status:", receipt.status.toString());
}

main().catch(console.error);
