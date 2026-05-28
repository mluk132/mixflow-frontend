# Clone & Run — Doppler Secrets Workflow

Single source of truth for all secrets: **https://dashboard.doppler.com**  
Project: **agent-platform**

## On a New Machine

```bash
# 1. Install Doppler CLI (once per machine)
brew install dopplerhq/cli/doppler

# 2. Sign in
doppler login --yes

# 3. Clone any repo
git clone git@github.com:mluk132/propai-backend.git
cd propai-backend/backend

# 4. Run with secrets injected (no .env file needed)
doppler run -- npm run dev
```

That's it. No `.env` files anywhere.

## Doppler Project Structure

```
agent-platform/
├── dev (shared dev secrets)
│   ├── dev_propai      ← worker6-finance/backend
│   ├── dev_diaperstops ← worker1-diaperstops/backend
│   ├── dev_mixflow     ← worker2-mixflow/backend
│   ├── dev_healthflow  ← worker5-health-fit/backend
│   ├── dev_hypnotic    ← worker3-hypermedia-oasis/backend
│   └── dev_finder      ← worker4-lush-playground/backend
├── stg (staging - inherits from dev)
└── prd (production - same structure)
    ├── prd_propai      ← finance-api-divine-frost-6922.fly.dev
    ├── prd_diaperstops ← diaperstops-api.fly.dev
    ├── prd_mixflow     ← mixflow-api.fly.dev
    ├── prd_healthflow  ← health-fit-api.fly.dev
    ├── prd_hypnotic    ← hypermedia-oasis-api.fly.dev
    └── prd_finder      ← lush-playground-api.fly.dev
```

Each branch config inherits shared secrets (DATABASE_URL, OPENAI_API_KEY, JWT_SECRET, etc.) from its root and overrides only `APP_NAME` + `PORT`.

## How Each Surface Gets Secrets

### Local development
```bash
doppler run -- npm run dev
# Reads .doppler in dir to know which config (dev_propai, etc.)
# Pulls all secrets from Doppler → injects as env vars → runs node
```

### CI (GitHub Actions)
GitHub repo has only one secret: `DOPPLER_TOKEN`
```yaml
- uses: dopplerhq/cli-action@v3
- run: doppler run -- npm test
  env:
    DOPPLER_TOKEN: ${{ secrets.DOPPLER_TOKEN }}
```

### Production (Fly.io)
Fly secret: only `DOPPLER_TOKEN`  
Dockerfile entrypoint: `doppler run -- node src/server.js`  
At runtime, container pulls all secrets from Doppler.

## Rotating a Secret

1. Go to https://dashboard.doppler.com/workplace/agent-platform
2. Click the config (e.g. `dev` or `prd`)
3. Click `OPENAI_API_KEY` → edit → save
4. Done. Next run on local/CI/Fly will use the new value automatically.

No need to update GitHub secrets, Fly secrets, or `.env` files anywhere.

## Common Commands

```bash
# Show all secrets in current config
doppler secrets

# Get one secret (printed)
doppler secrets get OPENAI_API_KEY --plain

# Update a secret
doppler secrets set OPENAI_API_KEY="sk-proj-NEW"

# Switch which config this dir is using
doppler setup --project agent-platform --config dev_propai

# Export to .env (only if you really need a file — usually don't)
doppler secrets download --no-file --format env > .env
```

## Multi-Machine Workflow

On any new machine you sign in to:
```bash
doppler login --yes  # browser-based, one click
```

After that, any repo you clone just works — `doppler run -- npm run dev` and you're rolling. Your secrets follow your account, not your machine.

## Troubleshooting

### "Unable to find Doppler config in current directory"
Run `doppler setup --project agent-platform --config dev_<app>` once in the dir.

### CI failing: "DOPPLER_TOKEN not set"
Service tokens are scoped per config. Check the repo's GitHub Secret matches the config the workflow expects.

### Production deploy not picking up new secret
Fly machines cache env at startup. Restart with:
```bash
fly machine restart <machine-id> --app <app-name>
```
Or just push a new commit (CI re-deploys with fresh secrets).
