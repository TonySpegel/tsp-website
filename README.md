## Local development
In order to use Zola together w/ NPM imports for local development run:
```bash
npm run local-dev
# or 
npm run build-zola-local && npm run serve-zola-local & npm run wds
```
This runs in order:
| NPM Script         | Runs                                    | What it does                                                                                                                                                 |
|--------------------|-----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `build-zola-local` | `zola --config config.local.toml build` | Build the website with Zola itself.<br>This means building all static pages, <br>setting its base_url, output_dir <br>and compiling Sass among other things. |
| `serve-zola-local` | `zola --config config.local.toml serve` | This will build and serve the site <br>using a local server but won't write <br>static files to a directory.                                                 |
| `wds`              | `wds`                                   | Web Dev Server (among other things) <br> resolves bare module imports for use in the browser.                                                                                     |                                                                                                                                               |