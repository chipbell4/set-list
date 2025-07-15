# set-list
A tiny client-side web app for tracking a set list live.

## Building
First, install dependencies with `npm ci`, followed by `npm run build`.

## Deploying
This site is only static assets, so they can basically copied wherever you want
them.
However, make sure you preserve the folder structure.
The copied file structure should be:
```
index.html
dist/index.js
styles.css
```

## Development
A local dev server can be ran with `npm start`.

To add additional songs, add a new element to the corresponding set list in
`src/data`.
To add an additional set list, add a new file in `src/data` that exports a
`SetList` type (see other files in `src/data` for examples).
Then, modify `src/data/index.ts` to also include the new set list.
Don't forget to rebuild :D
