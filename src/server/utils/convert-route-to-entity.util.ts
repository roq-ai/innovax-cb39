const mapping: Record<string, string> = {
  connections: 'connection',
  organizations: 'organization',
  startups: 'startup',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
