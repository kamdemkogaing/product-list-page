import { BadgePercent, ChevronRight } from "lucide-react";
import { cls } from "../utils/cls";

function Sidebar({ data, activeMain, setActiveMain }) {
  const entries = Object.entries(data.Shop);

  return (
    <aside className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">
          Kategorien
        </h2>
        <BadgePercent className="h-4 w-4 text-zinc-400" />
      </div>

      <nav className="space-y-2">
        {entries.map(([mainKey, groups]) => (
          <div
            key={mainKey}
            className="rounded-2xl border border-zinc-100 bg-zinc-50/70 p-2"
          >
            <button
              onClick={() => setActiveMain(mainKey)}
              className={cls(
                "flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-sm font-semibold transition",
                activeMain === mainKey
                  ? "bg-black text-white"
                  : "bg-white text-zinc-800 hover:bg-zinc-100",
              )}
            >
              <span>{mainKey}</span>
              <ChevronRight className="h-4 w-4" />
            </button>

            {activeMain === mainKey && (
              <div className="mt-3 space-y-3 px-2 pb-2">
                {Object.entries(groups).map(([groupName, items]) => (
                  <div key={groupName} className="rounded-2xl bg-white p-3">
                    <h3 className="mb-2 text-sm font-semibold text-zinc-900">
                      {groupName}
                    </h3>
                    <ul className="space-y-2">
                      {items.map((item) => (
                        <li key={item}>
                          <button className="text-left text-sm text-zinc-600 transition hover:text-black">
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
