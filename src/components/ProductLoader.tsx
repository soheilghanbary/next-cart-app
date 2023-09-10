import { Skeleton } from "./ui/skeleton"

export const ProductLoader = () => {
  const skeletonArray = Array.from({ length: 20 })
  return (
    <section className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {skeletonArray.map((_, index) => (
        <div className="space-y-4 rounded-lg border bg-card p-4 shadow-sm">
          <Skeleton className="h-32 w-full rounded-md" key={index} />
          <Skeleton className="h-6 w-1/2 rounded-md" key={index} />
          <Skeleton className="h-9 w-full rounded-md" key={index} />
        </div>
      ))}
    </section>
  )
}
