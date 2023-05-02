export function utilSlugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function utilSlugToText(slug: string): string {
  return slug.split("-").join(" ");
}

export function utilTextToUrl(text: string): string {
  return text.split(" ").join("-");
}

export function utilRemoveLastSlash(url: string): string {
  return url.replace(/\/$/, "");
}
