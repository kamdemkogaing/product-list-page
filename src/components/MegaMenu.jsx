import { useNavigate } from "react-router-dom";
import { cls } from "../utils/cls";

export default function MegaMenu({ menuItems, activeMain, setActiveMain }) {
  const navigate = useNavigate();

  return (
    <div className="border-t border-zinc-800">
      <div className="mx-auto hidden max-w-7xl grid-cols-6 gap-3 px-4 py-4 xl:grid sm:px-6 lg:px-8">
        {menuItems.map((entry) => (
          <div
            key={entry.slug}
            className="group relative min-w-0"
            onMouseEnter={() => setActiveMain(entry.label)}
          >
            <button
              onClick={() => navigate(`/kategorie/${entry.slug}`)}
              className={cls(
                "w-full rounded-full border px-4 py-3 text-center text-sm font-semibold transition",
                activeMain === entry.label
                  ? "border-white bg-white text-black"
                  : "border-zinc-700 bg-transparent text-white hover:border-zinc-500 hover:bg-zinc-900",
              )}
            >
              <span className="block truncate">{entry.label}</span>
            </button>

            <div className="absolute left-0 right-0 top-full h-6 bg-transparent" />

            <div className="pointer-events-none absolute left-0 top-[calc(100%+20px)] z-30 w-[760px] max-w-[76vw] translate-y-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-2xl">
                <div className="mb-5 flex items-center justify-between border-b border-zinc-100 pb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                      Mega Menü
                    </p>
                    <h3 className="text-2xl font-black text-zinc-950">
                      {entry.label}
                    </h3>
                  </div>

                  <button
                    onClick={() => navigate(`/kategorie/${entry.slug}`)}
                    className="rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white"
                  >
                    Alles ansehen
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {entry.groups.map((group) => (
                    <div
                      key={group.slug}
                      className="rounded-2xl bg-zinc-50 p-4"
                    >
                      <button
                        onClick={() =>
                          navigate(`/kategorie/${entry.slug}/${group.slug}`)
                        }
                        className="mb-3 text-left text-sm font-bold text-zinc-900"
                      >
                        {group.label}
                      </button>

                      <ul className="space-y-2">
                        {group.items.map((item) => (
                          <li key={item.slug}>
                            <button
                              onClick={() =>
                                navigate(
                                  `/kategorie/${entry.slug}/${group.slug}/${item.slug}`,
                                )
                              }
                              className="text-left text-sm text-zinc-600 transition hover:text-black"
                            >
                              {item.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
