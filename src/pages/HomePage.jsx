import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import { products } from "../data/products";
import { shopData } from "../data/shopData";

export default function HomePage(props) {
  return (
    <div>
      <Header {...props} />

      <div className="grid grid-cols-[250px_1fr] gap-4 p-6">
        <Sidebar data={shopData} activeMain={props.activeMain} />

        <div className="grid grid-cols-3 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
