import { useEffect, useState } from "react";
import MetaMaskOnboarding from "@metamask/onboarding";

const EVENT_REQUEST_ACCOUNT = "eth_requestAccounts";
const EVENT_ACCOUNTS_CHANGED = "accountsChanged";
const EVENT_DISCONECT = "disconnect";

// hook to listen the events when account is changed and retrieve the first account to interact
const useCurrentAccount = () => {
  const [account, setAccount] = useState(null);

  const handleNewAccounts = (newAccounts) => {
    const [first] = newAccounts;
    setAccount(first);
  };

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: EVENT_REQUEST_ACCOUNT })
        .then(handleNewAccounts);

      window.ethereum.on(EVENT_ACCOUNTS_CHANGED, handleNewAccounts);

      return () => {
        window.ethereum.on(EVENT_DISCONECT, handleNewAccounts);
      };
    }
  }, []);

  return account;
};

export default useCurrentAccount;
