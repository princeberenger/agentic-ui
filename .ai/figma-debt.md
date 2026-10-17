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
- [ ] Secondary icon-only disabled : sm sans fond ni contour, md contour sans fond, lg fond sans contour.
      Les autres types secondary disabled gardent fond et contour. Reproduit par taille (`.iconOnly`).

### Pagination — 716:3790, pagination-item — 716:3884 (`app/components/Pagination/`)
- [ ] Type=numbered : Icons / Chevron--left en 20px dans le bouton précédent, Chevron--right en 16px dans le suivant.
      Reproduit (`size={20}` sur la flèche gauche).
- [ ] pagination-item : le focus est un contour 1px `BORDER/Strong`, identique à l'état active,
      au lieu de `Shadows/Components/focus` utilisé partout ailleurs. Reproduit.
- [ ] pagination-item Type=number n'a pas d'état focus ni disabled. Le code applique le contour active au focus clavier.

### Breadcrumbs — 549:163, BreadcrumbItem — 549:91 (`app/components/Breadcrumbs/`)
- [ ] Items=5 : commence par un séparateur `<` puis l'overflow, et aucun item n'est en `current`
      (Items=2 à 4 finissent par `current`). Le code garde le `<` et met le dernier item en `current`.
- [ ] Items=5 ne cache qu'un item (4 visibles après l'overflow). Le code replie au-delà de `maxItems={4}`.
- [ ] Menu de l'overflow : copie détachée de `_Menu list item` (rayon 4, contour 1px, largeur 128 avec des items
      de 160 min), différente du composant Menu (rayon 12, contour 0,5). Le code réutilise Menu/MenuItem sm
      avec le rayon, le contour et les espaceurs 4px de la breadcrumb.
- [ ] Hover : style `SYSTEM/Label/md/underline` en weight Regular alors que default et current sont en Medium.
      Departure Mono n'a que le 400, la différence ne se voit pas.
- [ ] Aucun état focus. Le code a seulement le focus clavier (`--shadow-components-focus`).

### Progress - Bars (10, 12, 20, 24, 48) — 4096:6952, 4096:7139, 4096:7377, 4096:7708, 4072:7514 (`app/components/ProgressBars/`)
- [ ] Le nom des variantes `Filled` ne correspond pas au nombre de barres remplies : (10) 10% → 2, 50% → 6, 70% → 8 ;
      (24) 45% → 10, 55% → 14 ; (48) 50% → 26. Le code prend un nombre de barres (`filled`) et Code Connect
      reprend le nombre dessiné dans chaque variante.
- [ ] (24) a une largeur fixe de 142 avec des barres en fill, les autres sont en hug avec des barres fixes.

### ProgressBar — 4115:7289 (`app/components/ProgressBar/`)
- [ ] Le remplissage ne suit pas le pourcentage affiché : 10 % → 20/180 (11 %), 70 % → 140 (78 %), 90 % → 160 (89 %).
      Le code remplit au pourcentage exact.
- [ ] Progress=0 est en hug avec une barre fixe de 180, les autres en largeur fixe 214 avec une barre en fill.
      Le code laisse la barre prendre la place disponible.

