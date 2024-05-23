import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@components/ui/sheet"
  
export const Description = ({short,long}:{short:any, long:any}) => {
  return (
    <Sheet>
      <SheetTrigger className="text-sm font-heading font-normal">Read more...</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="font-heading font-normal uppercase border-b-2">Description</SheetTitle>
          <SheetDescription>
            <div
                dangerouslySetInnerHTML={{ __html: short }}
                className="text-base text-left font-heading font-thin pt-4 list-disc"
              />
            <div className="pt-4 mb-2 border-b-2"></div>
            <div
              dangerouslySetInnerHTML={{ __html: long }}
              className="text-base text-left font-heading font-thin pt-4 list-disc"
            />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export const Reviews = () => {

}

export const AdditionalDetails = () => {
  
}
