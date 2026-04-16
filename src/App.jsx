import { ChevronDown, Phone } from "lucide-react";
import { useMemo, useState } from "react";
import CategoryHero from "./components/CategoryHero";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Sidebar from "./components/Sidebar";
import { products } from "./data/products";
import { shopData } from "./data/shopData";

export default function App() {
  const mainEntries = useMemo(() => Object.entries(shopData.Shop), []);
  const [activeMain, setActiveMain] = useState(mainEntries[0][0]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeGroups = shopData.Shop[activeMain];

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      <Header
        mainEntries={mainEntries}
        activeMain={activeMain}
        setActiveMain={setActiveMain}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <CategoryHero activeMain={activeMain} activeGroups={activeGroups} />

        <section className="mt-8 grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div className="hidden lg:block">
            <Sidebar
              data={shopData}
              activeMain={activeMain}
              setActiveMain={setActiveMain}
            />
          </div>

          <div className="space-y-6">
            <div className="flex flex-col gap-4 rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3 text-sm text-zinc-500">
                <Phone className="h-4 w-4" />
                <span>
                  Moderner Shop-Aufbau mit Hauptnavigation, Hover-Mega-Menü und
                  Sidebar
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100">
                  Filter
                </button>
                <button className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50">
                  Topseller
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
