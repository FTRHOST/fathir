// Admin authentication configuration
export const adminConfig = {
  username: process.env.ADMIN_USERNAME || 'patir',
  password: process.env.ADMIN_PASSWORD || 'patir',
  jwtSecret: process.env.JWT_SECRET || 'your-super-secret-key-change-this-in-production'
} 