import type { Plugin } from "@ai16z/eliza"
import { launchTokenAction } from "./actions/launchToken"
import { launchTokenEvaluator } from "./evaluators/launchToken"
import { berachainWalletProvider } from "./providers/wallet"
import { berachainTokenProvider } from "./providers/token"

export * from "./actions/launchToken"
export * from "./providers/wallet"
export * from "./providers/token"
export * from "./types"

export const berachainPlugin: Plugin = {
  name: "berachain",
  description: "Berachain blockchain integration plugin",
  providers: [berachainWalletProvider, berachainTokenProvider],
  evaluators: [launchTokenEvaluator],
  services: [],
  actions: [launchTokenAction]
}

export default berachainPlugin 