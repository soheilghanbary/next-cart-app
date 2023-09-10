import Image from "next/image"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

import { ProductAction } from "./ProductAction"

export const SingleProduct = (product: Product) => {
  return (
    <div className="mx-auto grid max-w-screen-lg gap-12 rounded-lg border bg-card p-6 shadow-sm md:grid-cols-3 lg:grid-cols-4">
      <div className="md:col-span-1 lg:col-span-1">
        <div className="relative aspect-[4/4] overflow-hidden rounded-md">
          <Image
            fill
            alt={product.title}
            src={product.image}
            sizes="(min-width: 1520px) 230px, (min-width: 1280px) calc(10.91vw + 66px), (min-width: 1040px) calc(25vw - 50px), (min-width: 780px) calc(33.33vw - 50px), calc(50vw - 50px)"
            loading="lazy"
            className={cn(
              "h-auto rounded-[inherit] duration-300 ease-in-out group-hover:scale-105"
            )}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:col-span-2 md:grid-cols-2 lg:col-span-3">
        <h1 className="text-2xl font-bold leading-8 text-foreground">
          {product.title}
        </h1>
        <p className="text-primary">{product.price} ریال</p>
        <Badge className="w-fit" variant={"secondary"}>
          {product.category}
        </Badge>
        <div className="space-y-2">
          <h2>توضیحات</h2>
          <p className="text-left text-sm leading-6 text-muted-foreground">
            {product.description}
          </p>
        </div>
        <ProductAction {...product} />
      </div>
    </div>
  )
}
