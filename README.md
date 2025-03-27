# OApp Example

This project follows the LayerZero CLI example.

## 1) Installation

Install dependencies using:

```bash
pnpm install
```

## 2) Updating Configuration

### hardhat.config.ts

Before deploying, update the following in your hardhat.config.ts file:
- RPC: Replace the RPC endpoints under `networks` with your own value. 
- Etherscan: Under `etherscan` update the `browserUrl` for each network. The corresponding `apiURL` should use the same value as `browserUrl` but with "frontend" replaced by "backend" and with /api appended. Note: The api keys are arbitrary and do not need to be changed. 
- Chain IDs: Ensure that all chain ids match your networks

### layerzero.config.ts

Update the following:
- Executor and DVN addresses: For the Ethereum → Arbitrum connection, use the first executor and the first DVN address returned by the LayerZero package.
- For the Arbitrum → Ethereum connection, use the second executor and DVN address.
- Make sure to update the DVN address in both the send configuration and receive configuration.
- Confirmations: Optionally, change the number of confirmations for cross-chain messages (minimum 1).

### update .env
Change the private key in the .env file with the private key of your pre-funded wallet

## 3) Deploying Contracts

Deploy your contracts using:

```bash
npx hardhat lz:deploy
```


After deployment, verify your contracts with the following command:

```bash
npx hardhat verify --network <network_name> <deployed_contract_address> "0x0000000000000000000000000000000000000000" "0x0000000000000000000000000000000000000000"
```
You can run this multiple times to verify the contracts on each chain.

Note: The two addresses provided after the deployed contract address can be arbitrary.

## 4) Setting Up LayerZero

Wire your OApp configuration with:

```bash
npx hardhat lz:oapp:wire --oapp-config layerzero.config.ts
```

Ensure that you have updated the executor and DVN addresses in layerzero.config.ts as described above.

## 5) Sending Messages

To send a message, run a command like:

```bash
npx hardhat sendMessage --network ethereum --dst-network arbitrum --message "Hello World"
```

Here, --network represents the source chain.
