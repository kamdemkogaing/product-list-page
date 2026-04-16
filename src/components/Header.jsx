import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cls } from "../utils/cls";
import MegaMenu from "./MegaMenu";

export default function Header({
  menuItems,
  activeMain,
  setActiveMain,
  mobileOpen,
  setMobileOpen,
}) {
  const navigate = useNavigate();

  return (
    <header className="border-b border-zinc-800 bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <button onClick={() => navigate("/")}>
          <p className="text-2xl font-black uppercase tracking-tight">Print</p>
          <p className="-mt-1 text-sm uppercase tracking-[0.28em] text-zinc-400">
            Equipment
          </p>
        </button>

        <div className="hidden flex-1 items-center justify-center lg:flex">
          <div className="flex w-full max-w-xl items-center rounded-full border border-zinc-700 bg-zinc-950 px-4 py-3">
            <Search className="mr-3 h-4 w-4 text-zinc-500" />
            <input
              placeholder="Suchbegriff eingeben ..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
            />
          </div>
        </div>

        <div className="hidden items-center gap-5 lg:flex">
          <div className="text-right text-xs text-zinc-400">
            <p className="font-semibold text-white">
              Bestellhotline: +49 7223 28150
            </p>
            <p>Support · DE</p>
          </div>

          <Heart className="h-5 w-5" />
          <User className="h-5 w-5" />
          <ShoppingBag className="h-5 w-5" />
        </div>

        <button
          className="rounded-2xl border border-zinc-700 p-2 lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      <MegaMenu
        menuItems={menuItems}
        activeMain={activeMain}
        setActiveMain={setActiveMain}
      />

      {mobileOpen && (
        <div className="border-t border-zinc-800 px-4 py-4 lg:hidden">
          <div className="mb-4 flex items-center rounded-full border border-zinc-700 bg-zinc-950 px-4 py-3">
            <Search className="mr-3 h-4 w-4 text-zinc-500" />
            <input
              placeholder="Suchbegriff eingeben ..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {menuItems.map((entry) => (
              <button
                key={entry.slug}
                onClick={() => {
                  setActiveMain(entry.label);
                  setMobileOpen(false);
                  navigate(`/kategorie/${entry.slug}`);
                }}
                className={cls(
                  "rounded-2xl border px-4 py-3 text-sm font-medium",
                  activeMain === entry.label
                    ? "border-white bg-white text-black"
                    : "border-zinc-700 text-white",
                )}
              >
                {entry.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
