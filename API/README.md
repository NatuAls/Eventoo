# Eventoo API

## Run locally

Install dependencies from this directory and start the API:

```sh
npm install
npm run node
```

Create an untracked `.env` file in this directory with the variables below. For
Neon, copy the pooled connection string from the Neon console's **Connect**
dialog and set `DB_SSL=true`.

## Deploy on Render

Create a Node web service for this repository with:

- Root Directory: `API`
- Build Command: `npm install`
- Start Command: `npm run node`

Add the required environment variables in the Render service settings. Render
sets `PORT` automatically.

| Variable | Required | Description |
| --- | --- | --- |
| `DATABASE_URL` | Yes | Neon pooled PostgreSQL connection string, including SSL parameters |
| `DB_SSL` | Yes for Neon | Set to `true` to require verified TLS |
| `SECRET` | Yes | Random secret used to sign JWTs |
| `MP_ACCESS_TOKEN` | Yes | Mercado Pago access token |
| `SERVER_URL` | Yes for payment callbacks | Public base URL of the API, e.g. `https://your-api.onrender.com` |
| `GOOGLE_CLIENT_ID` | If Google login is used | Google OAuth client ID |
| `EMAIL_USER` | If email features are used | SMTP account |
| `EMAIL_PASS` | If email features are used | SMTP password or app password |

`DATABASE_URL` may be omitted only if all of `DB_USER`, `DB_PASSWORD`,
`DB_HOST`, `DB_PORT`, and `DB_NAME` are supplied instead.

## Frontend configuration

Set `REACT_APP_API_URL` in the Vercel project's environment variables to the
public Render API URL (without a path), then redeploy the frontend. Set
`REACT_APP_MP_PUBLIC_KEY` in Vercel if the frontend uses Mercado Pago checkout.

On startup, the API synchronizes Sequelize models with `alter: true` and
populates its initial tables. Use a new/empty Neon database for the first
deployment and back up existing data before deploying schema changes.
