# Omni Digital Solutions

The GitHub Pages company website starts at [index.html](index.html).

- [Prices, payment plans and invoices](invoices.html): the company app, linked from the website navigation, homepage, Services section and footer.
- [Coastline demo](coastline-all-trades-demo.html): the separate demonstration website.

The company app follows three steps: price list → payment options → invoice. Selecting a payment plan opens the invoice. All links are relative so they work under the repository's GitHub Pages path.

The app uses the company's information and bank details; client fields start blank. Data is stored only in the visitor's browser. It is not submitted to the company or synced online. Clients can print/save the invoice as PDF and send it to the company. No payments are processed automatically. Company settings and price edits affect that browser only; they are not a shared administration system.

The app has a separate storage key from the original Bob app. Use Backup to export or restore local data.

No build step or dependencies are required. Publish the repository root through GitHub Pages.

## Website and deployment

The amber/teal homepage includes six service modules, Brief → Plan → Build → Handover, four illustrative sample engagements, and an email brief form. The form opens the visitor's email app; the visitor must send the message.

The package name is `omni-digital-solutions`. GitHub Pages continues to publish `main` at the repository root, preserving https://shozi-ops.github.io/Freelancing-project-demo-s-/ and relative links. The GitHub repository name is intentionally retained to avoid a URL migration.

For Vercel, the included configuration runs `npm run build` and serves `dist`. For AWS static hosting, run the same build and upload the contents of `dist` to your configured S3/CloudFront site. Preserve HTML filenames; no SPA rewrite is required.

## Advisory control center

The homepage links to `advisory.html`. The configured Advisory frontend is https://frontend-nine-beta-30.vercel.app and its API is https://advisory-api.vercel.app. The portal opens in a separate tab. Advisory is currently disconnected from Zoey's database: the frontend runs its labelled browser demo and the API is unavailable pending a dedicated Supabase project. The Advisory repository includes the initial schema, isolation checks, and environment templates for that project.

Sign in and select the appropriate workspace/project inside the Advisory App. Register Omni Digital Solutions as its own project; do not reuse Zoey's project ID or credentials. No tenant credentials belong in this static repository.

On the separate Advisory API deployment, append `https://shozi-ops.github.io` to `ALLOWED_ORIGINS`, retaining existing frontend origins. Origins contain no repository path or trailing slash. A companion backend change adds the origin to the default and example configuration. An existing environment override must also be updated and redeployed. Direct browser API calls still require the authenticated bearer token and `X-Project-ID`; CORS does not grant workspace access.

The Advisory frontend's server-side `API_BACKEND_URL` points to the public production API alias; protected preview/team aliases are not proxy destinations. GitHub Pages cannot provide that proxy. The API's production `ALLOWED_ORIGINS` includes `https://shozi-ops.github.io`. Hosted AI inference is not configured; the existing local Ollama endpoint cannot be reached from Vercel.

## Existing invoice records

The legacy browser storage key is retained so existing users keep their data. Known legacy company defaults migrate to Omni Digital Solutions for new invoices; saved invoice snapshots and historical numbers are retained. Contact information, prices, and banking details are preserved. Export a backup before changing origins: browser storage is origin-specific.

