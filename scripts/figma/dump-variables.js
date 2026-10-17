// use_figma snippet (read-only). Dumps local variables as { id: [name, collection, WEB code syntax] }.
// Set COLLECTIONS to a subset when the result exceeds the 20 KB use_figma limit.
// Save the result to .ai/figma/variables.json with: node scripts/figma/extract.mjs --merge-vars <file>
const COLLECTIONS = null; // e.g. ['MODE', 'COLORS']
const cols = await figma.variables.getLocalVariableCollectionsAsync();
const out = {};
for (const c of cols) {
  if (COLLECTIONS && !COLLECTIONS.includes(c.name)) continue;
  for (const id of c.variableIds) {
    const v = await figma.variables.getVariableByIdAsync(id);
    if (v) out[id.replace('VariableID:', '')] = [v.name, c.name, (v.codeSyntax && v.codeSyntax.WEB) || ''];
  }
}
return out;
