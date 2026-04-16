export function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "und")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function flattenMenu(data) {
  return Object.entries(data.Shop).map(([mainKey, groups]) => ({
    label: mainKey,
    slug: slugify(mainKey),
    groups: Object.entries(groups).map(([groupName, items]) => ({
      label: groupName,
      slug: slugify(groupName),
      items,
    })),
  }));
}

export function findMainBySlug(data, slug) {
  return Object.keys(data.Shop).find((k) => slugify(k) === slug);
}
