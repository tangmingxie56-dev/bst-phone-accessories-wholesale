# BST Phone Accessories Wholesale — Static Website

Production-ready static site for **BST PHONE ACCESSORIES WHOLESALE** (brand: **BST**).

Pure HTML + CSS + minimal JavaScript. English only. Premium B2B wholesale look (navy / charcoal + gold).

## Site root

```
/workspace/bst-wholesale-site/
```

## Structure

```
bst-wholesale-site/
├── index.html          # Home
├── products.html       # Product categories
├── about.html          # Company
├── markets.html        # Africa / Middle East / Central Asia
├── contact.html        # Inquiry form + mailto
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── README.md
```

## Open locally

### Option A — open files directly

1. Open `index.html` in a modern browser (Chrome, Firefox, Edge, Safari).
2. Navigate via the header links; relative paths work from the file system for most browsers.

### Option B — local static server (recommended)

From this folder:

```bash
# Python 3
python3 -m http.server 8080

# or Node (if npx available)
npx --yes serve -l 8080
```

Then visit `http://localhost:8080`.

## Before you go live

1. **Email** — replace `sales@bst-accessories.com` everywhere if you use a different address.
2. **WhatsApp** — on `contact.html`, change the “WhatsApp inquiry” button `href` from `#inquiry` to your real link, e.g. `https://wa.me/971500000000` (digits only after `wa.me/`). Add your WhatsApp number here before publishing.
3. **Images** — hero and category images load from Unsplash HTTPS URLs; ensure the deploy host allows outbound image requests (or download and host assets locally if preferred).

## Deploy

### Netlify

1. Drag-and-drop this folder onto [Netlify Drop](https://app.netlify.com/drop), **or**
2. Connect a Git repo → set publish directory to the site root (this folder) → deploy.
3. No build command required.

### Cloudflare Pages

1. Create a Pages project from Git or direct upload.
2. Build command: leave empty (or `exit 0`).
3. Output / root directory: this folder (site root containing `index.html`).
4. Deploy.

### surge.sh

```bash
npx --yes surge ./ --domain your-subdomain.surge.sh
```

Point surge at this directory (the one that contains `index.html`).

## Contact form behaviour

Front-end only: on submit, the form shows a success message and opens a `mailto:` link to `sales@bst-accessories.com` with a composed body (name, company, country, product interest, message). No backend or third-party form service is required.

## License / ownership

Site content and branding for BST Phone Accessories Wholesale. Update contact details and legal text as needed for your jurisdiction.
