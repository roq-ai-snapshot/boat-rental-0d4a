const mapping: Record<string, string> = {
  boats: 'boat',
  platforms: 'platform',
  rentals: 'rental',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
