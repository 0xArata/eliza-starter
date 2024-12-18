import { Chain } from "viem"

export const BERACHAIN_CONFIG = {
  id: 80084,
  name: 'Berachain bArtio',
  network: 'bartio',
  nativeCurrency: {
    decimals: 18,
    name: 'BERA',
    symbol: 'BERA',
  },
  rpcUrls: {
    default: {
      http: ['https://bartio.drpc.org'],
    },
    public: {
      http: ['https://bartio.drpc.org'],
    },
  },
  blockExplorerUrl: 'https://explorer.berachain.com',
} as Chain

export const MEMESWAP_FACTORY_ADDRESS = '0xDaa236aE5dd36A5116eBDD4560FD4eD8E02879E6'

// Based on the Memeswap docs
export const MEMESWAP_FACTORY_ABI = [
  {
    inputs: [{
      components: [
        { name: "name", type: "string" },
        { name: "symbol", type: "string" },
        { name: "totalSupply", type: "uint256" },
        { name: "taxes", type: "uint256[]" },
        { name: "urls", type: "string[]" },
        { name: "duration", type: "uint256" },
        { name: "minAmount", type: "uint256" },
        { name: "buyAmount", type: "uint256" },
        { name: "pairToUnlock", type: "address" }
      ],
      name: "_params",
      type: "tuple"
    }],
    name: "launch",
    outputs: [
      { name: "token", type: "address" },
      { name: "liquidity", type: "uint256" }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "minLiquidity",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "maxLiquidity",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  }
] as const 

export const TAX_CONSTRAINTS = {
  MAX_BUY_TAX: 200n,    // 20%
  MAX_SELL_TAX: 200n,   // 20%
  MAX_OWNER_SHARE: 1000n, // 100%
  TAX_SCALE: 10n
} as const

export const URL_INDICES = {
  TOKEN_IMAGE: 0,
  WEBSITE: 1,
  TWITTER: 2,
  TELEGRAM: 3,
  DISCORD: 4,
  GITHUB: 5
} as const

export const ARRAY_LENGTHS = {
  TAXES: 4,
  URLS: 6
} as const 