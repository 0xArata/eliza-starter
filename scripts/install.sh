#!/bin/bash

# Navigate to the script's directory
cd "$(dirname "$0")"/..
echo "Installation process started."

# Install plugin-berachain dependencies
echo "Installing @ai16z/plugin-berachain dependencies..."
cd packages/plugin-berachain
pnpm install
if [ $? -ne 0 ]; then
    echo "Error installing plugin-berachain dependencies"
    exit 1
fi
cd ../..

# Install client dependencies
echo "Installing client dependencies..."
cd client
pnpm install
if [ $? -ne 0 ]; then
    echo "Error installing client dependencies"
    exit 1
fi
cd ..

# Install main agent dependencies
echo "Installing @ai16z/agent dependencies..."
pnpm install
if [ $? -ne 0 ]; then
    echo "Error installing agent dependencies"
    exit 1
fi

echo "Installation completed successfully." 