import ViewDetailsButton from "@/app/components/ViewDetailsButton";
import { getProducts } from "../../data";

export default async function Home() {
  const products = await getProducts();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            Nossos Produtos
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore nossa seleção premium de produtos com os melhores preços
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-blue-500/20 hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-800 hover:border-blue-500/50 hover:-translate-y-1"
            >
              <div className="p-6">
                {/* Product Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>

                {/* Product Name */}
                <h2 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
                  {product.name}
                </h2>

                {/* Product Price */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-800">
                  <span className="text-2xl font-bold text-blue-400">
                    R$ {parseFloat(product.price).toFixed(2)}
                  </span>
                  <ViewDetailsButton productId={product.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
