# mashlib

The Solid data browser: https://mashlib.com/

Paste the address of a pod, a folder or a profile and look at it. `?uri=<address>` opens one straight away.

Underneath is the official [mashlib](https://github.com/SolidOS/mashlib) 3.1.0 bundle (`mashlib.min.js`, `mash.css` and its chunks), exactly as SolidOS publishes it on npm. `index.html` is upstream's `browse.html` with the address bar in the header beside the account buttons. `databrowser.html` is upstream's, unchanged.

The same data browser with no build step and panes loaded at run time: https://mashlib.com/dynamic/ ([mashlib/dynamic](https://github.com/mashlib/dynamic)).

`og.png` is the picture shown when a link is shared; `node tools/og.mjs` renders it from `tools/og.html`.

Licence: the bundle is SolidOS's, MIT (LICENSE-MIT). The page and the picture are AGPL-3.0-or-later.
