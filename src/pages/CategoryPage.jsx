import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import PageLayout from "../components/PageLayout";
import { products } from "../data/products";
import { shopData } from "../data/shopData";
import {
  findGroupBySlug,
  findMainBySlug,
  getProductsForCategory,
} from "../utils/helpers";

export default function CategoryPage({
  menuItems,
  activeMain,
  setActiveMain,
  mobileOpen,
  setMobileOpen,
}) {
  const { mainSlug, groupSlug } = useParams();

  const mainKey = findMainBySlug(mainSlug) || Object.keys(shopData.Shop)[0];
  const groupKey = findGroupBySlug(mainKey, groupSlug);
  const activeGroups = shopData.Shop[mainKey];

  useEffect(() => {
    setActiveMain(mainKey);
  }, [mainKey, setActiveMain]);

  const categoryProducts = groupKey
    ? getProductsForCategory(groupKey, activeGroups[groupKey])
    : products;

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
        categoryProducts={categoryProducts}
      />
    </div>
  );
}
