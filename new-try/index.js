var DiamSdk = require("diamante-sdk-js");

const pair = DiamSdk.Keypair.random();

pair.secret();

pair.publicKey();

(async function main() {
    try {
      const response = await fetch(
        `https://friendbot.diamcircle.io?addr=${encodeURIComponent(
          pair.publicKey()
        )}`
      );
      const responseJSON = await response.json();
      console.log("SUCCESS! You have a new account :)\n", responseJSON);
    } catch (e) {
      console.error("ERROR!", e);
    }
    // After you've got your test lumens from friendbot, we can also use that account to create a new account on the ledger.
    try {
      const server = new DiamSdk.Horizon.Server(
        "https://diamtestnet.diamcircle.io/"
      );
      var parentAccount = await server.loadAccount(pair.publicKey()); //make sure the parent account exists on ledger
      var childAccount = DiamSdk.Keypair.random(); //generate a random account to create
      //create a transacion object.
      var createAccountTx = new DiamSdk.TransactionBuilder(parentAccount, {
        fee: DiamSdk.BASE_FEE,
        networkPassphrase: DiamSdk.Networks.TESTNET,
      });
      //add the create account operation to the createAccountTx transaction.
      createAccountTx = await createAccountTx
        .addOperation(
          DiamSdk.Operation.createAccount({
            destination: childAccount.publicKey(),
            startingBalance: "5",
          })
        )
        .setTimeout(180)
        .build();
      //sign the transaction with the account that was created from friendbot.
      await createAccountTx.sign(pair);
      //submit the transaction
      let txResponse = await server
        .submitTransaction(createAccountTx)
        // some simple error handling
        .catch(function (error) {
          console.log("there was an error");
          console.log(error.response);
          console.log(error.status);
          console.log(error.extras);
          return error;
        });
      console.log(txResponse);
      console.log("Created the new account", childAccount.publicKey());
    } catch (e) {
      console.error("ERROR!", e);
    }
  })();



  
  // async function getAccountBalances(serverUrl, publicKey) {
  //     try {
  //         const server = new DiamSdk.Horizon.Server(serverUrl);
  
  //         // Retrieve the account details
  //         const account = await server.loadAccount(publicKey);
  //         console.log("Balances for account: " + publicKey);
  
  //         // Print out each balance
  //         account.balances.forEach(function (balance) {
  //             console.log("Type:", balance.asset_type, ", Balance:", balance.balance);
  //         });
  //     } catch (error) {
  //         console.error("Error retrieving account balances:", error);
  //     }
  // }
  
  // // Example usage
  // const serverUrl = "https://diamtestnet.diamcircle.io/";
  // const publicKey = 'your_public_key_here'; // Replace with the actual public key
  // getAccountBalances(serverUrl, publicKey);