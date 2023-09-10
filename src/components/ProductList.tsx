import { PropsWithChildren, Suspense } from "react"
import Link from "next/link"

import { ProductImage } from "./ProductImage"
import { ProductLoader } from "./ProductLoader"

export async function getAllProducts() {
  const res = await fetch("https://fakestoreapi.com/products")
  return res.json()
}

const ProductTitle = ({ title = "" }) => (
  <h2 className="line-clamp-1 text-base">{title}</h2>
)

const ProductPrice = ({ priec = 0 }) => (
  <p className="text-sm text-primary">
    {priec}
    <span> ریال</span>
  </p>
)

const ProductBody = ({ children }: PropsWithChildren) => (
  <div className="space-y-2">{children}</div>
)

export async function Products() {
  const products = await getAllProducts()
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.map((product: Product) => (
        <Link
          href={`/products/${product.id}`}
          className="group space-y-4 rounded-lg border bg-card p-4 shadow-sm ring-primary duration-300 hover:ring-2"
          key={product.id}
        >
          <ProductImage image={product.image} alt={product.title} />
          <ProductBody>
            <ProductTitle title={product.title} />
            <ProductPrice priec={product.price} />
          </ProductBody>
        </Link>
      ))}
    </div>
  )
}

export const ProductList = () => (
  <Suspense fallback={<ProductLoader />}>
    <Products />
  </Suspense>
)
