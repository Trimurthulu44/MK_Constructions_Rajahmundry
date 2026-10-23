# MK Constructions – Rajahmundry Official Website

Modern, high-performance, local-SEO-optimized production website for **MK Constructions**, a premier residential and commercial civil building contractor in **Rajahmundry, Andhra Pradesh**, founded and led by contractor **Gedala Laxman Rao** (10+ years hands-on experience).

---

## 🏗️ Business Facts & Master NAP (Name, Address, Phone)
- **Business Name**: MK Constructions
- **Location**: Rajahmundry, East Godavari District, Andhra Pradesh, India
- **Founder / Chief Contractor**: Gedala Laxman Rao (10+ Years Hands-on Experience)
- **Primary Phone**: `+91 93814 40177`
- **Secondary Phone**: `+91 95585 55288`
- **WhatsApp**: `https://wa.me/919381440177`
- **Email**: `mkconstructions87@gmail.com`
- **Taglines**: 
  - *"Building Homes. Creating Trust."*
  - *"Quality Construction with Honest Commitment"*
- **Official Telugu Statement**:
  > "MK Constructions గృహ నిర్మాణ రంగంలో విశ్వసనీయమైన పేరు. 10+ సంవత్సరాల అనుభవంతో బలమైన, సురక్షితమైన మరియు నాణ్యమైన ఇళ్లను నిర్మిస్తున్నాము. గ్రాహక సంతృప్తి, ఉత్తమ పదార్థాలు మరియు సమయానికి పనులు పూర్తిచేయడం మా లక్ష్యం. తరతరాల పాటు నిలిచే ఇళ్లను నిర్మించడమే మా నిబద్ధత."

---

## 🚀 Deployment Guide (Vercel & Custom Domain)

### 1. Deploying to Vercel
1. Push this repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Framework Preset: **Vite** (Build command: `npm run build`, Output directory: `dist`).
5. Click **Deploy**.

For single-page application routing on Vercel, a `vercel.json` rewrites file is provided:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### 2. Connecting Your Custom Domain
1. In Vercel Project Settings, navigate to **Domains**.
2. Enter your registered domain (e.g., `mkconstructionsrajahmundry.com`).
3. Add the DNS records in your domain registrar (GoDaddy, Hostinger, Namecheap):
   - **Type**: `A`, **Name**: `@`, **Value**: `76.76.21.21`
   - **Type**: `CNAME`, **Name**: `www`, **Value**: `cname.vercel-dns.com`
4. Once DNS propagates (typically 10-30 minutes), SSL certificates are issued automatically.

### 3. Submitting the Sitemap in Google Search Console
1. Visit [Google Search Console](https://search.google.com/search-console).
2. Add your property URL (`https://mkconstructionsrajahmundry.com`).
3. Copy your verification meta tag and paste it into `/index.html`:
   ```html
   <meta name="google-site-verification" content="YOUR_CODE_HERE" />
   ```
4. Once verified, click **Sitemaps** in the sidebar.
5. Enter `sitemap.xml` in the field and click **Submit**.
6. Google will automatically crawl all routes (`/`, `/services`, `/projects`, `/about`, `/contact`, `/blog/*`).

---

## ✏️ How to Edit Text, Prices, and Business Details

All site constants and content live in a single centralized file:
👉 **`/src/data/site.ts`**

### To Update Phone Numbers, Email, or Working Hours:
Edit the `contact` object in `src/data/site.ts`:
```typescript
contact: {
  primaryPhone: '+91 93814 40177',
  secondaryPhone: '+91 95585 55288',
  whatsappNumber: '919381440177',
  email: 'mkconstructions87@gmail.com',
  workingHours: 'Monday – Saturday: 8:30 AM – 7:30 PM',
}
```

### To Update Real Client Testimonials:
Find `testimonialsPlaceholder` in `src/data/site.ts` and replace the placeholder text with verified client quotes and reviews.

---

## 📷 How to Add New Project Photos
1. Place new photos in `/public/images/original/`.
2. Run the image optimization script:
   ```bash
   node scripts/process-images.js
   ```
   This automatically generates responsive WebP images at 480w, 800w, 1280w, 1920w, extracts dimensions, generates blur placeholders, and updates `/src/data/images.ts`.
3. Commit and deploy.
