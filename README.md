# Corona International Concepts Limited (CICL)

<p align="center">
  <img src="wp-content/uploads/2023/12/cropped-NEW-LOGO-CORONA.png" alt="Corona International Concepts Logo" width="220" />
</p>

<p align="center">
  <strong>High-Performance, Secure, Static Production Website</strong><br />
  <em>Converting a vulnerable dynamic CMS into a lightning-fast, malware-immune static site.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Security-Malware--Immune-brightgreen?style=flat-square" alt="Malware Immune" />
  <img src="https://img.shields.io/badge/Architecture-Static%20HTML5%20%2F%20CSS3-blue?style=flat-square" alt="Static Architecture" />
  <img src="https://img.shields.io/badge/PHP%20Execution-Disabled-red?style=flat-square" alt="PHP Disabled" />
  <img src="https://img.shields.io/badge/Performance-Ultra--Fast-success?style=flat-square" alt="Ultra Fast" />
  <img src="https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=flat-square" alt="Production Ready" />
</p>

---

## 📖 Overview

This repository hosts the official, completely sanitized static production website for **Corona International Concepts Limited (CICL)**. 

To eliminate recurring WordPress security compromises, arbitrary PHP execution risks, database injections, and malicious bot activity, the entire platform was strategically migrated to **100% clean, decoupled static HTML, CSS, and modern JavaScript**.

All external vulnerabilities, dynamic database overhead, and server-side script risks have been eliminated while preserving 100% of the original design fidelity, interactive animations, video media, client showcases, and portfolio assets.

---

## 🛡️ Security & Hardening Highlights

