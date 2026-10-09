# A Little World for Alice 💗

A cute, mobile-first birthday website built with React + Vite.

## 1. Requirements
- Node.js 20 or newer recommended
- npm

## 2. Run locally
Open this folder in VS Code, then run in the terminal:

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually http://localhost:5173).

## 3. Add your photos
Put your photos in `public/photos/` and name them exactly:
- `our-photo-1.jpg`
- `our-photo-2.jpg`
- `our-photo-3.jpg`

You can use `.png` too, but if you do, update the corresponding photo paths in `src/App.js`.
Recommended: crop photos portrait or square, and keep the file sizes reasonably small so the page loads quickly on mobile.

The first photo appears in the hero and first scrapbook card. Use pictures you are both happy to share through the link.

## 4. Personalise it before you send it
Open `src/App.js` and edit:
- The `memories` array near the top: replace the sample titles and paragraphs with real memories and inside jokes.
- The `notes` array: make the notes sound like you and Alice.
- The birthday letter inside the `letterOpen` modal. Change any line that doesn't sound like something you would naturally say.
- Replace `your Naiii` if you prefer a different sign-off.

Important: there are sample messages in the app so the site works immediately. Personalising them is what makes it feel truly made for her.

## 5. Test and build
```bash
npm run build
npm run preview
```

If the build succeeds, it creates a `dist/` folder ready for deployment.

## 6. Deploy for free with Netlify Drop
1. Run `npm run build`.
2. Open https://app.netlify.com/drop in your browser and sign in or create a free account if asked.
3. Drag the `dist` folder into the drop area.
4. Netlify gives you a public URL. Open it on your phone to test before sending it to Alice.

Alternative: push the project to GitHub and import it into Netlify or Vercel. For a simple one-page site, Netlify Drop is the quickest route.

## Last-minute checklist
- [ ] Add 3–6 photos you both like.
- [ ] Replace sample scrapbook text with specific memories.
- [ ] Edit the letter so it sounds like you.
- [ ] Test all note cards and the final surprise.
- [ ] Open the deployed link on your phone.
- [ ] Send the link with a short personal message.
