import { Skeleton } from "@/components/ui/skeleton"

const ProductsGridSkeleton = () => {
    return <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-5 text-black container dark:text-white justify-stretch pb-8 mb-10">
            <Skeleton className="h-[400px] w-full rounded-md" />
            <Skeleton className="h-[400px] w-full rounded-md" />
            <Skeleton className="h-[400px] w-full rounded-md" />
            <Skeleton className="h-[400px] w-full rounded-md" />
            <Skeleton className="h-[400px] w-full rounded-md" />
            <Skeleton className="h-[400px] w-full rounded-md" />
            <Skeleton className="h-[400px] w-full rounded-md" />
            <Skeleton className="h-[400px] w-full rounded-md" />
        </div>
        
}
export default ProductsGridSkeleton;