import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Tambahkan ini (untuk gambar di GitHub Pages)
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Helper untuk gambar (optional tapi recommended)
export function getImagePath(path: string): string {
  return `${basePath}${path.startsWith("/") ? "" : "/"}${path}`;
}
