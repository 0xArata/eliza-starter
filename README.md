# Bailoo Eliza

A plugin for the Eliza framework that enables interaction with the Berachain blockchain, specifically for launching tokens on Memeswap.

## Project Structure

```README.md
.
├── packages/
│   └── plugin-berachain/     # Berachain plugin implementation
├── client/                   # Frontend React application
├── scripts/                  # Build and installation scripts
└── src/                      # Main agent implementation
```

## Prerequisites

- Node.js >= 22
- pnpm (latest version)
- Git

## Quick Start

1. Clone the repository:

```bash
git clone <repository-url>
cd eliza-starter
```

2. Create your environment file:

```bash
cp .env.example .env
```

3. Install all dependencies (plugin, client, and agent):

```bash
pnpm install:all
```

## Development

Start both the agent and client in development mode:

```bash
pnpm dev
```

This will:

- Start the agent on port 3000
- Start the client development server on port 5173
- Watch for changes in both the agent and client

### Individual Commands

If you need to run components separately:

**Agent Only:**

```bash
pnpm start
```

**Client Only:**

```bash
cd client && pnpm dev
```

## Building

Build all components:

```bash
pnpm build
```

Clean build artifacts:

```bash
pnpm clean
```

## Plugin Development

The Berachain plugin is located in `packages/plugin-berachain/`. When making changes:

1. Make your changes in the plugin
2. Run `pnpm build` to rebuild the plugin
3. The agent will use the updated plugin automatically

## Environment Variables

Required variables in your `.env`:

```env
# Model Provider (Choose one)
OPENAI_API_KEY=your_key
ANTHROPIC_API_KEY=your_key
LLAMACLOUD_API_KEY=your_key

# Client Configuration (Optional)
DISCORD_APPLICATION_ID=your_discord_app_id
DISCORD_API_TOKEN=your_discord_token
TWITTER_USERNAME=your_twitter_username
TWITTER_PASSWORD=your_twitter_password
TWITTER_EMAIL=your_twitter_email
```

## Custom Character Configuration

To use a custom character configuration:

1. Create a JSON file with your character settings
2. Start the agent with:

```bash
pnpm start --characters="path/to/your/character.json"
```

Multiple character files can be loaded by separating paths with commas.

## Available Scripts

- `pnpm dev` - Start both agent and client in development mode
- `pnpm build` - Build all components
- `pnpm install:all` - Install dependencies for all components
- `pnpm clean` - Clean all build artifacts
- `pnpm start` - Start the agent only
- `pnpm start:service:all` - Start all services using PM2 (not tested yet)
- `pnpm stop:service:all` - Stop all PM2 services (not tested yet)

## Contributing

1. Create a feature branch
2. Make your changes
3. Build and test locally
4. Submit a pull request

## Troubleshooting

If you encounter build issues:

1. Run `pnpm clean` -< This will remove all build artifacts and node_modules directories
2. Run `pnpm install:all` -< This will install all dependencies for the agent, client, and plugin
3. Run `pnpm build` -< This will build all components

## License

[Add your license information here]
