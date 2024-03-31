import { SwiperSlide } from "swiper/react";
import Carousel , { Slide } from "@/components/ui/carousel";
import Card from "@/components/ui/card";
import {cn} from '@/utils/cn';
interface CategoriesProps {
	className?: string;
	spaceBetween?: string;
	type?: "rounded" | "circle";
    data: any;
	width?: number;
	height?: number;
}

const CategorySlider: React.FC<CategoriesProps> = ({
	className = "mb-10 md:mb-11 lg:mb-12 xl:mb-14 lg:pb-1 xl:pb-0",
	spaceBetween = "0",
	type = "circle",
    data,
	width,
	height,
}) => {


	return (
		<div className={ cn( 'multi-slide' , className) }>
            <Carousel
                boxed={true}
				className=""
                centeredSlides={false}
                loop={true}
                delay={4000}
                pagination={false}
            >
                { data.map((category : any) => (
                    <Slide key={`category--key-${category.id}`} className="w-auto multi-slide">
                        <Card
                            item={category}
                            href=""
                            variant={type}
                            width={width}
                            height={height}
                        />
                    </Slide>
                ))}
            </Carousel>
		</div>
	);
};

export default CategorySlider;
