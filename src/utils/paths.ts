const baseUrl = import.meta.env.BASE_URL.endsWith('/') 
  ? import.meta.env.BASE_URL 
  : `${import.meta.env.BASE_URL}/`;

export function path(p: string): string {
  if (!p || p === '/') return baseUrl;
  if (p.startsWith('#') || p.startsWith('http://') || p.startsWith('https://') || p.startsWith('mailto:')) {
    return p;
  }
  const cleanPath = p.startsWith('/') ? p.slice(1) : p;
  return `${baseUrl}${cleanPath}`;
}
