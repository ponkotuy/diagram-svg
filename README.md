# diagram-svg

Railway schedule diagram (ダイヤグラム) visualization tool for Japanese train lines.

**[日本語版 README はこちら](README.ja.md)**

![Keikyu Line Diagram](img/keikyu.png)

## Overview

diagram-svg renders train schedule diagrams as SVG images from JSON data. It visualizes train routes, stop patterns, service frequencies, and speed classes for Japanese railway lines. The project also includes a CSV-to-JSON converter for creating diagram data from Google Spreadsheets.

## Demo

Browse available diagrams on the live site:

**https://ponkotuy.github.io/diagram-svg/menu.html**

## Features

- SVG diagram rendering with Raphael.js
- Color-coded train types by speed class (local, rapid, express, limited express, Shinkansen)
- Station ranking with visual hierarchy (font size, color, underline)
- Sub-line / branch line support
- CSV-to-JSON converter for Google Spreadsheets input
- SVG export
- Gallery page listing 45+ railway lines

## Getting Started

```bash
npm install
npm run build
```

Then open `index.html` in a browser to view a diagram, or `menu.html` to browse the gallery.

## Usage

### Diagram Viewer (`index.html`)

Load a JSON data file to render the schedule diagram as SVG. The viewer draws station names, train lines with color-coded speed classes, and stop markers.

### CSV-to-JSON Converter (`csv2json.html`)

Paste CSV data exported from Google Spreadsheets to generate diagram JSON. The converter parses station data, train stop patterns, and metadata (title, author, company, region).

### Gallery (`menu.html`)

A Vue.js-powered gallery page listing all available diagrams. Click any entry to view its diagram.

## Data Format

Diagram JSON follows this structure:

```json
{
  "mainLine": {
    "id": 1,
    "stations": [
      { "id": 1, "name": "Station Name", "rank": 1 }
    ],
    "xPos": null
  },
  "subLines": [],
  "trains": [
    {
      "stations": [1, 2, 3],
      "branches": [],
      "speed": 5,
      "count": 10,
      "name": "Express"
    }
  ]
}
```

### Speed Classes

| Speed | Type | Color | Width |
|-------|------|-------|-------|
| 1 | Local | Black | 1 |
| 2 | Semi-Rapid | Green | 1 |
| 3–4 | Rapid | Blue (#0066ff) | 1 |
| 5–6 | Express | Orange | 2 |
| 7 | Limited Express | Red | 2 |
| 8 | Kodama | Black | 2 |
| 9 | Hikari | Blue (#0066ff) | 2 |
| 10 | Nozomi | Dark Blue (#003399) | 2 |

### Station Ranks

| Rank | Color | Font Size | Underline |
|------|-------|-----------|-----------|
| 1 | Red | 22 | Yes |
| 2 | Blue | 20 | Yes |
| 3 | Black | 18 | Yes |
| 4+ | Black | 18 | No |

## Included Lines

The `data2/` directory contains 44 railway line diagrams:

| Operator | Lines |
|----------|-------|
| JR East | Chuo, Joban, Keiyo, Sobu |
| JR West | Fukuchiyama, Hanwa, Kansai, Katamachi, Nara, Sagano, Tokaido |
| JR Central | Chuo, Tokaido |
| JR Kyushu | Kagoshima |
| Keikyu | Main Line |
| Keio | Main Line |
| Keisei | Main Line |
| Keihan | Main Line |
| Odakyu | Main Line |
| Tokyu | Den-en-toshi, Toyoko |
| Seibu | Ikebukuro, Shinjuku |
| Tobu | Isesaki, Tojo |
| Sotetsu | Main Line |
| Kintetsu | Kyoto, Minami-Osaka, Nagoya, Nara, Osaka |
| Nankai | Main Line, Koya |
| Hankyu | Kobe, Kyoto, Takarazuka |
| Hanshin | Main Line |
| Meitetsu | Chita, Gifu, Inuyama, Toyohashi |
| Nishitetsu | Main Line |
| Tsukuba Express | Main Line |

## Development

### Build

```bash
npm install
npm run build    # Build all bundles with webpack
npm run watch    # Rebuild on file changes
```

### Docker Build

```bash
docker-compose build
docker-compose run builder
```

### Project Structure

```
src/
├── index.ts          # Diagram viewer entry point
├── menu.ts           # Gallery page entry point
├── csv2json.ts       # CSV converter entry point
├── tests.ts          # Test suite entry point
├── common/           # Data models (Line, Station, Train)
├── index/            # Rendering engine (Drawer, SpeedStyle, StationStyle)
└── csv2json/         # CSV parser (FirstParser, diagramAttrs)
data2/                # Railway line JSON data files
dist/                 # Built bundles (generated)
```

### Testing

Tests use QUnit. Build first, then open `test.html` in a browser.

## Deployment

GitHub Actions automatically deploys to GitHub Pages on every push to `master`. The workflow builds via Docker, generates `svg_list.json` from `data2/`, and publishes to the `gh-pages` branch.

## License

See repository for license details.
