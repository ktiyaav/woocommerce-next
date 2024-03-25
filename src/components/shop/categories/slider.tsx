import { SwiperSlide } from "swiper/react";
import Carousel , { Slide } from "@/components/ui/carousel";
import Card from "@/components/ui/card";

interface CategoriesProps {
	className?: string;
	spaceBetween?: string;
	type?: "rounded" | "circle";
    data: any;
	width?: string;
	height?: string;
}

const CategoryBlock: React.FC<CategoriesProps> = ({
	className = "mb-10 md:mb-11 lg:mb-12 xl:mb-14 lg:pb-1 xl:pb-0",
	spaceBetween = "0",
	type = "circle",
    data,
	width,
	height,
}) => {


	return (
		<div className={className}>
            <Carousel
				className=""
                // delay={100}
            >
                { data.map((category : any) => (
                    <Slide key={`category--key-${category.id}`} className="w-[800px]">
                        <Card
                            item={category}
                            href=""
                            variant={type}
                            size="medium"
                        />
                    </Slide>
                ))}
            </Carousel>
		</div>
	);
};

export default CategoryBlock;