### Volume — 4072:8082, draggable — 4072:8067 (`app/components/Slider/`)
- [ ] Aucun état (hover, focus, drag, disabled). Le code applique `.ai/motion-rules.md` 4.1 et 4.2 (poignée qui s'épaissit,
      contour fort pendant le drag, points d'arrêt), le focus `--shadow-components-focus` et l'opacité 0,5 en disabled.
- [ ] Volume : la structure change selon `Value` (alignements, texte fixe ou fill, Value=100 remplace le remplissage
      par un rectangle et sort la poignée). Le code garde une seule structure.
- [ ] draggable : pas de poignée, un trait au milieu, un remplissage visible de 40px (`20%`, soit 16,7 %) et trois
      rectangles masqués `50%`, `75%`, `100%` en `CONTENT/Primary` (noir) alors que le visible est en `BACKGROUND/Tertiary`.
      Le code reprend le trait, le remplissage aux coins arrondis et le comportement de Volume.
- [ ] draggable : `100` est centré dans sa boîte de 24px comme `50`, seul `0` est aligné à gauche. Reproduit.

### Table — cell-header 789:320, cell-type-* (`app/components/Table/`)
- [ ] cell-header : seule la variante Default/Left a un padding horizontal de 24, toutes les autres 16.
      **Exception** : le code met 16 partout, sinon la cellule bouge au survol.
- [ ] cell-header : hauteur fixe 40 avec un padding vertical de 12, une checkbox de 24 n'y tient pas.
      Le code centre le contenu sans padding vertical.
- [ ] cell-header : Disabled et Loading passent le fond en `BACKGROUND/Primary` (Secondary sinon). Reproduit.
- [ ] Focus : contour 2px (`STROKE/lg`) partout sauf cell-type-progress en 1px. Reproduit.
- [ ] cell-type-progress nomme `Selected` ce qui est le survol des autres cellules. Le code le traite en hover.
- [ ] cell-type-text : en Default le contenu est aligné en haut, centré dans les autres états. Le code centre.
- [ ] Checkbox : calque masqué dans cell-type-text sans propriété pour l'afficher (cell-header a `Checkbox`).
      Le code l'affiche quand `onSelectedChange` est passé.
- [ ] cell-type-dropdown : pas d'état hover. `Selected` (fond `INPUT/Pressed`) et `Focus` (contour 1,5px, chevron vers le haut)
      décalent le texte de 16px à gauche. Le code : `Selected` = pression, `Focus` = menu ouvert ou focus clavier.
- [ ] cell-type-editable-field : en Focus l'icône Edit devient un bouton secondaire icône Checkmark.
      Le code l'interprète comme le mode édition (le bouton valide, Échap annule).
- [ ] cell-type-action : le bouton overflow perd son contour, et son fond au survol de la cellule. Reproduit.
- [ ] Disabled : opacité 0,3 sur les barres et les avatars, 0,5 sur le badge. Reproduit.

### Navigation — 230:699, nav-logo 484:13150, nav-link 750:8765, nav-user-settings 6008:14270 (`app/components/Navigation/`)
- [ ] Navigation n'a ni fond, ni contour, ni rayon (l'ancien code avait fond secondary, contour et rayon 8). Le code suit Figma.
- [ ] Type=tree, State=closed garde la largeur 247 et ne montre que la ligne du logo. Reproduit.
- [ ] Type=tree : le titre `Orchestrate` est en fill (207) alors que `Monitor` et `Delegate` sont en hug ; son conteneur
      de sous-liens a une largeur fixe 199, un gap 12 et `space-between`. Le code traite les trois sections pareil.
- [ ] nav-link : pas d'état actif (seul nav-sub-link en a un) ni focus. Le code expose `aria-current` sans visuel
      et met le focus `--shadow-components-focus`.
- [ ] nav-link : les chevrons de section sont dans des cadres de 1px de large, l'icône de 16 déborde. Le code place
      le chevron 8px après le libellé.
- [ ] nav-link : le rayon 10 n'existe qu'au survol. Le code le garde en permanence (invisible sans fond).
- [ ] Boutons menu du logo et overflow de nav-user-settings : aucun état. Le code n'a que le focus clavier.
- [ ] Icons/ Menu --collapsed : deux couleurs (`CONTENT/Icon` et trait `CONTENT/Primary`), nommé hors convention `Icons / `.
      Le code le rend d'une seule couleur (Icon seul, Primary dans Navigation).

### Code block — CodeInline 4124:7606, CopyButton 4124:12068, Simple 4126:5641, Advanced 4125:6917 (`app/components/CodeBlock/`)
- [ ] CodeInline a des états hover, active, focus sans dire ce que fait le clic. Le code ne les applique que si `onClick` est passé.
- [ ] CopyButton : le focus ajoute un contour 1,5px `BORDER/Accent` au focus standard ; en sm le rayon passe de 6 à 4 au survol.
      Reproduit.
- [ ] CopyButton : « Copied » apparaît en State=pressed sans durée. Le code le garde jusqu'à la fermeture de l'infobulle.
- [ ] Code block (Simple) : le survol du bloc montre le CopyButton survolé et son infobulle. Reproduit (le bouton reste
      le seul élément cliquable).
- [ ] Code block (Advanced) : aucun état hover ni focus, contrairement au Simple. Rien d'ajouté.
- [ ] Code block (Advanced) : texte tronqué par la boîte (5 lignes, 18 déplié) avec points de suspension. Le code utilise
      `line-clamp`, le texte masqué n'est pas défilable.

### Skeleton loading animation — 761:23192 (`app/components/Skeleton/`)
- [ ] Animation définie en prototype (Phase 1 → 5, 3,4s, smart animate ease in and out). Le code la reproduit en keyframes CSS.

