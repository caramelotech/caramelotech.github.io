export const getBasePath = (): string => {
  return import.meta.env.BASE_URL || "/";
};

export const resolveImagePath = (path: string): string => {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("data:")) {
    return path;
  }

  const basePath = getBasePath();
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  return `${basePath}${cleanPath}`;
};
