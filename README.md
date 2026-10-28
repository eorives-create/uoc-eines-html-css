# Dolços del Japó

Un petit portal en català amb fitxes de dorayaki i daifuku. Utilitza HTML, CSS, JavaScript i Parcel.

## Posar-lo en marxa

Cal Node.js 22 o superior i npm. `.nvmrc` indica la branca 24 de Node.js.

```sh
npm ci
npm start
```

Parcel mostra l’adreça local al terminal, habitualment `http://localhost:1234`.

## Generar la versió de producció

Amb el servidor de desenvolupament aturat, aquesta ordre crea la carpeta `dist`.

```sh
npm run build
```

`netlify.toml` configura aquesta compilació, el directori publicat i les rutes `/`, `/categoria`, `/det1`, `/det2` i `/links`.

## Fitxers

| Carpeta o fitxer | Contingut |
| --- | --- |
| `src/*.html` | Les cinc pàgines |
| `src/partials/` | Capçalera i peu compartits |
| `src/css/styles.css` | Estils de la pàgina |
| `src/js/categoria.js` | Filtre dels dolços pel nom |
| `src/js/galeria.js` | Enllaços de les fotografies i inici de la galeria |
| `src/img/` | Fotografies JPEG |
| `src/licenses/` | Llicències de les dues biblioteques |
| `.posthtmlrc` | Configuració de les inclusions HTML |

## Paquets

Parcel compila el web, rimraf neteja els resultats anteriors i npm-run-all encadena les tasques. `posthtml-include` incorpora la capçalera i el peu.

- `baguettebox.js` amplia les fotografies de les galeries i permet recórrer-les amb les fletxes. Els peus de foto mantenen els crèdits a la vista ampliada.
- `bootstrap-icons` aporta els pictogrames de cerca, llista i navegació. Només s’utilitza el paquet d’icones de Bootstrap.

`package-lock.json` fixa les versions resoltes. `.gitignore` exclou `node_modules`, `.parcel-cache`, `dist`, fitxers locals del sistema i còpies ZIP.

Les fonts i els crèdits són a `/links` i al [registre de recursos](RECURSOS.md).
