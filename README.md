# 20-week backend interview plan

Three files, no build step, no dependencies.

```
index.html
styles.css
app.js
```

## Running it

Double-clicking `index.html` works in Chrome and Firefox, but Safari blocks
`localStorage` on `file://` URLs, so progress won't save there. Serving the
folder over HTTP avoids the problem everywhere:

```bash
cd roadmap-local
python3 -m http.server 8000
# then open http://localhost:8000
```

Or with Node:

```bash
npx serve .
```

## Where progress lives

One `localStorage` key: `backend-roadmap-v1`. It holds an object whose keys are
checkbox ids (`w3c1`, `w3d`, `w3s` — week 3 core item 1, week 3 DSA, week 3
ship). Clearing site data for the origin resets everything, as does the
"Reset progress" button.

Because it's keyed to the origin, progress on `localhost:8000` is separate from
progress on a `file://` copy. Pick one and stay with it.

## Backing it up

Paste this in the browser console to copy your progress out:

```js
copy(localStorage.getItem('backend-roadmap-v1'))
```

And to restore it on another machine:

```js
localStorage.setItem('backend-roadmap-v1', '<paste the JSON here>')
```

## Editing the plan

All content lives in `app.js` in two arrays at the top: `PHASES` and `W`. Each
week is `{n, p, t, dsa, core[], ship}`. Add, cut or reword freely — the grid,
the progress bar and the checkbox ids all derive from those arrays. Just don't
renumber existing weeks after you've started, or the saved ids won't line up.

## Offline

The only network request is the Google Fonts stylesheet. Delete those three
`<link>` tags in `index.html` if you want it fully offline; the CSS falls back
to system fonts.
