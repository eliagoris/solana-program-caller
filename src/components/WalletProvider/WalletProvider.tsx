/** @jsxImportSource theme-ui */
import React, { useMemo } from "react"

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react"
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import {
  getLedgerWallet,
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
  getTorusWallet,
} from "@solana/wallet-adapter-wallets"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"

/**
 * Component that contains the whole minting process
 * It is necessary to be separate, since it depends on the global window variable
 * Then the rest of the page can be rendered on server
 */
const WalletProviderSection = ({
  children,
}: {
  children: React.ReactChild
}) => {
  const network = process.env
    .REACT_APP_CONNECTION_NETWORK as WalletAdapterNetwork

  const endpoint =
    process.env.REACT_APP_CONNECTION_NETWORK == "devnet"
      ? process.env.REACT_APP_SOLANA_RPC_HOST_DEVNET
      : process.env.REACT_APP_SOLANA_RPC_HOST_MAINNET_BETA

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
  // Only the wallets you configure here will be compiled into your application
  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSolletWallet({ network }),
      getLedgerWallet(),
      getTorusWallet({
        options: { clientId: "Get a client ID @ https://developer.tor.us" },
      }),
    ],
    [network]
  )

  if (!endpoint) return null

  return (
    <ConnectionProvider
      config={{
        commitment: "confirmed",
        confirmTransactionInitialTimeout: 180 * 1000,
      }}
      endpoint={endpoint}
    >
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default WalletProviderSection
