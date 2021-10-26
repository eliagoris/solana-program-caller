import { web3, Program, Provider, Wallet } from "@project-serum/anchor"
import { WalletContextState } from "@solana/wallet-adapter-react"
import { PublicKey } from "@solana/web3.js"

const callProgram = async (wallet: WalletContextState) => {
  const endpoint =
    process.env.REACT_APP_CONNECTION_NETWORK == "devnet"
      ? process.env.REACT_APP_SOLANA_RPC_HOST_DEVNET
      : process.env.REACT_APP_SOLANA_RPC_HOST_MAINNET_BETA

  if (!endpoint) throw "No RPC endpoint configured."

  const solConnection = new web3.Connection(endpoint, "confirmed")

  const anchorWallet = {
    publicKey: wallet.publicKey,
    signAllTransactions: wallet.signAllTransactions,
    signTransaction: wallet.signTransaction,
  } as any

  if (!wallet.publicKey) throw "No public key."

  const provider = new Provider(solConnection, anchorWallet, {
    preflightCommitment: "recent",
  })

  const programId = new PublicKey(
    "4hg3PmKXGtVDt3Y94wkLMwevHvX6eW3yDqmw5K9yaDYF"
  )

  const idl = await Program.fetchIdl(programId, provider)

  if (!idl)
    throw (
      "No idl with address " +
      programId.toString() +
      " has been found on " +
      process.env.REACT_APP_CONNECTION_NETWORK +
      "."
    )

  const anchorProgram = new Program(idl, programId, provider)

  const res = await anchorProgram.rpc.initialize({})

  return res
}

export default callProgram
