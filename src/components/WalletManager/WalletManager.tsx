/** @jsxImportSource theme-ui */
import { useWallet } from "@solana/wallet-adapter-react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { Button, Flex, Text } from "theme-ui"

const WalletManager = () => {
  const wallet = useWallet()

  return (
    <Flex
      sx={{
        alignSelf: "stretch",
        justifyContent: "center",
        alignItems: "center",

        ".wallet-adapter-dropdown": {
          display: "flex",
          justifyContent: "center",
        },

        ".wallet-adapter-button[disabled]": {
          backgroundColor: "#141221 !important",
          opacity: 0.7,
        },
      }}
    >
      <Flex
        sx={{
          justifyContent: "center",
        }}
      >
        {wallet?.publicKey ? (
          <WalletMultiButton
            sx={{
              backgroundColor: "unset",
              transition: "all .3s linear",
              color: "heading",
              lineHeight: "body",
              fontSize: "1.4rem",
              padding: "0",
              height: "unset",
              alignSelf: "flex-end",

              "&:hover": {
                background: "unset",
                backgroundImage: "unset!important",
                color: "primary",
                cursor: "pointer",
              },
            }}
            startIcon={null as any}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="#2c3e50"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37 1 .608 2.296.07 2.572-1.065z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </WalletMultiButton>
        ) : (
          <WalletMultiButton
            startIcon={null as any}
            sx={{
              backgroundColor: "unset",
              transition: "all .3s linear",
              color: "heading",
              lineHeight: "body",
              fontSize: "1.4rem",
              padding: "0",
              height: "unset",
              alignSelf: "flex-end",

              "&:hover": {
                background: "unset",
                backgroundImage: "unset!important",
                color: "primary",
                cursor: "pointer",
              },
            }}
          />
        )}
      </Flex>
    </Flex>
  )
}

export default WalletManager
