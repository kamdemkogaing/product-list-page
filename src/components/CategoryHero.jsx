import { Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { cls } from "../utils/cls";
import { slugify } from "../utils/helpers";

export default function CategoryHero({
  activeMain,
  activeGroups,
  activeGroup,
}) {
  const navigate = useNavigate();

  return (
    <section className="rounded-[2rem] border border-zinc-200 bg-white px-6 py-7 shadow-sm">
      <div className="mb-4 flex items-center gap-2 text-sm text-zinc-500">
        <Home className="h-4 w-4" />
        <Link to="/" className="hover:text-black">
          Start
        </Link>
        <span>/</span>
        <span>{activeMain}</span>

        {activeGroup && (
          <>
            <span>/</span>
            <span>{activeGroup}</span>
          </>
        )}
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Kategorieübersicht
          </p>

          <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            {activeGroup || activeMain}
          </h1>
        </div>

        <div className="flex flex-wrap gap-3">
          {Object.keys(activeGroups).map((group) => (
            <button
              key={group}
              onClick={() =>
                navigate(`/kategorie/${slugify(activeMain)}/${slugify(group)}`)
              }
              className={cls(
                "rounded-full px-5 py-2.5 text-sm font-semibold transition",
                activeGroup === group
                  ? "bg-zinc-800 text-white"
                  : "bg-black text-white hover:bg-zinc-800",
              )}
            >
              {group}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