### Chat messages — UserMessage 4119:17618, AgentMessage 6246:10120, ChatMessageMetadata 6270:1160,
### ChatMetadataRead 6279:11285, Chat status dot 6293:6710, ChatSystemMessage 6227:9774, ChatScrollButton 6255:14244 (`app/components/Chat/`)
- [ ] AgentMessage : en default la bulle n'a pas de fond mais porte `Shadows/elevation1` (invisible dans Figma). Au survol
      elle prend un fond, perd l'ombre, passe en hug et ses rayons changent (9999/900/900/9999). Le code : pas d'ombre,
      pilule blanche + `INPUT/Hover` au survol.
- [ ] AgentMessage : largeur min 400, max 640 (700 pour code et tool call), écart texte → contenu 12 (code) ou 8 (tool call).
      Le code laisse la largeur au parent et met 12.
- [ ] UserMessage Style 1 hover : la variante perd la largeur fill (212 au lieu de 322). Sans effet visuel, non reproduit.
- [ ] ChatMessageMetadata : les actions (copier, réessayer, pouces) n'ont aucun état. Le code n'a que le focus clavier.
- [ ] ChatMetadataRead : « Sending » utilise le style `Gradient/Shimmer` statique. Le code le garde statique (pas d'animation définie).
- [ ] Chat status dot : la ligne est fixe (14) pour Gray, fill pour les autres ; les alignements changent selon la variante.
      Le code garde une structure, la ligne grandit sauf en Gray.
- [ ] ChatSystemMessage : Checkpoint « Restore checkpoint » sans état. Le code en fait un bouton avec focus clavier si `onRestore`.
- [ ] ChatScrollButton : Mode=Dark non implémenté (pas de thème sombre en CSS). Le bouton primary est surchargé en rond
      avec `Shadows/elevation2`, reproduit.
- [ ] `icons / Time` (179:15826) nommé en minuscules hors convention `Icons / `.

### Chat agent — Agent step 4119:17981, toolcall-base 6282:12965, Chat Tool Call 6231:10080, Multistepper 6295:15285,
### progress 8017:11583, CONTEXT 8017:11604, CONTEXT-TOOLTIP 8017:42354, ChatComposer 4133:11200 (`app/components/Chat/`)
- [ ] Agent step : variante `Sub-step=Incoplete` (faute de frappe). Aucun état hover ni focus pour le chevron.
- [ ] Agent step active et ChatMetadataRead « Sending » : `Gradient/Shimmer` statique, pas d'animation définie.
- [ ] Multistepper : structure à marges négatives (gap -8 et -32) et traits superposés pour les sous-étapes.
      Le code dessine un rail et une courbe par sous-étape (asset `public/assets/chat/substep-curve.svg`).
- [ ] progress : 15 % dessine un quart de cercle (25 %), l'arc part de 3 heures. Le code dessine la valeur exacte,
      depuis 3 heures.
- [ ] CONTEXT : la position du CONTEXT-TOOLTIP n'est pas définie. Le code l'ouvre au-dessus, aligné à droite, au survol et au focus.
- [ ] CONTEXT-TOOLTIP : un calque `blur` blanc (flou 0) recouvre le fond `BACKGROUND/menu/background` jusqu'au total.
      Le code met un fond blanc.
- [ ] ChatComposer : la variante par défaut du set est `drag-drop`. Le calque `blur` (flou 0) blanchit le haut de la zone
      (rouge en erreur). Le code fait un dégradé blanc → `BACKGROUND/Secondary` sur 80px.
- [ ] ChatComposer : le hover change le contour (0,5 `BORDER/Strong`), l'active passe à 1px, filled 0,5 `BORDER/Medium`,
      error 1px `BORDER/Attention`, warning 0,5 `BORDER/Warning`. Reproduit, le focus l'emporte sur le hover.
- [ ] ChatComposer : `Cursor blink animation` (active) est le curseur natif du champ dans le code.
- [ ] ChatComposer : la poignée 20×4 des pièces jointes et le « N Items » n'ont pas d'état. Le code en fait des boutons
      (replier, déplier) avec focus clavier.
- [ ] ChatComposer condensed : pas de bouton d'envoi (Entrée envoie).

### File type — 6111:11622 (`app/components/FileType/`)
- [ ] `Type` (Document, Code, Video, Image, Audio) ne change que les textes d'exemple, l'icône reste Icons / Document.
- [ ] Hover : l'icône devient Icons / Download (large, small) ; en medium elle reste et le bouton passe en CONTENT/Primary.
      Pas d'état focus. Le code fait du fichier entier un lien de téléchargement.
- [ ] Small : le bouton est fermer (`Show close icon`), medium : télécharger. Reproduit.

### Menu — 558:659, _Menu list item 554:1372, Menu model selection 638:6554 (`app/components/Menu/`)
- [ ] Le code du Menu datait de la v1.2 (rayon 12, contour 0,5 Subtle, fond blanc). Refait d'après Figma : rayon 10, contour 0,5
      `BORDER/Medium` extérieur, trait intérieur blanc, fond `BACKGROUND/menu/background` blanchi par le calque `blur` (dégradé).
- [ ] _Menu list item : le padding passe de 8 à 7 en hover/focus/selected, l'écart de 4 à 12. Le code garde 8 et 12.
- [ ] _Menu list item disabled : fond `BACKGROUND/Primary` (blanc), proche de l'état selected. Reproduit.
- [ ] Models dans un item : 24×24 en selected/focus avec maxWidth 20. Le code garde 20.
- [ ] Sous-menu (chevron) : absent de Figma, gardé du code existant.

### ButtonGroup — 4092:2459, SocialButton — 675:3982, Models — 118:15337
- [ ] SocialButton : Google n'existe qu'en secondary. GitHub primary est blanc avec `INPUT/Hover (Light)` au survol (invisible).
      Reproduit.
- [ ] SocialButton : les logos sont des composants `apple`, `twitter-x`, `discord`, `linkedin`, `github-fill`, `google` hors
      convention `Icons / `. Assets dans `public/assets/social/` (Google réutilise `Icons / Google`).
- [ ] Models : variante `Provider10` (xAI 20px) mal nommée ; Gemini est une image matricielle dans un SVG.

### Stepper, MISC
- [ ] PULSATING-DOT : prototype Low ↔ High en LINEAR 900ms (linear est interdit hors timers par `.ai/motion-rules.md`), reproduit.
- [ ] SCROLL FADE Mode=Dark : l'icône reste CONTENT/Primary (noir) sur le fond noir, donc invisible. Reproduit.
- [ ] DEMO PAGE HEADER : le logo fait 24×22.59 (hauteur fill) ; le code garde le carré 24 du symbole.
- [ ] Variable de bibliothèque externe `Default/Gray/100` (collection Colors) référencée par un ancien menu-list-item ; plus utilisée par les specs actuelles.

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

### Radio button — 124:2977, Radio button with label — 812:4430
- [ ] Aucun état hover ni focus. Le code a seulement le focus clavier (`--shadow-components-focus`).
- [ ] Contour 1px et point de 10px sans variable. Le code utilise `--stroke-default` et `--space-10`.
- [ ] Pas de RadioGroup (label de groupe, helper text) contrairement à Checkbox.

### Switch — 814:110, Switch with label — 816:3579
- [ ] Largeur du rail (29px sm, 43px lg) sans variable. Le code la calcule depuis `--icon-*`.
- [ ] Ombre intérieure du rail (inset 0 1px 2px 12 %) appliquée en effet brut, pas en effect style.
      Le code l'a nommée `--shadow-switch-track`.
- [ ] Switch with label : largeur fixe de 217px. Le code laisse la largeur au contenu ;
      Position=right pousse le switch au bout du conteneur.
- [ ] Switch with label : label disabled en `CONTENT/Secondary` (Checkbox et Radio utilisent `CONTENT/Disabled`).
- [ ] Switch (Theme) 6114:855 non intégré : en mode Light, la lune (`CONTENT/On Primary`) est blanche sur le knob blanc.
      À reprendre avec le mode dark.

### Tooltip — 2001:2681
- [ ] Aucun écart défini entre le déclencheur et la flèche. Le code colle la pointe de la flèche au déclencheur.
- [ ] Caret alignment start / end : Figma place la flèche à 16px du bord de la bulle, sans dire où est le
      déclencheur. Le code aligne la pointe sur le centre du déclencheur.
- [ ] Left et Right n'existent qu'en Caret alignment=Center.
- [ ] Pas de délai d'apparition ni d'animation définis. Le code fait un fondu `--duration-enter` / `--ease-out-expo`.

### Toast — 4008:623
- [ ] Largeur fixe de 320px sans variable. Le code la reprend en dur.
- [ ] Bouton fermer : seule la variante success lie sa visibilité à `Close button`, les trois autres l'affichent toujours.
      Le code l'affiche quand `onClose` est passé.
- [ ] Bouton fermer : instance de Button secondary surchargée (rayon full, `BACKGROUND/Secondary`, sans contour).
      Ce n'est pas une variante de Button.
- [ ] Style `BUTTON/Label/md/regular` lié à `weight/Semibold`, mais Departure Mono n'a que Regular.
      Le code utilise `--weight-regular`, comme le rendu Figma.
- [ ] Icône de titre : Icons / Checkmark pour les 4 types, y compris warning et destructive.
- [ ] Padding droit du texte : 32px (info, success, warning), 16px (destructive).
- [ ] Aucune animation, durée d'affichage ni empilement définis. Le code fournit le toast seul.
- [x] Le champ de destructive est `Text input` sm (32px). Le composant Input du repo n'est pas encore aligné
      sur Figma (40px) : le toast destructive fait 187px au lieu de 179px.

### Text input — 761:20738
- [ ] Largeur fixe de 288px. Le code remplit le conteneur.
- [ ] Hauteur du champ (40 / 32px) non liée aux variables `INPUTS/Regular` et `INPUTS/Small`.
      Le code utilise `--input-regular` et `--input-small`.
- [ ] Pas de variante focus + error / success. Le code donne la priorité au focus (`BORDER/Strong`).
- [ ] State=warning garde le contour `BORDER/Subtle` (error et success colorent le contour).
- [ ] Pas de variante disabled + rempli. Le code met le texte en `CONTENT/Disabled`.

### Password input — 6133:736
- [ ] Texte masqué en `SYSTEM/Body/md/regular`, sauf la variante md error (`SYSTEM/Body/sm/regular`). Le code utilise md partout.
- [ ] State=error-2 (message unique) n'est pas un état visuel distinct : le code le rend avec `status="error"` + `helperText`.
- [ ] Les règles sont du contenu Figma (5 lignes). Le code les fournit en `PASSWORD_RULES`, évaluées sur la saisie.
- [ ] Pas d'état focus + success / error : le focus l'emporte, comme pour Text input.

### Text area — 2003:3900
- [ ] Hauteur du champ (100px) sans variable. Le code la reprend en dur.
- [ ] Label en `CONTENT/Primary` dans tous les états (Text input utilise `CONTENT/Secondary` au repos).
- [ ] State=error sans fond (les autres états ont `BACKGROUND/Primary`).
- [ ] Pas d'état hover.
- [ ] SCROLL FADE seulement sur State=filled. Le code l'affiche quand le texte dépasse, hors focus, error,
      readonly et disabled, et le masque une fois en bas du texte.
- [ ] SCROLL FADE : flou d'arrière-plan de 2px invisible dans le rendu Figma. Le code ne garde que le dégradé.
- [ ] Texte tronqué avec « … » à 4 lignes dans Figma ; un vrai textarea fait défiler le texte.

### DropdownMenu — 4084:4742
- [ ] Le composant ne contient que le déclencheur : la liste d'options et sa position ne sont pas définies.
      Le code ouvre le Menu existant (role listbox) pleine largeur, 4px sous le déclencheur (`--space-4`).
- [ ] State=active masque le texte (placeholder caché). Le code garde le texte visible quand le menu est ouvert.
- [ ] `Shadows/elevation1` = ombre portée + ombre intérieure, mais `--shadow-elevation-1` ne contient que l'ombre portée :
      le code ajoute `--shadow-inset-bottom` (comme DialerCard). TabGroup utilise `--shadow-elevation-1` seul.
- [ ] Hover : le calque `INPUT/Hover (Dark)` est appliqué avec une opacité de calque de 4 % en plus de l'alpha de la variable.

### Search — 338:6162, _Search base — 338:6250
- [ ] lg utilise les icônes `Search` et `Close` d'une librairie distante (avec un fond blanc), sm les icônes locales.
      La croix distante est plus petite. Le code utilise `Icons / Search` et `Icons / Close` partout.
- [ ] Couleur de la loupe : lg `CONTENT/Icon`, sm `CONTENT/Secondary` (default), lg `CONTENT/Icon`, sm `CONTENT/Primary` (filled).
- [ ] Rayon lg disabled : 10 au lieu de 12.
- [ ] Anneau de focus (2px noir 12 %) en effet brut, pas en variable ni en effect style. Le code utilise `--color-input-selected`.
- [ ] Cadre de la loupe sm : 30px au lieu de 32px.
- [ ] Base Expanded=false : texte en style `body-short-01` et couleur brute `#150080` (masqués).
- [ ] Le raccourci « ⌘S » est un texte affiché : aucun comportement défini. Le code l'affiche seulement.
- [ ] Largeurs fixes (320 / 240px). Le code remplit le conteneur.

### MODAL — 4092:1641
- [ ] Largeur fixe de 480px sans variable.
- [ ] Bouton fermer : même surcharge du Button secondary que Toast (rayon full, `BACKGROUND/Secondary`, sans contour).
- [ ] Le Text area de la modal est surchargé à 200px de haut (le composant fait 100px).
- [x] La zone « Agent can access: » + File upload area : le template et la démo utilisent `FileUpload`.
- [ ] Gap de 10px du ButtonGroup sans variable. Le code utilise `--space-10`.
- [ ] Aucune animation ni overlay définis dans le composant. Le code utilise `OVERLAY/Background` et un fondu
      `--duration-enter` / `--ease-out-expo`.
- [ ] `.heading-h2` de globals.css (20/24 Medium) ne correspond pas à `SYSTEM/Heading/h2` (24/28 Regular).

### File upload area — 4028:6848, File loading — 4028:6912
- [ ] Disabled : le bouton passe en style primary disabled (secondary dans les autres états).
- [ ] Hover : le bouton prend `Shadows/elevation1` par surcharge d'instance.
- [ ] File loading : boutons de suppression = Button secondary surchargé sans fond ni contour. Le code utilise
      la variante ghost.
- [ ] File loading : hauteur fixe de 32px avec un padding vertical de 8px que le bouton de 24px déborde.
- [ ] Contour pointillé 4/4 : le code le dessine en SVG (le `border: dashed` CSS n'a pas ce motif).
- [ ] Largeurs fixes (320px). Le code remplit le conteneur.
- [ ] Aucun comportement défini (glisser-déposer, sélection). Le code accepte le dépôt et le choix de fichiers.

### Loading animation — 4030:7034
- [ ] Animation en 4 variantes Phase (smart animate linéaire 180ms). Le code fait une rotation CSS continue (720ms le tour).
- [ ] Seule la taille Small existe.

### HelperText — 4066:7007
- [ ] Pas de variante warning + sm + solid. Le code applique les couleurs de warning lg solid.
- [ ] Error solid : texte et icône en `CONTENT/Attention (Light)` en sm, `CONTENT/On Primary` en lg.
- [ ] Texte : `SYSTEM/Body/xs/regular` pour success et error sm solid, le style bold partout ailleurs.
- [ ] Padding horizontal lg : 10px en light, 12px en solid.

### CheckboxGroup — 4066:5501
- [ ] Type=vertical a une largeur fixe de 128px. Le code laisse la largeur au contenu.

### Pagination — 716:3790, pagination-item — 716:3884
- [ ] `pagination-results-label-wrapper` : largeur fixe 280px sans variable. Le code laisse la largeur au contenu
      (le `space-between` garde les boutons à droite).
- [ ] Menu ouvert (`_Select menu chrome menu`) : dessin du menu natif de Chrome, texte 14/18 sans style de texte,
      padding 4/22/16 et largeur 56 sans variable, fond `Transparent` sur les items. Le code ouvre le vrai menu natif
      (`<select>` transparent posé sur l'item), dont le rendu dépend du navigateur et de l'OS.
- [ ] Choix des pages visibles : Figma ne montre que `1 2 3 4 … 10`. Le code garde 1-4 au début, les 4 dernières à la fin,
      et `1 … p-1 p p+1 … n` au milieu (deux overflows).

### Breadcrumbs — 549:163
- [ ] `link-separator` : cadre 20x20 sans variable. Le code utilise `--icon-20`.
- [ ] Séparateur `/` et `<` : texte sans style de texte (variables liées une à une).

### Progress - Bars, ProgressBar
- [ ] Largeur des barres 1px (48), 2px (10, 12, 20), 4px (24) sans variable. Le code utilise `--stroke-default`,
      `--space-2`, `--space-4`.
- [ ] ProgressBar : points de 1px espacés de 1px, barre 180×12 et remplissage de 11px de haut sans variable.
      Le code dessine les points en CSS sur une grille `--stroke-default`.

### Volume, draggable
- [ ] Largeur 240 et hauteur du slider (32, 48) sans variable. Le code utilise `--icon-32` et `--icon-48`.
- [ ] Volume : remplissage minimal de 8px et poignée de 2px sans variable (`--space-8`, `--space-2`).
      Le trait de la poignée est lié à `STROKE/lg`, qui n'a pas de code syntax WEB.
- [ ] draggable : trait du milieu 1px et boîtes de 24px des valeurs sans variable (`--stroke-default`, `--icon-24`).

### Table
- [ ] Largeur 379 fixe, min 124 et max 400 sans variable. Le code laisse le tableau dimensionner les colonnes.
- [ ] Trait bas de 1px sans variable. Le code utilise `--stroke-default`.
- [ ] Squelettes de chargement : largeurs 220, 133, 81, 80, 56 sans variable (px dans le CSS),
      rayon lié à la variable `2` (179:647) supprimée de BORDER RADIUS. Le code utilise `--radius-2`.
- [ ] Variables d'une bibliothèque externe (Carbon) : `Core/0`, `Core/25`, `Core/50`, `Core/100`, `Core/150`, `Core/200`,
      `radius/formInput`, `boarder/width/medium`, `64px (spacing-10)`. Le code utilise les tokens locaux de même valeur.
- [ ] AvatarGroup et squelette multiple : chevauchement -8 sans variable (`--space-8` en négatif).

### Navigation
- [ ] Largeur 247 et hauteur 700 sans variable (247px dans le CSS, hauteur laissée au conteneur).
- [ ] Rail des sous-liens 1px sans variable (`--stroke-default`), indicateur actif 8×12 (`--space-8`, `--space-12`),
      logo 75×20 et largeur 187 du libellé utilisateur sans variable.

### Code block, Skeleton
- [ ] Largeurs 400 (Simple) et 640 (Advanced), hauteurs 160 et 480 sans variable. Le code prend la largeur du parent,
      les hauteurs sont en px.
- [ ] Simple : CopyButton à 5px du coin sans variable (`--space-4` + `--stroke-default`).
- [ ] Skeleton : couleurs #e8e8e8 et #c6c6c6 sans variable. Tokens CSS ajoutés `--color-skeleton-bg`, `--color-skeleton-highlight`.
- [ ] Variables supprimées encore liées : `21:22` (CodeInline, CopyButton, Simple), `Transparent 4%` (124:3050, collection
      TRANSPARENCY), probablement dans l'effet `Components/Focus`.

### Chat messages
- [ ] Largeurs max 400 (UserMessage) et 720 (ChatSystemMessage), séparateurs Date 2 max 128 sans variable
      (px dans le CSS, `--space-128` pour le séparateur).
- [ ] Point de statut 7px, ligne 1px, point de séparateur 2px, écart 4 du reçu sans variable.
- [ ] Vague du checkpoint 33×5, trait 1px sans variable (asset `public/assets/chat/checkpoint-wave.svg`).
- [ ] ChatScrollButton : flou d'arrière-plan 2 sans style ; dégradés `Gradient/Scrollfade` en styles de remplissage,
      avec `TRANSPARENT/white/0`, `TRANSPARENT/black/0`, `TRANSPARENT/black/100`, `NEUTRAL/Neutral 800` sans code syntax.
- [ ] Variables de bibliothèque externe : `PADDING/md` (8), `ICONS/2xs` (14). Le code utilise `--space-8`, `--icon-14`.

### Chat agent, File type
- [ ] Icône des sous-étapes 13, chevrons 14, écart texte/durée 8 et opacité 0,5 du temps d'outil sans variable.
- [ ] CONTEXT-TOOLTIP : largeur 220, écarts 12 et 4 sans variable.
- [ ] ChatComposer : hauteur 128, zone de texte 72, `blur` 715×80 sans variable ; poignée 20×4.
- [ ] File type large : 156 de large sans variable (`--space-48` × 3 + `--space-12`).
- [ ] Tokens CSS ajoutés : `--color-border-warning` (BORDER/Warning), `--color-bg-menu` (BACKGROUND/menu/background),
      `--color-transparent-black-20` (TRANSPARENT/black/20). Code syntax WEB écrite.

### Boutons, menus
- [ ] ButtonGroup : écart 10 sans variable (`--space-10`). Menu : largeurs 160, 128, 531 sans variable.
- [ ] Models : padding 11/8 et tailles des logos (16, 15×16, 13, 12×13, 14) sans variable.
- [ ] Mistral #e10500 sans variable (logo en couleurs). Google : couleurs de marque sans variable.
- [x] Tokens CSS ajoutés : `--color-neutral-100`, `--color-neutral-900`, `--color-social-discord`, `--color-social-linkedin`.
      Code syntax WEB écrite.

### Stepper, MISC
- [ ] stepper-substep disabled : cercle 7.09 sans variable. Connecteur : trait 1px, 25 de haut, sans variable.
- [ ] Cursor blink : 1 × 17 sans variable. SCROLL FADE : largeur 320, flou 2 sans effect style.
- [ ] DEMO PAGE HEADER : largeur 1280, gaps 12, trait 9 × 20 de 1px, boutons fixés à 24 de large, sans variable.
- [ ] Tokens CSS ajoutés : `--color-transparent-white-0`, `--color-transparent-black-0`, `--color-transparent-black-100`.
      Code syntax WEB à écrire.

### Validation text, Switch (Theme)
- [ ] validation-text-line : largeur fixe 308 dans Validation Text (Password). Le code prend toute la largeur.
- [ ] Switch (Theme) : piste 43.2 de large (code 43, comme Switch lg), ombre intérieure sans effect style
      (`--shadow-switch-track`), gap 4 du masque, rayon 100 du knob, icônes 14 sans variable.
- [ ] Switch (Theme) : stroke 1px intérieur du knob de la même couleur que son fill (invisible), reproduit.

## 3. Tokens

- [ ] CSS sans variable Figma : `--color-hover-overlay` (noir 6 %), `--color-transparent-4`, `--radius-2`
      (variable `2` référencée par KeyboardShortcut mais absente des variables locales),
      `--radius-sm` (8px), `--radius-badge` (doublon de `--radius-6`), `--space-20`, `--icon-8`.
- [ ] `--color-focus-ring` doublonne `--color-transparent-blue-50`.
- [ ] Mode DARK de la collection MODE : non implémenté en CSS. Seules les 3 variables épinglées en DARK par
      Switch (Theme) Mode=Dark sont dans `[data-theme='dark']` (CONTENT/On Primary, SWITCH/knob/Active, SWITCH/bg/active).
- [ ] Modes SHARP et ROUNDED de BORDER RADIUS : non gérés en code.
- [x] Code syntax WEB à écrire pour les 12 variables BADGE/bg et BADGE/label ajoutées avec Badge.
- [ ] Sans code syntax WEB et utilisées par des composants : `BORDER RADIUS/none`.
- [x] Tokens CSS ajoutés avec Code block, code syntax WEB écrite : `PADDING/64` → `--space-64`,
      `BACKGROUND/Secondary On Elevated` → `--color-bg-secondary-on-elevated`, `BORDER/Accent` → `--color-border-accent`.
- [x] Tokens CSS ajoutés avec Table, code syntax WEB écrite : `STROKE/md` → `--stroke-md` (1.5px),
      `STROKE/lg` → `--stroke-lg` (2px), `INPUT/Pressed` → `--color-input-pressed` (noir 8 %).

## 4. Assets du repo différents de Figma

- [x] `checkmark-filled.svg` : cercle plus petit que `Icons / Checkmark--filled`. Remplacé par l'export Figma
      (vert `#1B561A` gardé pour l'usage `mode="img"` de StepperSubstep, qui devrait passer en mask + `--color-content-success`).

- [x] `search.svg` : version retransformée, décalée d'environ 0,3px. Remplacé par l'export de `Icons / Search`.

- [x] `upload.svg` : agrandi pour remplir sa boîte, différent de `Icons / Upload`. Remplacé par l'export Figma.

- [x] `chevron-right.svg` : c'était un caret plein (triangle), pas `Icons / Chevron--right`. Remplacé par l'export Figma
      (change aussi la flèche de sous-menu de MenuItem et la pagination legacy de `app/table`).

- [x] `overflow-menu-horizontal.svg` : absent du repo. Ajouté depuis `Icons / Overflow-menu--horizontal` (179:14008).

- [x] `folder.svg` : absent du repo. Ajouté depuis `Icons / Folder` (179:12822).

- [x] `arrows-vertical.svg` : absent du repo. Exporté par le script (`Icons / Arrows--vertical`, 179:14549).

- [x] `menu-collapsed.svg` : absent du repo. Ajouté depuis `Icons/ Menu --collapsed` (230:694).

- [x] Icônes ajoutées par le script : `warning-filled`, `reset`, `thumbs-up`, `thumbs-down`, `checkmark-2`, `user`,
      plus `time` (179:15826) et `arrow-down` (179:14031).

- [x] Icônes ajoutées : `brain`, `checkmark-outline`, `document`, `download`, `tools`.

- [x] Icônes ajoutées : `google`, `gemini`, `openai`, `mistral`, `xai` ; logos sociaux dans `public/assets/social/`.

- [x] Icônes ajoutées par le script : `sun` (179:17087), `moon-filled` (6114:852).

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
