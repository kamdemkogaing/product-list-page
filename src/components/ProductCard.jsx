export default function ProductCard({ product }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-[4/3] overflow-hidden bg-zinc-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <span className="inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold tracking-wide text-zinc-600">
            {product.category}
          </span>

          <h3 className="line-clamp-2 min-h-[3.5rem] text-sm font-semibold leading-6 text-zinc-900 sm:text-base">
            {product.title}
          </h3>

          <p className="text-xs tracking-wide text-zinc-500">
            ART-NR: {product.sku}
          </p>
        </div>

        <div className="flex items-end justify-between gap-4">
          <p className="text-lg font-bold text-zinc-950">{product.price}</p>

          <button className="rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-zinc-800">
            Variante wählen
          </button>
        </div>
      </div>
    </div>
  );
}
