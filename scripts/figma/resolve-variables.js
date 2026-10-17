// use_figma snippet (read-only). Resolves variable ids that the REST API cannot name
// (library variables, Pro plan). Paste the ids printed by extract.mjs into IDS, then merge
// the result with: node scripts/figma/extract.mjs --merge-vars <file>
const IDS = [];
const out = {};
for (const id of IDS) {
  const v = await figma.variables.getVariableByIdAsync('VariableID:' + id);
  if (!v) { out[id] = ['?', '?', '']; continue; }
  const c = await figma.variables.getVariableCollectionByIdAsync(v.variableCollectionId);
  out[id] = [v.name, c ? c.name : '?', (v.codeSyntax && v.codeSyntax.WEB) || ''];
}
return out;
