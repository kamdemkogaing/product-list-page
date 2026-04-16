import { products } from "../data/products";
import { shopData } from "../data/shopData";

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

export function findMainBySlug(mainSlug) {
  return Object.keys(shopData.Shop).find((key) => slugify(key) === mainSlug);
}

export function findGroupBySlug(mainKey, groupSlug) {
  if (!mainKey || !groupSlug) return null;

  return Object.keys(shopData.Shop[mainKey] || {}).find(
    (key) => slugify(key) === groupSlug,
  );
}

export function getProductsForCategory(groupName, items) {
  const normalized = [groupName, ...(items || [])].map((entry) =>
    entry.toLowerCase(),
  );

  const filtered = products.filter((product) =>
    normalized.some(
      (entry) =>
        product.category.toLowerCase().includes(entry) ||
        product.title.toLowerCase().includes(entry),
    ),
  );

  return filtered.length ? filtered : products;
}
