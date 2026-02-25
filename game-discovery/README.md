# 🎮 Game Discovery App

> A game browsing experience built with **Next.js** and **RAWG API**.  
> ⚠️ **Note:** Due to regional network restrictions affecting API access, live data fetching may be limited. The core architecture, UI, and logic are fully implemented.

[![Status](https://img.shields.io/badge/status-partial%20implementation-orange)](https://github.com/NiushaEbrahimi/interview-technical-step/tree/rawg-games/game-discovery)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)

---

## Description

This project aims to build a responsive game discovery platform using the [RAWG API](https://api.rawg.io/docs/). It includes game listing, advanced filtering, search functionality, and dynamic game detail pages.

### Important Notice: API Connectivity
Due to international sanctions and network restrictions, direct connections to the **RAWG API** are frequently blocked or unstable.
- **Implementation Status:** The complete frontend architecture, state management, filtering logic, and UI components are implemented.
- **Data Fetching:** The API service layer is structured correctly. For demonstration purposes, **mock data** or **proxy configurations** may be required to view live content in this region.
- **Code Quality:** All best practices (Error Boundaries, Loading States, TypeScript types) are applied regardless of API availability.

---

## Features Status

| Feature | Status | Notes |
|---------|--------|-------|
| **Game Listing** | ✅ Implemented | Grid layout with infinite scroll/pagination |
| **Search & Filters** | ✅ Implemented | Debounced search, genre/platform filters |
| **Game Details** | ✅ Implemented | Dynamic routing (`/game/[slug]`) |
| **API Integration** | ⚠️ Restricted | Service layer ready|
| **Error Handling** | ✅ Implemented | Global error boundaries & fallback UI |
| **Performance** | ✅ Implemented | Image optimization, lazy loading |

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Data Fetching** | React Query (TanStack Query) |
| **API** | RAWG API (v2.3) |
| **Icons** | Lucide React / Heroicons |

---

## Installation & Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- **RAWG API Key** (Get one at [rawg.io/apidocs](https://rawg.io/apidocs))

### Steps

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/NiushaEbrahimi/interview-technical-step.git
    cd interview-technical-step/game-discovery
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env.local` file in the root of the project:
    ```env
    NEXT_PUBLIC_RAWG_API_KEY=your_api_key_here
    ```

4.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

---