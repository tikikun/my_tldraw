// src/types/assets.d.ts

declare module '*.pdf' {
    const content: string; // Path/URL to the asset
    export default content;
  }