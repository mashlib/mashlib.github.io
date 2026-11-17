// Renders tools/og.html to og.png (1200 × 630), the picture shown when a link is shared.
//   npm i playwright   (once), then: node tools/og.mjs
import { chromium } from 'playwright'
import { fileURLToPath } from 'node:url'
const here = (p) => fileURLToPath(new URL(p, import.meta.url))
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 })
await page.goto('file://' + here('./og.html'))
await page.evaluate(() => document.fonts.ready)
await page.screenshot({ path: here('../og.png') })
await browser.close()
