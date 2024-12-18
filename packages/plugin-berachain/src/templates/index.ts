export const launchTemplate = `Given the recent messages and wallet information below:

{{recentMessages}}

{{walletInfo}}

I need to extract the following information for launching a token. Please provide ALL of these parameters:

1. Token Basic Info:
   - Name: The full name of the token
   - Symbol: 2-6 characters ticker symbol
   - Total Supply: Total number of tokens to create

2. Tax Configuration (all values scaled by 10, max percentages apply):
   - Tax Mode: 0 for burn mode, 1 for auto-bribe mode
   - Buy Tax: Max 20% (200)
   - Sell Tax: Max 20% (200)
   - Owner Share: Max 100% (1000)

3. URLs (all required):
   - Token Image (IPFS hash)
   - Website URL
   - Twitter URL
   - Telegram URL
   - Discord URL
   - GitHub URL

4. Launch Parameters:
   - Duration: Launch duration in seconds
   - Minimum Buy Amount: Minimum amount users can buy (in wei)
   - Initial Liquidity Amount: Amount to add as initial liquidity (in wei)
   - Pair to Unlock: Address of the pair to unlock (must be valid address)

Respond with a JSON markdown block containing only the extracted values:

\`\`\`json
{
    "name": string,
    "symbol": string,
    "totalSupply": string,
    "taxes": [string, string, string, string],
    "urls": [string, string, string, string, string, string],
    "duration": string,
    "minAmount": string,
    "buyAmount": string,
    "pairToUnlock": string
}
\`\`\`
`; 