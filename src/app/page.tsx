import { ProductList } from "@/components/ProductList"
import { SaveCarts } from "@/components/SaveCarts"

export async function getAllProducts() {
  const res = await fetch("https://fakestoreapi.com/products")
  return res.json()
}
export default async function HomePage() {
  const products = await getAllProducts()
  return (
    <div>
      <ProductList products={products} />
      <SaveCarts />
    </div>
  )
}
