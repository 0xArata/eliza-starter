export type TaxMode = 0 | 1 // 0 for burn mode, 1 for auto-bribe mode

export interface TokenUrls {
  tokenImage: string    // IPFS hash
  website: string
  twitter: string
  telegram: string
  discord: string
  github: string
}

export interface TokenTaxes {
  mode: TaxMode
  buyTax: bigint       // Scaled by 10, max 200
  sellTax: bigint      // Scaled by 10, max 200
  ownerShare: bigint   // Scaled by 10, max 1000
}

export interface LaunchParams {
  name: string
  symbol: string
  totalSupply: bigint
  taxes: [bigint, bigint, bigint, bigint] // Enforcing array length of 4
  urls: [string, string, string, string, string, string] // Enforcing array length of 6
  duration: bigint
  minAmount: bigint
  buyAmount: bigint
  pairToUnlock: `0x${string}`
}

export interface LaunchResult {
  token: `0x${string}`
  liquidity: bigint
  transactionHash: `0x${string}`
} 