# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

diagram-svg is a railway schedule diagram (ダイヤグラム) visualization tool for Japanese train lines. It renders SVG diagrams showing train routes, stop patterns, and service frequencies from JSON data. The project also provides a CSV-to-JSON converter for creating diagram data from Google Spreadsheets.

Live site: https://ponkotuy.github.io/diagram-svg/menu.html

## Build Commands

```bash
npm install              # Install dependencies
npm run build            # Build all bundles with webpack
npm run watch            # Rebuild on file changes
```

Docker build (used in CI):
```bash
docker-compose build
docker-compose run builder
```

## Testing

Tests use QUnit and run in the browser. Build first, then open `test.html` in a browser. There is no CLI test runner.

## Architecture

### Entry Points (webpack bundles)

There are 4 separate webpack entry points, each producing a bundle in `dist/`:

| Entry | HTML | Purpose |
|-------|------|---------|
| `src/index.ts` | `index.html` | Main diagram viewer — loads JSON, renders SVG |
| `src/menu.ts` | `menu.html` | Gallery page — Vue.js component listing available diagrams |
| `src/csv2json.ts` | `csv2json.html` | CSV-to-JSON converter UI using Papa Parse |
| `src/tests.ts` | `test.html` | QUnit test suite |

### Data Flow

```
Google Spreadsheet CSV → csv2json (Papa Parse + FirstParser) → JSON → Drawer (Raphael.js) → SVG
```

### Core Modules

**Data Models (`src/common/`):** `Line`, `SubLine`, `Station`, `Train` — represent railway lines, stations (with rank/importance levels), and train services (with speed, count, branches).

**CSV Parser (`src/csv2json/`):** `FirstParser` converts CSV rows into the JSON structure. `lines.ts` handles line/subline construction. `trainStops.ts` aggregates stop patterns. `diagramAttrs.ts` extracts metadata (title, author, company, region).

**Rendering Engine (`src/index/`):** `Drawer` is the central class — it takes a main Line, SubLines, and Trains, then draws station names, train lines, and stop markers using Raphael.js. `SpeedStyle` maps speed values (1–10) to colors and line widths. `StationStyle` maps station rank to font size/weight. `StationState` tracks per-station position offsets as trains are drawn.

### Key Libraries

- **Raphael.js** — SVG rendering (the `RaphaelPaper` / `RaphaelElement` types)
- **lodash** — imported as `_ = require('lodash')` throughout
- **Vue 2** — used only in the menu page, with `vue-class-component` decorators
- **Papa Parse** — CSV parsing in the converter
- **Materialize CSS** — UI styling

### Data Format

Diagram JSON has this structure:
```json
{
  "mainLine": { "id": 1, "stations": [{"id": 1, "name": "駅名", "rank": 1}], "xPos": null },
  "subLines": [],
  "trains": [{ "stations": [1, 2, 3], "branches": [], "speed": 5, "count": 10, "name": "Express" }]
}
```

JSON data files live in `data2/`. The `data/` directory contains symlinks to `data2/`.

### TypeScript Configuration

- Strict mode enabled
- Target: ES5 with DOM and ES2015 collections
- `experimentalDecorators` enabled (for Vue class components)
- Webpack uses `ts-loader` with inline source maps

### Deployment

CI pushes to `gh-pages` branch on every master push. The workflow builds via Docker, generates `svg_list.json` from `data2/`, and deploys the entire repo as a static site.
