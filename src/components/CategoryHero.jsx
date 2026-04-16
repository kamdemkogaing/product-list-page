function CategoryHero({ activeMain, activeGroups }) {
  return (
    <section className="rounded-[2rem] border border-zinc-200 bg-white px-6 py-7 shadow-sm">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Kategorieübersicht
          </p>
          <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            {activeMain}
          </h1>
        </div>

        <div className="flex flex-wrap gap-3">
          {Object.keys(activeGroups).map((group) => (
            <button
              key={group}
              className="rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              {group}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryHero;
