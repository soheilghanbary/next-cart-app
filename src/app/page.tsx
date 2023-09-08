import { Suspense } from "react"

import { ProductList } from "@/components/ProductList"

export default async function HomePage() {
  return (
    <Suspense fallback={<p>loading product list</p>}>
      <ProductList />
    </Suspense>
  )
}
