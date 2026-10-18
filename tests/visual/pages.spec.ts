import { readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { expect, test } from "@playwright/test";

// Every app/<route>/page.tsx is a demo page; the home page lists them.
const appDir = join(__dirname, "../../app");
const routes = [
  "/",
  ...readdirSync(appDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(appDir, d.name, "page.tsx")))
    .map((d) => `/${d.name}`)
    .sort(),
];

for (const route of routes) {
  test(route, async ({ page }) => {
    await page.goto(route);
    await page.evaluate(() => document.fonts.ready);
    const name = route === "/" ? "home" : route.slice(1);
    await expect(page).toHaveScreenshot(`${name}.png`, { fullPage: true });
  });
}