* **Zero Dynamic Attack Surface**: No WordPress core, no PHP backend, and no MySQL database. Attackers cannot run SQL injection, remote code execution (RCE), or unauthorized admin escalations.
* **PHP Execution Denied**: The production `.htaccess` strictly forbids PHP, CGI, Perl, and script execution (`Require all denied` for script extensions). Even if an arbitrary file upload bypass occurred, the web server treats scripts as unexecutable.
* **Malicious URL Interception**: Automated `410 Gone` and `403 Forbidden` rules block legacy spam URLs, `/wp-admin/`, `wp-login.php`, `xmlrpc.php`, and `/item/*` vulnerability probes.
* **Security Headers**: Equipped out-of-the-box with `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `X-XSS-Protection`, and strict referrer policies.
* **Self-Contained Local Assets**: All imagery, typography, client logos, video elements, and PDF brochures are stored locally under `wp-content/` and `assets/`, avoiding third-party CDN tampering.

---

## 🚀 Key Features

* **High-Speed Delivery**: Static files served directly by the web server (Apache, Nginx, or Edge CDNs) with sub-second Time to First Byte (TTFB).
* **Full Mobile & Desktop Responsiveness**: Responsive layouts powered by Elementor static markup, Swiper.js carousels, and modern CSS grid/flexbox.
* **Rich Media Support**:
  * Embedded responsive video playback on the About page (`wp-content/uploads/2023/12/New-creative-video-online-video-cutter.com_.mp4`).
  * Instant access to the official Company Profile PDF (`wp-content/uploads/2024/07/Corona-Intl-Concepts-Ltd.pdf`).
  * Dynamic, verified Client Logo marquee / swiper.
* **SEO Optimized**: Complete with canonical tags, semantic markup, meta descriptions, valid OpenGraph cards, `robots.txt`, and XML sitemap (`sitemap.xml`).
* **Automated Asset Caching & Gzip Compression**: Aggressive caching headers configured for images, fonts, styles, and scripts.

---

## 🗂️ Site Structure & Page Directory

| File | Page Title / Description |
| :--- | :--- |
| [`index.html`](index.html) | **Home** – Hero slider, service highlights, philosophy, project showcase |
| [`about.html`](about.html) | **About Us** – Brand story, corporate video showcase, company profile download |
| [`services.html`](services.html) | **Services Overview** – Complete portfolio of services |
| [`creative-design.html`](creative-design.html) | **Creative Design** – Graphic identity, branding, visuals |
| [`concept-development.html`](concept-development.html) | **Concept Development** – Strategic innovation and design ideation |
| [`brand-communication.html`](brand-communication.html) | **Brand Communication** – Messaging, positioning, voice |
| [`event-activation.html`](event-activation.html) | **Event Activation** – Experiential marketing, corporate events |
| [`photography.html`](photography.html) | **Photography** – Commercial, corporate, and event photography |
| [`productions.html`](productions.html) | **Productions** – Video and multimedia productions |
| [`bespoke-software-development-services.html`](bespoke-software-development-services.html) | **Bespoke Software Development** – Custom web & mobile software |
| [`administrative-consulting-human-resources-management.html`](administrative-consulting-human-resources-management.html) | **Consulting & HR Management** – Corporate strategy & staffing |
| [`real-estate-consulting-services.html`](real-estate-consulting-services.html) | **Real Estate Consulting** – Property and advisory services |
| [`integrated-media-communications.html`](integrated-media-communications.html) | **Integrated Media** – Cross-channel media strategy |
| [`communications-services.html`](communications-services.html) | **Communications** – Strategic corporate communications |
| [`social-media-management.html`](social-media-management.html) | **Social Media** – Audience growth and content management |
| [`projects.html`](projects.html) | **Projects Showcase** – Featured client deliveries |
| [`ttat-wedding.html`](ttat-wedding.html) | **Case Study: TT&T Wedding** |
| [`titi-and-gbolahan.html`](titi-and-gbolahan.html) | **Case Study: Titi & Gbolahan** |
| [`clients.html`](clients.html) | **Clients** – Partner directory & interactive logo carousel |
| [`reviews.html`](reviews.html) / [`clients-review.html`](clients-review.html) | **Client Reviews** – Testimonials & feedback |
| [`blog.html`](blog.html) | **Blog** – Articles and company updates |
| [`post-traveling-and-fun.html`](post-traveling-and-fun.html) | **Article: Traveling and Fun** |
| [`post-why-building-a-house-is-important-2025.html`](post-why-building-a-house-is-important-2025.html) | **Article: Why Building a House is Important** |
| [`contact.html`](contact.html) | **Contact** – Interactive inquiry form & location details |
| [`404.html`](404.html) | **Custom 404** – Brand-aligned error page |

---

## 🛠️ Deployment Instructions

### Option 1: Apache / cPanel / Shared Hosting (Recommended)
1. Clone or pull this repository directly into your hosting web root (e.g., `public_html` or `htdocs`):
   ```bash
   git clone https://github.com/samoskillxteam/corona.git public_html
   ```
2. Ensure that `.htaccess` is present in the root directory. Apache `mod_rewrite`, `mod_headers`, `mod_deflate`, and `mod_expires` are enabled on standard cPanel configurations.
3. Your site is live, completely secured against PHP attacks, and serving clean HTML.

### Option 2: Nginx Web Server
Add the following location block to your server configuration:
```nginx
server {
    listen 80;
    server_name coronainternationalconcepts.com www.coronainternationalconcepts.com;
    root /var/www/corona;
    index index.html;

    # Clean URLs: try file, then file.html, then directory
    location / {
        try_files $uri $uri/ $uri.html =404;
    }

    # Block all script executions
    location ~* \.(php|pl|py|jsp|asp|sh|cgi)$ {
        return 403;
    }

    # Custom 404
    error_page 404 /404.html;

    # Static asset caching
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|webp|svg|woff|woff2|mp4|pdf)$ {
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }
}
```

### Option 3: Modern Edge Hosting (Netlify, Vercel, GitHub Pages)
This repository is 100% static and zero-build. It can be deployed with one click:
* **GitHub Pages**: Go to **Settings** > **Pages** > Select branch `main` and root `/` > Save.
* **Netlify / Cloudflare Pages**: Connect the GitHub repository; leave the build command blank and publish directory as root (`/`).

---

## 🔒 Maintenance & Updates

* To update text or images, edit the corresponding `.html` file directly using any text editor or IDE.
* All styles and scripts are organized under `wp-content/` and `wp-includes/`.
* No build step, compiler, or package manager is required. Commit changes and push via git:
  ```bash
  git add .
  git commit -m "Update page content"
  git push origin main
  ```

---

<p align="center">
  Developed & Maintained for <strong>Corona International Concepts Limited</strong>.<br />
  <em>Reliable. Secure. Performant.</em>
</p>
