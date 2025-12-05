# MRS Design System - Deployment Guide

## 🚀 Quick Deployment

### Deploy to Both Platforms (Recommended)
```bash
npm run deploy
```

This single command will:
1. Build the component library
2. Commit your changes
3. Push to GitHub
4. Deploy to GitHub Pages
5. Deploy to Vercel

---

## 📦 Individual Deployments

### Deploy to Vercel Only
```bash
npm run deploy:vercel
```

### Deploy to GitHub Pages Only
```bash
npm run deploy:gh-pages
```

---

## 🌐 Live URLs

After deployment, your demo will be available at:

- **Vercel**: https://app-ds.vercel.app (or your custom domain)
- **GitHub Pages**: https://madergk.github.io/app-ds/

---

## 🔧 First Time Setup

### For Vercel:
1. First time deployment will ask you to login
2. Browser will open for authentication
3. Choose your account and project settings
4. Subsequent deployments will be automatic

### For GitHub Pages:
1. Make sure you've pushed to GitHub first
2. Enable GitHub Pages in repo settings (done automatically)
3. Site will be live at `https://madergk.github.io/app-ds/`

---

## 📝 Deployment Workflow

### For regular updates:
1. Make your changes to components or demo
2. Test locally with `npm start`
3. Run `npm run deploy`
4. Your changes will be live on both platforms!

### For component library updates:
1. Edit components in `packages/mrs-components/src/`
2. Build library: `npm run build:lib`
3. Update demo in `apps/app-ds/src/App.jsx`
4. Deploy: `npm run deploy`

---

## 🎯 Manual Deployment Steps

If you prefer manual control:

```bash
# 1. Build the component library
npm run build:lib

# 2. Commit and push changes
git add .
git commit -m "Update design system"
git push origin main

# 3. Deploy to GitHub Pages
cd apps/app-ds
npm run deploy
cd ../..

# 4. Deploy to Vercel
npx vercel --prod
```

---

## ⚙️ Configuration Files

- **Vercel**: `vercel.json` - Build and deployment settings
- **GitHub Pages**: `apps/app-ds/package.json` - gh-pages configuration
- **Build**: `apps/app-ds/vite.config.js` - Smart base path for both platforms

---

## 🔄 Automatic Deployments

### Vercel (Recommended):
Connect your GitHub repo to Vercel for automatic deployments:
1. Go to vercel.com
2. Import your GitHub repository
3. Every push to `main` will auto-deploy!

### GitHub Pages:
Already configured! Just run `npm run deploy:gh-pages` whenever you want to update.

---

## 💡 Tips

- **Preview deployments**: Vercel creates preview URLs for branches
- **Rollback**: Both platforms keep deployment history
- **Custom domains**: Both support custom domains (free on Vercel Hobby plan)
- **Build time**: ~1-2 minutes for full deployment

---

## 🆘 Troubleshooting

### Build fails:
```bash
# Clean and rebuild
rm -rf node_modules package-lock.json apps/*/node_modules
npm install
npm run build:lib
```

### Vercel login issues:
```bash
# Clear Vercel cache and re-login
npx vercel logout
npx vercel login
```

### GitHub Pages not updating:
```bash
# Force rebuild
cd apps/app-ds
npm run deploy -- --force
```

---

## 📊 Deployment Status

You can check deployment status:
- **Vercel**: https://vercel.com/dashboard
- **GitHub Pages**: GitHub repo → Actions tab

---

**Happy Deploying! 🎉**
