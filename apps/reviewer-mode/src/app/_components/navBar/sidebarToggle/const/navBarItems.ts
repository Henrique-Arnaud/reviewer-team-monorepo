const authAppUrl = process.env.AUTH_APP_URL

export const navigationItems = [
  { id: 1, name: 'LOGIN', url: `${authAppUrl}/login` },
  { id: 2, name: 'CREATE ACCOUNT', url: `${authAppUrl}/register` },
  { id: 3, name: 'GAMES', url: '/games' },
  { id: 4, name: 'LISTS', url: '/lists' },
]
