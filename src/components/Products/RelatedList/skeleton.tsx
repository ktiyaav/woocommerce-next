import { Skeleton } from "@/components/ui/skeleton"

const RelatedListSkeleton = () => {
    return <div className="flex flex-col space-y-3">
            <Skeleton className="h-20 w-full rounded-md" />
            <Skeleton className="h-20 w-full rounded-md" />
            <Skeleton className="h-20 w-full rounded-md" />
            <Skeleton className="h-20 w-full rounded-md" />
        </div>
        
}
export default RelatedListSkeleton;