/**
 * Motion Token Sync Checker
 *
 * Compares motion tokens defined in CSS (app/globals.css) against their
 * JS counterparts (app/components/motion.ts) to detect drift.
 *
 * Exit code 0 = all tokens in sync
 * Exit code 1 = one or more mismatches detected
 */

import { readFileSync } from 'fs';
import { join } from 'path';

// ---------------------------------------------------------------------------
// 1. Read both files
// ---------------------------------------------------------------------------

const cssPath = join(__dirname, '..', 'app', 'globals.css');
const jsPath = join(__dirname, '..', 'app', 'components', 'motion.ts');

const css = readFileSync(cssPath, 'utf-8');
const js = readFileSync(jsPath, 'utf-8');

// ---------------------------------------------------------------------------
// 2. Extract CSS values
// ---------------------------------------------------------------------------

function extractCssCubicBezier(varName: string): number[] | null {
  const re = new RegExp(`${varName}:\\s*cubic-bezier\\(([^)]+)\\)`);
  const match = css.match(re);
  if (!match) return null;
  return match[1].split(',').map((s) => parseFloat(s.trim()));
}

function extractCssDurationMs(varName: string): number | null {
  const re = new RegExp(`${varName}:\\s*(\\d+)ms`);
  const match = css.match(re);
  if (!match) return null;
  return parseInt(match[1], 10);
}

// ---------------------------------------------------------------------------
// 3. Extract JS values
// ---------------------------------------------------------------------------

function extractJsArray(constName: string): number[] | null {
  const re = new RegExp(`${constName}\\s*=\\s*\\[([^\\]]+)\\]`);
  const match = js.match(re);
  if (!match) return null;
  return match[1].split(',').map((s) => parseFloat(s.trim()));
}

function extractJsDuration(constName: string): number | null {
  const re = new RegExp(`${constName}\\s*=\\s*([\\d.]+)`);
  const match = js.match(re);
  if (!match) return null;
  return parseFloat(match[1]);
}

// ---------------------------------------------------------------------------
// 4. Compare helpers
// ---------------------------------------------------------------------------

function arraysEqual(a: number[], b: number[]): boolean {
  if (a.length !== b.length) return false;
  return a.every((v, i) => v === b[i]);
}

// ---------------------------------------------------------------------------
// 5. Run comparisons
// ---------------------------------------------------------------------------

let mismatches = 0;

console.log('\nMotion Token Sync Check');
console.log('======================\n');

// --- Easing tokens ---

const easingTokens: { cssVar: string; jsConst: string }[] = [
  { cssVar: '--ease-out-expo', jsConst: 'EASE_OUT_EXPO' },
  { cssVar: '--ease-in-out-quart', jsConst: 'EASE_IN_OUT_QUART' },
];

for (const { cssVar, jsConst } of easingTokens) {
  const cssValues = extractCssCubicBezier(cssVar);
  const jsValues = extractJsArray(jsConst);

  if (!cssValues) {
    console.log(`❌ ${cssVar}: not found in CSS`);
    mismatches++;
    continue;
  }
  if (!jsValues) {
    console.log(`❌ ${jsConst}: not found in JS`);
    mismatches++;
    continue;
  }

  if (arraysEqual(cssValues, jsValues)) {
    console.log(`✅ ${cssVar} ↔ ${jsConst}  [${cssValues.join(', ')}]`);
  } else {
    console.log(
      `❌ ${cssVar} ↔ ${jsConst}  CSS=[${cssValues.join(', ')}]  JS=[${jsValues.join(', ')}]`
    );
    mismatches++;
  }
}

// --- Duration tokens ---

const durationTokens: { cssVar: string; jsConst: string }[] = [
  { cssVar: '--duration-press', jsConst: 'DURATION_PRESS' },
  { cssVar: '--duration-hover', jsConst: 'DURATION_HOVER' },
  { cssVar: '--duration-enter', jsConst: 'DURATION_ENTER' },
];

for (const { cssVar, jsConst } of durationTokens) {
  const cssMs = extractCssDurationMs(cssVar);
  const jsSec = extractJsDuration(jsConst);

  if (cssMs === null) {
    console.log(`❌ ${cssVar}: not found in CSS`);
    mismatches++;
    continue;
  }
  if (jsSec === null) {
    console.log(`❌ ${jsConst}: not found in JS`);
    mismatches++;
    continue;
  }

  const jsMs = jsSec * 1000;

  if (cssMs === jsMs) {
    console.log(`✅ ${cssVar} ↔ ${jsConst}  ${cssMs}ms = ${jsSec}s`);
  } else {
    console.log(
      `❌ ${cssVar} ↔ ${jsConst}  CSS=${cssMs}ms  JS=${jsSec}s (${jsMs}ms)`
    );
    mismatches++;
  }
}

// ---------------------------------------------------------------------------
// 6. Summary
// ---------------------------------------------------------------------------

console.log('');
if (mismatches > 0) {
  console.log(`${mismatches} mismatch(es) found. Tokens are out of sync.`);
  process.exit(1);
} else {
  console.log('All motion tokens are in sync.');
  process.exit(0);
}
