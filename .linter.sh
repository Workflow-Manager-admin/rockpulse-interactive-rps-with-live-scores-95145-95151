#!/bin/bash
cd /home/kavia/workspace/code-generation/rockpulse-interactive-rps-with-live-scores-95145-95151/main_container
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

