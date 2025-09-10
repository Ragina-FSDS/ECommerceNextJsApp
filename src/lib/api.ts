import { ReactJsxRuntime } from "next/dist/server/route-modules/app-page/vendored/rsc/entrypoints";
import { Rethink_Sans } from "next/font/google";

// lib/api.ts

const BASE_URL = 'https://fakestoreapi.com';

// Generic GET request
export async function apiGet<T>(endpoint: string): Promise<T> {
    const res = await fetch(`${BASE_URL}${endpoint}`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`GET ${endpoint} failed: ${res.statusText}`);
    return res.json();
}

// Generic POST request
export async function apiPost<T>(endpoint: string, body: any): Promise<T> {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`POST ${endpoint} failed: ${res.statusText}`);
    return res.json();
}

// Generic PUT request
export async function apiPut<T>(endpoint: string, body: any): Promise<T> {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`PUT ${endpoint} failed: ${res.statusText}`);
    return res.json();
}

// Generic DELETE request
export async function apiDelete<T>(endpoint: string): Promise<T> {
    const res = await fetch(`${BASE_URL}${endpoint}`, { method: 'DELETE' });
    if (!res.ok) throw new Error(`DELETE ${endpoint} failed: ${res.statusText}`);
    return res.json();
}
