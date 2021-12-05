import Web3 from "web3";
import MetaMaskOnboarding from "@metamask/onboarding";
import { useEffect, useState } from "react";

// hook to retrieve the instance of web3, only if metamask plugin is installed
const useWeb3 = () => {
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      setWeb3(new Web3(window.ethereum));
    }
  }, []);

  return web3;
};

export default useWeb3;
