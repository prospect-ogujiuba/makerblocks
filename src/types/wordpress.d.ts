/**
 * WordPress Block API type augmentations
 */

import type { BlockEditProps as WPBlockEditProps } from '@wordpress/blocks';

/**
 * Extended BlockEditProps with common patterns
 */
export interface BlockEditProps<T extends Record<string, unknown>> extends WPBlockEditProps<T> {
  attributes: T;
  setAttributes: (attrs: Partial<T>) => void;
  className?: string;
  isSelected?: boolean;
  clientId?: string;
}

/**
 * Block metadata from block.json
 */
export interface BlockMetadata {
  $schema?: string;
  apiVersion: number;
  name: string;
  version?: string;
  title: string;
  category: string;
  icon?: string;
  description?: string;
  example?: Record<string, unknown>;
  attributes?: Record<string, BlockAttribute>;
  supports?: Record<string, unknown>;
  textdomain?: string;
  editorScript?: string;
  editorStyle?: string;
  style?: string;
  render?: string;
}

/**
 * Block attribute definition
 */
export interface BlockAttribute {
  type: 'string' | 'number' | 'boolean' | 'object' | 'array';
  default?: unknown;
  source?: string;
  selector?: string;
  attribute?: string;
}
