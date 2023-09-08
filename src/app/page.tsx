import { Suspense } from "react"

import { ProductList } from "@/components/ProductList"
import { SaveCarts } from "@/components/SaveCarts"

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<p>loading product list</p>}>
        <ProductList />
      </Suspense>
      <SaveCarts />
    </>
  )
}
