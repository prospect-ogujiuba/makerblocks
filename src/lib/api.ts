/**
 * API utilities for MakerMaker REST API integration
 */

import type { ApiResponse, TypeRocketResponse, ApiError } from '../types/api'

/**
 * Base fetch helper with TypeRocket authentication
 */
export async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const { siteUrl, nonce } = window.siteData

  const response = await fetch(`${siteUrl}/tr-api/rest/${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'X-TypeRocket-Nonce': nonce,
      ...options.headers,
    },
  })

  if (!response.ok) {
    const error: ApiError = await response.json()
    throw new Error(error.message || 'API request failed')
  }

  return response.json()
}

/**
 * GET request helper
 */
export async function get<T>(endpoint: string): Promise<T> {
  return fetchApi<T>(endpoint, { method: 'GET' })
}

/**
 * POST request helper
 */
export async function post<T>(endpoint: string, data: unknown): Promise<T> {
  return fetchApi<T>(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

/**
 * PUT request helper
 */
export async function put<T>(endpoint: string, data: unknown): Promise<T> {
  return fetchApi<T>(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data),
  })
}

/**
 * DELETE request helper
 */
export async function del<T>(endpoint: string): Promise<T> {
  return fetchApi<T>(endpoint, { method: 'DELETE' })
}
