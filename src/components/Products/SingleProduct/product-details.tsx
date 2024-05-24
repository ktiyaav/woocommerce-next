import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@components/ui/sheet"
import { useEffect, useState } from "react"
import './product-details.css';
  
export const Description = ({title, titleClass, short, long, attributes}:{title:string, titleClass:string, short:any, long:any, attributes: any}) => {
  return (
    <Sheet>
      <SheetTrigger className={`text-sm font-heading font-normal ${titleClass}`}>{title}</SheetTrigger>
      <SheetContent className="xl:w-[1000px] xl:max-w-none sm:w-[400px] sm:max-w-[540px]">
        <SheetHeader>
          <SheetTitle className="font-heading font-normal uppercase border-b-2">Description</SheetTitle>
          <SheetDescription className="overflow-y-scroll max-h-[90vh] text-black">
            <div
                dangerouslySetInnerHTML={{ __html: short }}
                className="text-base text-left font-heading font-thin pt-4 list-disc"
              />
            <div className="pt-4 mb-2 border-b-2"></div>
            <div
              dangerouslySetInnerHTML={{ __html: long }}
              className="text-base text-left font-heading font-thin pt-4 list-disc"
            />
            <div className="pt-4 mb-2 border-b-2"></div>

            <div className="flex flex-col pt-6">
            {attributes.map((item:any,idx:number) => (
              
              <div className="flex">
              <th className=" w-1/3 font-heading bg-slate-100 p-2">{item.name} : </th>
              <td className="w-2/3 font-body p-2 bg-slate-50">{Array.isArray(item.options) ? item.options.join(',') : item.options}</td>
              </div>
              
            ))}
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export const Reviews = ({id, allowed}: {id: number, allowed: boolean}) => {
    const [sheetOpen, setSheetOpen] = useState<boolean>(false);
    useEffect(() => {
      if (sheetOpen) {
        console.log('Sheet opened, call wooapi and fetch reviews');
      }
    },[sheetOpen])
    return <Sheet onOpenChange={() => setSheetOpen(!sheetOpen)}>
      <SheetTrigger className="text-xs font-heading uppercase">Reviews</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="font-heading font-normal uppercase border-b-2">Reviews</SheetTitle>
          <SheetDescription>
            Reviews
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
}

// Can be used to display additional details or any other thing. Not using now in our layout
export const SizeGuide = () => {
  return <Sheet>
    <SheetTrigger className="text-xs font-heading uppercase">Size Guide</SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="font-heading font-normal uppercase border-b-2">Size Guide</SheetTitle>
        <SheetDescription>
          Size Guide
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
}
