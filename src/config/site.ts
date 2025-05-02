export interface SiteConfig {
  name: string
  title: string
  description: string
  logo: string
  email: string
  github: string
  linkedin: string
  heroTitle: string
  heroDescription: string
  footerText: string
  author: string
}

export const defaultSiteConfig: SiteConfig = {
  name: 'Fathir',
  title: 'Fathir - Personal Website',
  description: 'Welcome to my personal website where I share my thoughts and projects.',
  logo: '/assets/img/logo.jpg',
  email: 'fathironmy4@gmail.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  heroTitle: 'Welcome to My Website',
  heroDescription: 'I am a passionate developer and writer.',
  footerText: '© 2024 Fathir. All rights reserved.',
  author: 'Fathir'
} 