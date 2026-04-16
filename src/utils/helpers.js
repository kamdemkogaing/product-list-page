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
      items: items.map((item) => ({
        label: item,
        slug: slugify(item),
      })),
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

export function findItemBySlug(mainKey, groupKey, itemSlug) {
  if (!mainKey || !groupKey || !itemSlug) return null;

  const items = shopData.Shop[mainKey]?.[groupKey] || [];
  return items.find((item) => slugify(item) === itemSlug) || null;
}

export function getProductsForCategory(groupName, items) {
  const names = [groupName, ...(items || [])];

  const filtered = products.filter((product) =>
    names.some((name) => product.category.toLowerCase() === name.toLowerCase()),
  );

  return filtered.length ? filtered : [];
}

export function getProductsForItem(itemName) {
  if (!itemName) return [];

  const filtered = products.filter(
    (product) => product.category.toLowerCase() === itemName.toLowerCase(),
  );

  return filtered.length ? filtered : [];
}

export function getProductsForMainCategory(mainKey) {
  if (!mainKey) return [];

  const groups = shopData.Shop[mainKey] || {};
  const allItems = Object.values(groups).flat();

  const filtered = products.filter((product) =>
    allItems.some(
      (item) => product.category.toLowerCase() === item.toLowerCase(),
    ),
  );

  return filtered.length ? filtered : [];
}
