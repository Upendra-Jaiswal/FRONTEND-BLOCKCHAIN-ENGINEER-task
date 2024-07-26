import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { WagmiProvider } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header2 from "./app/Componenets/Header";

//import profilePicture from "../images/profilephoto.jpg";
import "../styles/index.css";
//import styles from "../styles/index.css";
import { useWeb3Modal } from "@web3modal/wagmi/react";

// import { useBalance } from 'wagmi'//
import { useAccount } from "wagmi";

import { useAccountEffect } from "wagmi";

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId from https://cloud.walletconnect.com
const projectId = "fc89d5383a457fe1fb25e0b6b0a3d0f4";

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, sepolia];
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});
//const account = useAccount()

// export function accountshow(){
//   const { address, isConnecting, isDisconnected } = useAccount();
// }

const Header = ({ name, profilePicture }) => {
  //const { open } = useWeb3Modal();

  // async function connect_wallet() {
  //   try {
  //     await open(); // Open the web3modal provider selection modal
  //     console.log("web3 and provider");
  //     // provider
  //   } catch (error) {
  //     console.error("Error connecting to provider:", error);
  //   }
  // }

  // function hello() {
  //   console.log("hello");
  // }

  // const result = useBalance({
  //   address: account,

  // })

  // if (isConnecting) return <div>Connecting…</div>
  // if (isDisconnected) return <div>Disconnected</div>

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Header2
          name={name}
          profilePicture={profilePicture}
          configdata={config}
        />
      </QueryClientProvider>
    </WagmiProvider>
  );
};

// export function links() {
//   return [{ rel: "stylesheet", href: styles }];
// }

export default Header;
