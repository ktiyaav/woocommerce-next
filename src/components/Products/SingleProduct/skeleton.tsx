import { Skeleton } from "@/components/ui/skeleton"

const SingleProductSkeleton = () => {
    return <div className="flex space-y-3 flex-col md:flex-row">
            <div className="flex space-y-3 md:pr-6"><Skeleton className="h-[600px] w-full md:w-[400px] rounded-md" /></div>
            <div className="flex flex-col space-y-3">
                <Skeleton className="h-[10px] w-full md:w-[400px] rounded-md" />
                <Skeleton className="h-[20px] w-full rounded-md" />
                <Skeleton className="h-[50px] w-[100px] rounded-md" />
            </div>
            <div className="flex flex-col mt-6">
                <Skeleton className="h-[20px] w-full rounded-md" />
            </div>
        </div>
        
}
export default SingleProductSkeleton;