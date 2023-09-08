"use client"

import { useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

export const ProductImage = ({ image = "", alt = "" }) => {
  const [loading, setLoading] = useState(true)
  return (
    <div className="relative aspect-[4/4] overflow-hidden rounded-xl">
      <Image
        fill
        alt={alt}
        src={image}
        sizes="(min-width: 60em) 24vw,
        (min-width: 28em) 45vw,
        100vw"
        loading="lazy"
        className={cn(
          "rounded-[inherit] object-cover duration-700 ease-in-out",
          loading ? "blur-xl" : "blur-0"
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  )
}
