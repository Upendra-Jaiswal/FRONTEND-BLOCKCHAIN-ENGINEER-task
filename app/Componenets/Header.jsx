import React, { useState, useEffect } from "react";
import { isRouteErrorResponse, useRouteError } from "@remix-run/react";
import "../styles/index.css";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useBalance } from "wagmi";
import { getBalance } from "@wagmi/core";

import { config } from "./config";

const Header = ({ name, profilePicture }) => {
  const { data, setData } = useState([]);
  const { open } = useWeb3Modal();
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();

  const error = useRouteError();

  async function fetchBalance(config, address) {
    try {
      const balanceResult = await getBalance(config, { address: address });
      const balance = balanceResult.formatted; // Accessing the balance from the resolved object

      console.log("Balance:", balance);
      setData(data);
      // return balance; // Return it if needed
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  }
  fetchBalance(config, address);
  // useEffect(() => {
  //   setData(balance);
  //  // fetchBalance(config, address);
  // },[]);

  async function connect_wallet() {
    try {
      await open(); // Open the web3modal provider selection modal
      console.log("web3 and provider");
      // provider
    } catch (error) {
      console.error("Error connecting to provider:", error);
    }
  }

  return (
    <div>
      {" "}
      <nav className="navbar">
        <div className="profile-info">
          <img src={profilePicture} alt="Profile" className="profile-picture" />
          <div className="user-name">{name}</div>
        </div>

        <div className="nav-links">
          <a href="connect-button">
            {" "}
            <div>
              <div>
                {data ? (
                  <div>Balance: {data}</div>
                ) : (
                  <div>Error in getting balance</div>
                )}
              </div>
              {isConnected ? (
                <div>
                  <div>
                    {address
                      ? `${address.slice(0, 6)}...${address.slice(-4)}`
                      : ""}
                  </div>
                </div>
              ) : (
                <button onClick={connect_wallet} className="btn">
                  Connect Wallet
                </button>
              )}
            </div>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;

export function ErrorBoundary({ error }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>An error occured</title>
      </head>
      <body>
        <main>
          <h1>An error occured</h1>
          <p>{error.message}</p>
        </main>
      </body>
    </html>
  );
}
