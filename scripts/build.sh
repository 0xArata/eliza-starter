#!/bin/bash

# Navigate to the script's directory
cd "$(dirname "$0")"/..
echo "Build process started."

# Build plugin-berachain
echo "Building @ai16z/plugin-berachain..."
cd packages/plugin-berachain
pnpm build
if [ $? -ne 0 ]; then
    echo "Error building plugin-berachain"
    exit 1
fi
cd ../..

# Build main agent
echo "Building @ai16z/agent..."
tsup src/index.ts --format esm --dts
if [ $? -ne 0 ]; then
    echo "Error building agent"
    exit 1
fi

echo "Build completed successfully." 