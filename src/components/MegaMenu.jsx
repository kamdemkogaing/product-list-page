import { cls } from "../utils/cls";

function MegaMenu({ mainEntries, activeMain, setActiveMain }) {
  return (
    <div className="border-t border-zinc-800">
      <div className="mx-auto hidden max-w-7xl items-center gap-3 overflow-x-auto px-4 py-4 lg:flex sm:px-6 lg:px-8">
        {mainEntries.map(([key, groups]) => (
          <div
            key={key}
            className="group relative"
            onMouseEnter={() => setActiveMain(key)}
          >
            <button
              className={cls(
                "whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-semibold transition",
                activeMain === key
                  ? "border-white bg-white text-black"
                  : "border-zinc-700 bg-transparent text-white hover:border-zinc-500 hover:bg-zinc-900",
              )}
            >
              {key}
            </button>

            <div className="pointer-events-none absolute left-0 top-[calc(100%+14px)] z-30 w-[760px] translate-y-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-2xl">
                <div className="mb-5 flex items-center justify-between border-b border-zinc-100 pb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                      Mega Menü
                    </p>
                    <h3 className="text-2xl font-black text-zinc-950">{key}</h3>
                  </div>
                  <button className="rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    Alles ansehen
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(groups).map(([groupName, items]) => (
                    <div key={groupName} className="rounded-2xl bg-zinc-50 p-4">
                      <h4 className="mb-3 text-sm font-bold text-zinc-900">
                        {groupName}
                      </h4>
                      <ul className="space-y-2">
                        {items.map((item) => (
                          <li key={item}>
                            <a
                              href="#"
                              className="text-sm text-zinc-600 transition hover:text-black"
                            >
                              {item}
                            </a>
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

export default MegaMenu;
