## Ziel
Die Seite wird künftig unter dem Unterpfad `/deepfeel/` gehostet. Alle absoluten Pfade zu Medien, die aus dem `public/`-Ordner geladen werden, müssen den Präfix `/deepfeel/` bekommen, damit sie auf der neuen URL geladen werden können.

## Gefundene Vorkommen
Eine vollständige Suche nach absoluten Pfaden zu Bildern, SVGs und Videos ergab genau drei Stellen — alle in `src/pages/Index.tsx`:

- Zeile 36:  `<ScrollVideo src="/videos/klavier.mp4" />`
- Zeile 212: `<ScrollVideo src="/videos/anime.mp4" />`
- Zeile 233: `<ScrollVideo src="/videos/rewas-freundschaft.mp4" />`

Alle anderen Medien (Logos, Hintergrundbilder etc.) werden bereits über ES6-`import`-Statements aus `src/assets/` geladen. Diese werden von Vite beim Build automatisch mit Hash-Namen versehen und benötigen keine manuelle Anpassung — sie funktionieren beim Deployment in einem Unterordner ebenfalls korrekt, sobald der Vite-`base`-Pfad gesetzt ist.

Die `public/placeholder.svg` wird nirgends referenziert.

## Änderungen

### 1. `src/pages/Index.tsx`
Die drei Video-Pfade werden auf den Unterordner umgestellt:

- `"/videos/klavier.mp4"` → `"/deepfeel/videos/klavier.mp4"`
- `"/videos/anime.mp4"` → `"/deepfeel/videos/anime.mp4"`
- `"/videos/rewas-freundschaft.mp4"` → `"/deepfeel/videos/rewas-freundschaft.mp4"`

### 2. `vite.config.ts`
Damit die per `import` eingebundenen Assets (Logos, Bilder in `src/assets/`) und der JS/CSS-Bundle-Pfad beim Build ebenfalls den Unterordner benutzen, wird `base: "/deepfeel/"` in der Vite-Konfiguration ergänzt. Ohne das würden CSS/JS und die gehashten Asset-URLs weiterhin auf `/` verweisen und im Unterordner-Deployment 404 liefern.

## Hinweise
- In der Entwicklungs-Preview auf Lovable (die auf `/` läuft) werden die Videos nach dieser Änderung nicht mehr angezeigt, weil der Pfad `/deepfeel/videos/...` dort nicht existiert. Das ist erwartet — die Anpassung ist rein für das externe Hosting im Unterordner.
- Falls du beides parallel unterstützen willst (Lovable-Preview + externer Unterordner), wäre eine dynamische Variante über `import.meta.env.BASE_URL` sauberer. Sag Bescheid, wenn das gewünscht ist — dann passe ich den Plan an.
