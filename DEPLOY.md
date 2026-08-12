# Deploy to sigmaprecisions.com

Static output lives in `dist/` after `npm run build`.

## Option A — Cloudflare Pages (recommended)

1. Push this repo to GitHub.
2. In Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → connect the repo.
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 22 or newer
4. After the first deploy, open **Custom domains** → add `sigmaprecisions.com` and `www.sigmaprecisions.com`.
5. At your domain registrar, point DNS as Cloudflare instructs (usually Cloudflare nameservers, or CNAME/`A` records they provide).

## Option B — Netlify

1. Push this repo to GitHub.
2. New site from Git → select the repo.
3. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Domain management → add `sigmaprecisions.com` and follow Netlify DNS guidance.
5. The contact form includes `data-netlify="true"` — enable form detection on Netlify, or use Formspree below.

## Contact form

Uses [Web3Forms](https://web3forms.com). Access key is in `src/site.ts` (`web3formsAccessKey`).  
Inquiries go to `puram.bharath@gmail.com`; the site still shows `info@sigmaprecisions.com`.

## After go-live checklist

- [ ] Confirm live phone number in `src/site.ts` (`phone` / `phoneHref`)
- [ ] Replace `/public/images/*.svg` placeholders with real `hero.jpg`, `facility.jpg`, `og-default.jpg` and update `src` paths in pages/layout
- [ ] Submit `https://sigmaprecisions.com/sitemap-index.xml` in Google Search Console
