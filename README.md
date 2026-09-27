# Admitad VPN comparison landing (PL, static)

Minimal Polish affiliate comparison page for the VPN niche. Static HTML/CSS — ready for Cloudflare Pages or Netlify.

**Path:** `/workspace/admitad-vpn-landing/`

## Contents

| File | Purpose |
|------|---------|
| `index.html` | Polish landing: disclosure, comparison table, CTAs |
| `style.css` | Simple responsive styles |
| `config.js` | Placeholder Admitad URL map (swap real links here) |
| `links.json` | Documented placeholder IDs for parent/agent |
| `robots.txt` | Allow crawling |
| `favicon.svg` | Optional icon |
| `VERIFY.txt` / `admitad-verify.html` | Stubs for Admitad domain verification |
| `README.md` | This file |

## Placeholder affiliate link IDs

Replace these with real Admitad tracking URLs later (do **not** invent URLs):

- `#admitad-nordvpn`
- `#admitad-surfshark`
- `#admitad-protonvpn`
- `#admitad-expressvpn`
- `#admitad-mullvad`

Update either the `href` attributes in `index.html`, or the values in `config.js` / `links.json`.

## Local preview

```bash
cd /workspace/admitad-vpn-landing
python3 -m http.server 8080
# open http://127.0.0.1:8080/
```

Or open `index.html` directly in a browser.

## Deploy — Cloudflare Pages

### Option A: Dashboard (drag & drop)

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
2. Drag the entire `admitad-vpn-landing` folder (or zip its contents).
3. Deploy. Note the `*.pages.dev` URL.

### Option B: Wrangler CLI

```bash
cd /workspace/admitad-vpn-landing
npx wrangler pages project create admitad-vpn-landing
npx wrangler pages deploy . --project-name=admitad-vpn-landing
```

Requires Cloudflare login (`npx wrangler login`) or `CLOUDFLARE_API_TOKEN` with Pages edit permission.

## Deploy — Netlify

### Option A: Drag & drop

1. Log in to [Netlify Drop](https://app.netlify.com/drop) or Sites → Add new site → Deploy manually.
2. Drag the `admitad-vpn-landing` folder.
3. Copy the `*.netlify.app` URL.

### Option B: Netlify CLI

```bash
cd /workspace/admitad-vpn-landing
npx netlify-cli deploy --dir=. --prod
```

Requires `npx netlify-cli login` or `NETLIFY_AUTH_TOKEN`.

## Compliance notes

- Top disclosure (PL): affiliate / advertising notice.
- No fake “#1 guaranteed” rankings; alphabetical/popularity presentation.
- No invented Admitad links; placeholders only.
- No trackers / analytics in this build; GDPR-lite footer.
- Replace contact e-mail in the footer before going live.
- Confirm each VPN offer exists in your Admitad catalog before enabling a CTA.

## License / use

Informational affiliate landing template for your own publisher account. Brands mentioned are trademarks of their owners.
