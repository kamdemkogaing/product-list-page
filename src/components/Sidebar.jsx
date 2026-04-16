import { BadgePercent, ChevronRight, Dot, FolderOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cls } from "../utils/cls";
import { slugify } from "../utils/helpers";

export default function Sidebar({ data, activeMain, activeGroup, activeItem }) {
  const navigate = useNavigate();
  const entries = Object.entries(data.Shop);

  return (
    <aside className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">
          Kategorien
        </h2>
        <BadgePercent className="h-4 w-4 text-zinc-400" />
      </div>

      <nav className="space-y-3">
        {entries.map(([mainKey, groups]) => {
          const isOpen = activeMain === mainKey;

          return (
            <div
              key={mainKey}
              className="rounded-2xl border border-zinc-100 bg-zinc-50/70 p-2"
            >
              <button
                onClick={() => navigate(`/kategorie/${slugify(mainKey)}`)}
                className={cls(
                  "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold transition",
                  isOpen
                    ? "bg-black text-white"
                    : "bg-white text-zinc-800 hover:bg-zinc-100",
                )}
              >
                <span>{mainKey}</span>
                <ChevronRight className="h-4 w-4 shrink-0" />
              </button>

              {isOpen && (
                <div className="mt-3 space-y-3 px-1 pb-2">
                  {Object.entries(groups).map(([groupName, items]) => (
                    <div
                      key={groupName}
                      className={cls(
                        "rounded-2xl px-4 py-4 transition",
                        activeGroup === groupName
                          ? "bg-white ring-1 ring-zinc-200"
                          : "bg-zinc-50",
                      )}
                    >
                      <button
                        onClick={() =>
                          navigate(
                            `/kategorie/${slugify(mainKey)}/${slugify(groupName)}`,
                          )
                        }
                        className={cls(
                          "mb-3 flex items-center gap-2 text-left text-sm font-semibold transition",
                          activeGroup === groupName
                            ? "text-black"
                            : "text-zinc-900 hover:text-black",
                        )}
                      >
                        <FolderOpen
                          className={cls(
                            "h-4 w-4 shrink-0",
                            activeGroup === groupName
                              ? "text-black"
                              : "text-zinc-500",
                          )}
                        />
                        <span>{groupName}</span>
                      </button>

                      <ul className="ml-1 space-y-2">
                        {items.map((item) => {
                          const isActiveItem = activeItem === item;

                          return (
                            <li key={item}>
                              <button
                                onClick={() =>
                                  navigate(
                                    `/kategorie/${slugify(mainKey)}/${slugify(
                                      groupName,
                                    )}/${slugify(item)}`,
                                  )
                                }
                                className={cls(
                                  "flex w-full items-center gap-2 rounded-xl px-2 py-1.5 text-left text-sm transition",
                                  isActiveItem
                                    ? "bg-black text-white"
                                    : "text-zinc-600 hover:bg-zinc-100 hover:text-black",
                                )}
                              >
                                <Dot
                                  className={cls(
                                    "h-5 w-5 shrink-0",
                                    isActiveItem
                                      ? "text-white"
                                      : "text-zinc-400",
                                  )}
                                />
                                <span>{item}</span>
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
