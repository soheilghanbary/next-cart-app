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
        sizes="(min-width: 1520px) 230px, (min-width: 1280px) calc(10.91vw + 66px), (min-width: 1040px) calc(25vw - 50px), (min-width: 780px) calc(33.33vw - 50px), calc(50vw - 50px)"
        loading="lazy"
        className={cn(
          "h-auto rounded-[inherit] object-cover duration-300 ease-in-out group-hover:scale-125",
          loading ? "blur-xl" : "blur-0"
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  )
}
