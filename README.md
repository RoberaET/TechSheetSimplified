# TechSheetSimplified

Quickly browse and compare Huawei SME devices, IdeaHubs, Mini FTTO, Storage and more — no more digging through endless datasheets.

## Features

- Device catalogue with categories and series
- Full-text search and spec-based filtering
- Dropdown “Compare Devices” selector with checkboxes
- Full-page comparison at `/compare?ids=a,b,c` with green highlights for best values
- Nested dropdowns for complex hierarchies (IdeaHub components, SME families)

## Getting Started

1) Install dependencies

```bash
npm install
```

2) Run the dev server

```bash
npm run dev
```

Open http://localhost:3000 (or 3001 if 3000 is busy).

## Usage

- Home page: pick Device Type and Series from the dropdowns, then “Find Devices”.
- Devices page: use search and filters. Click “Compare Devices” and tick 2+ items. Press “Confirm Compare” to open the comparison page.
- Comparison page: shares a spec table across devices and highlights the best numeric values in green; ties are highlighted for all winners.

## Tech Stack

- Next.js 14 + App Router
- React 18
- Tailwind CSS 4
- Radix UI primitives (dropdown, select, dialog, etc.)

## Repo

Deployed to GitHub: `https://github.com/RoberaET/TechSheetSimplified`

## License

GPL-3.0
