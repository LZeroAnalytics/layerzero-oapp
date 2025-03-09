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
                        executor: '0x17435ccE3d1B4fA2e5f8A08eD921D57C6762A180',
                    },
                    ulnConfig: {
                        confirmations: BigInt(0),
                        requiredDVNs: [],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(0),
                        requiredDVNs: ['0xb4B46bdAA835F8E4b4d8e208B6559cD267851051'],
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
                        executor: '0x17435ccE3d1B4fA2e5f8A08eD921D57C6762A180',
                    },
                    ulnConfig: {
                        confirmations: BigInt(0),
                        requiredDVNs: [],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(0),
                        requiredDVNs: ['0xb4B46bdAA835F8E4b4d8e208B6559cD267851051'],
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