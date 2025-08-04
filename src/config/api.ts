// API Configuration
export const API_CONFIG = {
  // Development
  development: {
    baseURL: 'http://localhost:8000'
  },
  // Production (Vercel)
  production: {
    baseURL: 'https://project-launcher-p55e.vercel.app'
  }
};

// Export the appropriate base URL
// In development, use localhost. In production (Vercel), use the deployed backend
export const API_BASE_URL = 'https://project-launcher-p55e.vercel.app';

// API endpoints
export const API_ENDPOINTS = {
  conversation: {
    start: `${API_BASE_URL}/api/v1/conversation/start`,
    continue: `${API_BASE_URL}/api/v1/conversation/continue`
  },
  mcp: {
    status: `${API_BASE_URL}/api/v1/mcp/status`,
    tools: `${API_BASE_URL}/api/v1/mcp/tools`,
    execute: `${API_BASE_URL}/api/v1/mcp/execute`,
    createProject: `${API_BASE_URL}/api/v1/mcp/create-project`,
    deployProject: `${API_BASE_URL}/api/v1/mcp/deploy-project`
  },
  health: `${API_BASE_URL}/health`,
  download: `${API_BASE_URL}/download`
}; 