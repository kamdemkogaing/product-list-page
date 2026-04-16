import { ChevronDown } from "lucide-react";
import { shopData } from "../data/shopData";
import CategoryHero from "./CategoryHero";
import ProductCard from "./ProductCard";
import Sidebar from "./Sidebar";

export default function PageLayout({
  activeMain,
  activeGroups,
  activeGroup,
  activeItem,
  categoryProducts,
}) {
  return (
    <main className="mx-auto max-w-[90rem] px-4 py-8 sm:px-6 lg:px-8">
      <CategoryHero
        activeMain={activeMain}
        activeGroups={activeGroups}
        activeGroup={activeGroup}
        activeItem={activeItem}
      />

      <section className="mt-8 grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
        <div className="hidden lg:block">
          <Sidebar
            data={shopData}
            activeMain={activeMain}
            activeGroup={activeGroup}
            activeItem={activeItem}
          />
        </div>

        <div className="space-y-6">
          <div className="flex flex-col gap-4 rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3 text-sm text-zinc-500">
              {/* <Phone className="h-4 w-4" /> */}
              <span>
                {/* Routing, Kategorie-Unterseiten und feste Navigation ohne
                horizontales Scrollen */}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* <button className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100">
                Filter
              </button> */}

              <button className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50">
                Topseller
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
