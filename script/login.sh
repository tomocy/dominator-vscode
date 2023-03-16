#!/bin/bash

set -eu

PUBLISHER=tomocy
ACCESS_TOKEN_URL="https://dev.azure.com/$PUBLISHER/_usersSettings/tokens"

echo "Log In to publisher '$PUBLISHER'"
echo "You need to generate an access token following the steps below"
echo "1. Visit $ACCESS_TOKEN_URL"
echo "2. Set the options below"
echo "   - Organization = All assessible organizations"
echo "   - Scope = Custom defined"
echo "   - Scope.Marketplace = Manage"
echo "3. Create and Copy the access token"

yarn run vsce login "$PUBLISHER"

echo "Set git credentials"
IFS="" read -r -p 'user.name: ' NAME
IFS="" read -r -p 'user.email: ' EMAIL_ADDRESS
git config user.name "$NAME"
git config user.email "$EMAIL_ADDRESS"
