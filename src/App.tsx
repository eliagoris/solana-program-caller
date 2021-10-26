/** @jsxImportSource theme-ui */
import React from "react"
import WalletManager from "./components/WalletManager/WalletManager"
import "@solana/wallet-adapter-react-ui/styles.css"
import { Button, Flex } from "theme-ui"

function App() {
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
      <header className="App-header">
        <Button
          sx={{
            background: "#39315e",
          }}
          mt="24px"
        >
          Call Solana program
        </Button>
      </header>
    </Flex>
  )
}

export default App
