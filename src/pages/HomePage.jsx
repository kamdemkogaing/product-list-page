import Header from "../components/Header";
import PageLayout from "../components/PageLayout";
import { products } from "../data/products";
import { shopData } from "../data/shopData";

export default function HomePage({
  menuItems,
  activeMain,
  setActiveMain,
  mobileOpen,
  setMobileOpen,
}) {
  const activeGroups = shopData.Shop[activeMain];

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
        activeMain={activeMain}
        activeGroups={activeGroups}
        activeGroup={null}
        activeItem={null}
        categoryProducts={products.slice(0, 9)}
      />
    </div>
  );
}
