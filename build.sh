#!/bin/bash
set -e

# Run the Lovable AI build
npm run build

# Remove Wrangler deploy config (Pages can't use it)
rm -rf .wrangler

# Copy server files into the client output directory
cp -r dist/server dist/client/_server

# Create _worker.js for Pages SSR
cat > dist/client/_worker.js << 'WORKER'
import { createPagesFunctionHandler } from "@tanstack/react-start/server";
import server from "./_server/server.js";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    // Serve static assets first (CSS, JS, images, fonts)
    const assetResponse = await env.ASSETS.fetch(request);
    if (assetResponse.status !== 404) return assetResponse;
    // Fall back to SSR for HTML pages
    return server.fetch(request, env, ctx);
  }
};
WORKER

# Create clean wrangler.json for Pages
cat > dist/client/wrangler.json << 'WRANGLER'
{
  "compatibility_date": "2026-04-25",
  "compatibility_flags": ["nodejs_compat"],
  "pages_build_output_dir": "./"
}
WRANGLER
