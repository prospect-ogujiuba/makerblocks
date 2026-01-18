import '@testing-library/jest-dom'

// Mock window.siteData for tests
window.siteData = {
  siteUrl: 'http://localhost',
  siteName: 'Test Site',
  nonce: 'test-nonce',
  restNonce: 'test-rest-nonce',
}
