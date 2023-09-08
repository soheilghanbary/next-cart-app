import { PropsWithChildren } from "react"

import { ProductAction } from "./ProductAction"
import { ProductImage } from "./ProductImage"

export function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-2">
      {products.map((product) => (
        <div
          className="space-y-4 rounded-2xl border p-4 shadow"
          key={product.id}
        >
          <ProductImage image={product.image} alt={product.title} />
          <ProductBody>
            <ProductTitle title={product.title} />
            <ProductPrice priec={product.price} />
          </ProductBody>
          <ProductAction {...product} />
        </div>
      ))}
    </div>
  )
}

const ProductTitle = ({ title = "" }) => (
  <h2 className="line-clamp-1 text-base">{title}</h2>
)

const ProductPrice = ({ priec = 0 }) => (
  <p className="text-sm">
    {priec},000 <span>تومان</span>
  </p>
)

const ProductBody = ({ children }: PropsWithChildren) => (
  <div className="space-y-2">{children}</div>
)
