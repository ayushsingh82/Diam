/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from "react";

// Create a Context for the wallet data
const WalletContext = createContext();

// Create a provider component
export const WalletProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    // Try to fetch from local storage
    const storedData = localStorage.getItem("walletData");
    return storedData ? JSON.parse(storedData) : null;
  });

  useEffect(() => {
    // Store walletData in local storage
    if (data) {
      localStorage.setItem("walletData", JSON.stringify(data));
    } else {
      localStorage.removeItem("walletData");
    }
  }, [data]);

  return (
    <WalletContext.Provider value={{ data, setData }}>
      {children}
    </WalletContext.Provider>
  );
};

// Create a custom hook to use the WalletContext
export const useWallet = () => {
  return useContext(WalletContext);
};
