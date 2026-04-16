const NON_AUTHOR_SEGMENT_PATTERNS = [
  /\bphoto credit\b/i,
  /\buniversity\b/i,
  /\binstitute\b/i,
  /\bdepartment\b/i,
  /\bfaculty\b/i,
  /\blaborator(?:y|ies)\b/i,
  /\blab\b/i,
  /\bschool\b/i,
  /\bcenter\b/i,
  /\bcentre\b/i,
  /\bchair\b/i,
  /\bcollege\b/i,
]

const TAGS_LINE_PATTERN = /(?:^|\n)\*Tags:\s*(.+?)\*\s*(?:\n|$)/i

export const normaliseSiteUrl = (siteUrl = "") =>
  siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl

export const normalisePathname = (pathname = "/") => {
  if (!pathname) {
    return "/"
  }

  if (/^https?:\/\//.test(pathname)) {
    return pathname
  }

  const trimmedPath = pathname.replace(/^\/+|\/+$/g, "")
  const lastSegment = trimmedPath.split("/").pop()

  if (lastSegment?.includes(".")) {
    return `/${trimmedPath}`
  }

  return trimmedPath ? `/${trimmedPath}/` : "/"
}

export const normaliseUrl = (siteUrl, pathname = "/") => {
  if (/^https?:\/\//.test(pathname)) {
    return pathname
  }

  return `${normaliseSiteUrl(siteUrl)}${normalisePathname(pathname)}`
}

export const splitAuthorNames = (authorValue = "") => {
  const trimmedValue = authorValue.trim()

  if (!trimmedValue) {
    return []
  }

  const segments = trimmedValue
    .split(";")
    .flatMap(segment => segment.split(","))
    .map(segment => segment.trim())
    .filter(Boolean)

  const authorNames = segments.filter(
    segment => !NON_AUTHOR_SEGMENT_PATTERNS.some(pattern => pattern.test(segment))
  )

  if (authorNames.length > 0) {
    return Array.from(new Set(authorNames))
  }

  return [trimmedValue.split(",")[0].trim()].filter(Boolean)
}

export const extractTagsFromMarkdown = (markdownBody = "") => {
  const tagMatch = markdownBody.match(TAGS_LINE_PATTERN)

  if (!tagMatch?.[1]) {
    return []
  }

  return Array.from(
    new Set(
      tagMatch[1]
        .split(/\s*(?:·|\||,)\s*/u)
        .map(tag => tag.trim())
        .filter(Boolean)
    )
  )
}
