# Recipe Selector

A simple React app that allows users to select a recipe from a dropdown and view its details. The app uses the DummyJSON API to fetch recipe data and implements a service worker for caching.

## Features

- Dropdown menu to select a recipe.
- Displays recipe details (ingredients, instructions, and difficulty).
- Service worker caches API responses for faster loading.

## Setup

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Steps to Run

**Clone the repository**:
   ```bash
   git clone https://github.com/Ch1px/recipe-app
   ```
**Install dependencies**:
```bash
npm install
```
**Start development server**:
```bash
npm start
```

**Open in browser**:
```bash
http://localhost:3000
```

### API Source

Recipes are fetched from the DummyJSON API:
https://dummyjson.com/recipes?
