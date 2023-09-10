import { SingleProduct } from "@/components/SingleProduct"

type PageProps = {
  params: {
    id: number
  }
}

export async function getProduct(id: number) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  const data = await res.json()
  return data as Product
}

export default async function ProductPage({ params }: PageProps) {
  const product = await getProduct(params.id)
  return <SingleProduct {...product} />
}
