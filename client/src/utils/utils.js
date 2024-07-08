import CryptoJS from "crypto-js";
import { Horizon, Keypair } from "diamante-sdk-js";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const createWallet = () => {
    const pair = Keypair.random();
    return {
        public_key: pair.publicKey(),
        secret_key: pair.secret(),
    }
}

export const encrypt = (data, keyword) => {
    const encrypteData = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        keyword
    )
    return encrypteData.toString();
}

export const decrypt = (item, keyword) => {
    try {
        const decryptedData = CryptoJS.AES.decrypt(item, keyword).toString(
            CryptoJS.enc.Utf8
        );
        const decryptedDataJson = JSON.parse(decryptedData);
        return decryptedDataJson;
    } catch (error) {
        return null;
    }
};

export const getBalance = async (pubKey) => {
    let balance;
    try {
        const server = new Horizon.Server("https://diamtestnet.diamcircle.io/");
        const account = await server.accounts().accountId(pubKey).call();
        balance = parseFloat(account.balances[account.balances.length - 1].balance);

        return balance;
    } catch (e) {
        balance = 0;
        return balance;
    }
};