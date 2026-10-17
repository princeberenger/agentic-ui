# Figma debt — à corriger dans Figma, puis à répercuter en code

Fichier Figma : `Dqy0QA70ThT4iZXNgJljkG` (AGENTIC-DESIGN-SYSTEM).
Règle : Figma fait foi. Le code reproduit Figma tel quel, y compris les incohérences ci-dessous.
Quand une entrée est corrigée dans Figma, on met le code à jour et on coche l'entrée.

## 1. Incohérences de variantes (reproduites telles quelles)

### Badge — 124:2898 (`app/components/Badge/Badge.module.css`, `Badge.tsx`)
- [ ] Pill sm avec bordure : padding horizontal 10px (`PADDING/10`), toutes les autres variantes 8px.
      Code : règle `.pill.sm.border`.
- [ ] Pill sm sans bordure : icône 13px, les autres variantes sm 14px.
      Code : `iconSize()` dans `Badge.tsx`.
- [ ] Color neutral et none : avec bordure le label passe à `BADGE/label/default` (#191919)
      et neutral passe à `BADGE/bg/default` ; sans bordure le label reste `BADGE/label/gray` (#363636).
      Code : règles `.neutral.border`, `.none.border`.

### Button — 147:2305 (`app/components/Button/`)
- [ ] Destructive disabled : 3 rendus différents selon les variantes.
- [ ] Largeur en loading : les variantes et la description du composant se contredisent.
- [ ] Padding destructive md : 16px ou 12px selon les variantes.
- [ ] Hover secondary filled : devient blanc. Hover destructive light : devient rouge plein. Intentionnel ?

## 2. Valeurs sans variable (non tokenisées dans Figma)

### Badge
- [ ] Couleur de l'icône Close : aucune variable liée. Le code utilise la couleur du label (`currentColor`).
      Deux variantes green ont une Close masquée liée à `CONTENT/Primary` et `CONTENT/Success` (restes probables).
- [ ] Close : aucun état hover ni pressed défini. Le code n'a que le focus clavier (`--shadow-components-focus`).
- [ ] Libellé d'accessibilité de Close : absent de Figma. Le code met `closeLabel="Remove"` par défaut.

### Avatar — 179:17313
- [ ] Type=agent : illustration exportée de Figma (48 SVG, un par couleur et taille, couleurs figées).
      Le blob flouté n'a pas la même géométrie selon la couleur (32px : gray 23px de haut, blue 19, purple 13…)
      et les couleurs des quarts de la silhouette ne sont pas tokenisées : pas de mode dark possible.
- [ ] Type=initials : Figma montre 1 lettre (`Label (Sm)`) en 16 et 20, 2 lettres (`Label (Med)`) dès 24.
      Le code affiche le texte reçu, sans tronquer.

### AvatarGroup — 783:773
- [ ] Chevauchements -8px (photos, initials) et -6px (compact) sans variable.
      Le code réutilise `--space-8` et `--space-6` en négatif.

### Checkbox — 124:2639, Checkbox with label — 815:75
- [ ] Aucun état hover ni focus. Le code a seulement le focus clavier (`--shadow-components-focus` sur la boîte).
- [ ] Gap de 4px entre label et description sans variable. Le code utilise `--space-4`.
- [ ] Alignement : le composant aligne la boîte en haut, mais les instances de CheckboxGroup
      passent en centré. Le code centre sans description et aligne en haut avec description.
- [ ] Style=has-background n'a pas de variante disabled. Le code applique les couleurs disabled de no-background.

### HelperText — 4066:7007
- [ ] Pas de variante warning + sm + solid. Le code applique les couleurs de warning lg solid.
- [ ] Error solid : texte et icône en `CONTENT/Attention (Light)` en sm, `CONTENT/On Primary` en lg.
- [ ] Texte : `SYSTEM/Body/xs/regular` pour success et error sm solid, le style bold partout ailleurs.
- [ ] Padding horizontal lg : 10px en light, 12px en solid.

### CheckboxGroup — 4066:5501
- [ ] Type=vertical a une largeur fixe de 128px. Le code laisse la largeur au contenu.

## 3. Tokens

- [ ] CSS sans variable Figma : `--color-hover-overlay` (noir 6 %), `--color-transparent-4`, `--radius-2`
      (variable `2` référencée par KeyboardShortcut mais absente des variables locales),
      `--radius-sm` (8px), `--radius-badge` (doublon de `--radius-6`), `--space-20`, `--icon-8`.
- [ ] `--color-focus-ring` doublonne `--color-transparent-blue-50`.
- [ ] Mode DARK de la collection MODE : non implémenté en CSS.
- [ ] Modes SHARP et ROUNDED de BORDER RADIUS : non gérés en code.
- [x] Code syntax WEB à écrire pour les 12 variables BADGE/bg et BADGE/label ajoutées avec Badge.

## 4. Assets du repo différents de Figma

- [x] `checkmark-filled.svg` : cercle plus petit que `Icons / Checkmark--filled`. Remplacé par l'export Figma
      (vert `#1B561A` gardé pour l'usage `mode="img"` de StepperSubstep, qui devrait passer en mask + `--color-content-success`).

## 5. Détection des changements Figma (à construire)

L'API REST répond avec le token d'environnement (`/v1/files/:key/nodes` renvoie padding, rayons,
fills, strokes et `boundVariables` de chaque variante ; `version` et `lastModified` du fichier).

Plan :
1. `scripts/figma-snapshot.mjs` : pour chaque composant mappé en Code Connect (`*.figma.ts`), lit le nœud,
   normalise chaque variante (dimensions, padding, gap, rayon, fills, strokes, texte, icônes, nom de la
   variable liée ou valeur brute) et écrit `.ai/figma-snapshots/<Component>.json`. Idem pour les variables
   locales (`.ai/figma-snapshots/variables.json`).
2. `npm run figma:diff` : relit Figma, compare aux snapshots commités, liste les changements par composant
   et par variante, et signale les valeurs sans variable (section 2).
3. Après chaque mise à jour Figma : `figma:diff` → on applique les changements en code → on régénère le
   snapshot → on coche les entrées corrigées ici.
