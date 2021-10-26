import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import WalletProviderSection from "./components/WalletProvider/WalletProvider"

ReactDOM.render(
  <React.StrictMode>
    <WalletProviderSection>
      <App />
    </WalletProviderSection>
  </React.StrictMode>,
  document.getElementById("root")
)
