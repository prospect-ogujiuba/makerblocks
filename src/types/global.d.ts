/**
 * Global type declarations for MakerBlocks
 */

interface SiteData {
  siteUrl: string;
  siteName: string;
  nonce: string;
  restNonce: string;
  userId?: number;
  isAdmin?: boolean;
}

declare global {
  interface Window {
    siteData: SiteData;
    wp: typeof import('@wordpress/element') & {
      blocks: typeof import('@wordpress/blocks');
      blockEditor: typeof import('@wordpress/block-editor');
      components: typeof import('@wordpress/components');
      i18n: typeof import('@wordpress/i18n');
      data: typeof import('@wordpress/data');
    };
  }
}

export {};
