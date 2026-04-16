import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import PageLayout from "../components/PageLayout";
import { shopData } from "../data/shopData";
import {
  findGroupBySlug,
  findItemBySlug,
  findMainBySlug,
  getProductsForCategory,
  getProductsForItem,
  getProductsForMainCategory,
} from "../utils/helpers";

export default function CategoryPage({
  menuItems,
  activeMain,
  setActiveMain,
  mobileOpen,
  setMobileOpen,
}) {
  const { mainSlug, groupSlug, itemSlug } = useParams();

  const mainKey = findMainBySlug(mainSlug) || Object.keys(shopData.Shop)[0];
  const groupKey = findGroupBySlug(mainKey, groupSlug);
  const itemKey = findItemBySlug(mainKey, groupKey, itemSlug);
  const activeGroups = shopData.Shop[mainKey];

  useEffect(() => {
    setActiveMain(mainKey);
  }, [mainKey, setActiveMain]);

  let categoryProducts = [];

  if (itemKey) {
    categoryProducts = getProductsForItem(itemKey);
  } else if (groupKey) {
    categoryProducts = getProductsForCategory(groupKey, activeGroups[groupKey]);
  } else {
    categoryProducts = getProductsForMainCategory(mainKey);
  }

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      <Header
        menuItems={menuItems}
        activeMain={activeMain}
        setActiveMain={setActiveMain}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <PageLayout
        activeMain={mainKey}
        activeGroups={activeGroups}
        activeGroup={groupKey}
        activeItem={itemKey}
        categoryProducts={categoryProducts}
      />
    </div>
  );
}
