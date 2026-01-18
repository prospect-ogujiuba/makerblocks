/**
 * API response types for MakerMaker REST API integration
 */

/**
 * Generic API response wrapper
 */
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

/**
 * Paginated API response
 */
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

/**
 * API error response
 */
export interface ApiError {
  code: string;
  message: string;
  data?: Record<string, unknown>;
}

/**
 * TypeRocket REST API base response
 */
export interface TypeRocketResponse<T> {
  data: T;
  meta?: {
    total?: number;
    per_page?: number;
    current_page?: number;
    last_page?: number;
  };
}
