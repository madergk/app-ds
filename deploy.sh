#!/bin/bash

# MRS Design System - Dual Deployment Script
# Deploys to both Vercel and GitHub Pages

set -e  # Exit on error

echo "🚀 Starting dual deployment to Vercel and GitHub Pages..."
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Build the component library
echo -e "${BLUE}📦 Step 1/5: Building component library...${NC}"
npm run build:lib
echo -e "${GREEN}✓ Component library built successfully${NC}"
echo ""

# Step 2: Commit changes
echo -e "${BLUE}📝 Step 2/5: Committing changes...${NC}"
git add .
if git diff-index --quiet HEAD --; then
    echo -e "${YELLOW}No changes to commit${NC}"
else
    git commit -m "Deploy: Update MRS Design System demo" || echo -e "${YELLOW}No changes to commit${NC}"
fi
echo ""

# Step 3: Push to GitHub
echo -e "${BLUE}⬆️  Step 3/5: Pushing to GitHub...${NC}"
git push origin main
echo -e "${GREEN}✓ Pushed to GitHub${NC}"
echo ""

# Step 4: Deploy to GitHub Pages
echo -e "${BLUE}🌐 Step 4/5: Deploying to GitHub Pages...${NC}"
cd apps/app-ds
npm run deploy
cd ../..
echo -e "${GREEN}✓ Deployed to GitHub Pages${NC}"
echo ""

# Step 5: Deploy to Vercel
echo -e "${BLUE}⚡ Step 5/5: Deploying to Vercel...${NC}"
npx vercel --prod --yes
echo -e "${GREEN}✓ Deployed to Vercel${NC}"
echo ""

# Success message
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}🎉 Deployment Complete!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "📍 Your demo is now live at:"
echo -e "   ${BLUE}GitHub Pages:${NC} https://madergk.github.io/app-ds/"
echo -e "   ${BLUE}Vercel:${NC}       https://app-ds.vercel.app (or your custom domain)"
echo ""
