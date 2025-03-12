import { EndpointId } from '@layerzerolabs/lz-definitions'

import type { OAppOmniGraphHardhat, OmniPointHardhat } from '@layerzerolabs/toolbox-hardhat'

const ethereum: OmniPointHardhat = {
    eid: EndpointId.ETHEREUM_V2_MAINNET,
    contractName: 'MyOApp',
}

const arbitrum: OmniPointHardhat = {
    eid: EndpointId.ARBITRUM_V2_MAINNET,
    contractName: 'MyOApp',
}

const config: OAppOmniGraphHardhat = {
    contracts: [
        {
            contract: ethereum,
        },
        {
            contract: arbitrum,
        }
    ],
    connections: [
        {
            from: ethereum,
            to: arbitrum,
            config: {
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: '0x703848F4c85f18e3acd8196c8eC91eb0b7Bd0797',
                    },
                    ulnConfig: {
                        confirmations: BigInt(1),
                        requiredDVNs: ['0x17435ccE3d1B4fA2e5f8A08eD921D57C6762A180'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(1),
                        requiredDVNs: ['0x17435ccE3d1B4fA2e5f8A08eD921D57C6762A180'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                enforcedOptions: [],
            },
        },
        {
            from: arbitrum,
            to: ethereum,
            config: {
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: '0x703848F4c85f18e3acd8196c8eC91eb0b7Bd0797',
                    },
                    ulnConfig: {
                        confirmations: BigInt(1),
                        requiredDVNs: ['0x17435ccE3d1B4fA2e5f8A08eD921D57C6762A180'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(1),
                        requiredDVNs: ['0x17435ccE3d1B4fA2e5f8A08eD921D57C6762A180'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                enforcedOptions: [],
            },
        },
    ],
}

export default config