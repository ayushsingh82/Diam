import React, { useState } from 'react';
import DiamSdk from 'diamante-sdk-js';

const Demo = () => {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createAccount = async () => {
    setLoading(true);
    setError(null);
    try {
      const pair = DiamSdk.Keypair.random();



      const response = await fetch(
        `https://friendbot.diamcircle.io?addr=${encodeURIComponent(
          pair.publicKey()
        )}`
      );
      if (!response.ok) {
        throw new Error(`Friendbot request failed: ${response.statusText}`);
      }
      const responseJSON = await response.json();
      console.log("SUCCESS! You have a new account :)\n", responseJSON);

      const server = new DiamSdk.Horizon.Server(
        "https://diamtestnet.diamcircle.io/"
      );
      var parentAccount = await server.loadAccount(pair.publicKey());
      var childAccount = DiamSdk.Keypair.random();
      var createAccountTx = new DiamSdk.TransactionBuilder(parentAccount, {
        fee: DiamSdk.BASE_FEE,
        networkPassphrase: DiamSdk.Networks.TESTNET,
      });

      createAccountTx = createAccountTx
        .addOperation(
          DiamSdk.Operation.createAccount({
            destination: childAccount.publicKey(),
            startingBalance: "5",
          })
        )
        .setTimeout(180)
        .build();

      await createAccountTx.sign(pair);
      let txResponse = await server
        .submitTransaction(createAccountTx)
        .catch(function (error) {
          console.log("there was an error");
          console.log(error.response);
          console.log(error.status);
          console.log(error.extras);
          return error;
        });

      console.log(txResponse);
      console.log("Created the new account", childAccount.publicKey());
      setAccount(childAccount.publicKey());
    } catch (e) {
      console.error("ERROR!", e);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Diamante Network Account Creator</h1>
      <button
        onClick={createAccount}
        disabled={loading}
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-600"
      >
        {loading ? "Creating Account..." : "Create Account"}
      </button>
      {account && <p className="mt-4">New Account Public Key: {account}</p>}
      {error && <p className="mt-4 text-red-500">Error: {error}</p>}
    </div>
  );
};

export default Demo;
