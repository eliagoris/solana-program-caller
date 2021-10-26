/** @jsxImportSource theme-ui */
import React, { useState } from "react"
import "@solana/wallet-adapter-react-ui/styles.css"
import { Button, Flex, Text } from "theme-ui"
import { useWallet } from "@solana/wallet-adapter-react"

import WalletManager from "./components/WalletManager/WalletManager"
import callProgram from "./lib/call-program"

function App() {
  const wallet = useWallet()
  const [status, setStatus] = useState("")

  return (
    <Flex
      sx={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "800px",
        margin: "0 auto",
        paddingTop: "96px",
      }}
      className="App"
    >
      <WalletManager />
      <Flex
        sx={{
          flexDirection: "column",
        }}
      >
        <Button
          sx={{
            alignSelf: "center",
            background: "#39315e",
            cursor: "pointer",
          }}
          mt="24px"
          onClick={async () => {
            try {
              const res = await callProgram(wallet)

              setStatus(res)
            } catch (e) {
              setStatus(e + "")
            }
          }}
        >
          Call Solana program
        </Button>
        <Text mt="8px">{status}</Text>
      </Flex>
    </Flex>
  )
}

export default App
