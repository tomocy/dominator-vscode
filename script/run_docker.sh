#!/bin/bash

set -eu

WORKDIR=/user/vsce/vscode-dominator

docker run \
  -it \
  --rm \
  --name vscode-dominator \
  -v "$PWD":"$WORKDIR" \
  -w "$WORKDIR" \
  vscode-dominator /bin/bash
