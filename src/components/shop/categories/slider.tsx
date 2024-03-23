import { SwiperSlide } from "swiper/react";
import Carousel , { Slide } from "@/components/ui/carousel";
import Card from "@/components/ui/cart";

interface CategoriesProps {
	sectionHeading?: string;
	className?: string;
	type?: "rounded" | "circle";
    data: any
}

const breakpoints = {
	"1720": {
		slidesPerView: 8,
		spaceBetween: 28,
	},
	"1400": {
		slidesPerView: 7,
		spaceBetween: 28,
	},
	"1025": {
		slidesPerView: 6,
		spaceBetween: 20,
	},
	"768": {
		slidesPerView: 5,
		spaceBetween: 20,
	},
	"500": {
		slidesPerView: 4,
		spaceBetween: 12,
	},
	"0": {
		slidesPerView: 3,
		spaceBetween: 12,
	},
};

const breakpointsCircle = {
	"1720": {
		slidesPerView: 8,
		spaceBetween: 48,
	},
	"1400": {
		slidesPerView: 7,
		spaceBetween: 32,
	},
	"1025": {
		slidesPerView: 6,
		spaceBetween: 28,
	},
	"768": {
		slidesPerView: 5,
		spaceBetween: 20,
	},
	"500": {
		slidesPerView: 4,
		spaceBetween: 20,
	},
	"0": {
		slidesPerView: 3,
		spaceBetween: 12,
	},
};

const CategoryBlock: React.FC<CategoriesProps> = ({
	className = "mb-10 md:mb-11 lg:mb-12 xl:mb-14 lg:pb-1 xl:pb-0",
	type = "circle",
    data
}) => {

	return (
		<div className={className}>
            <Carousel
                breakpoints={type === "rounded" ? breakpoints : breakpointsCircle}
                buttonGroupClassName="-mt-4 md:-mt-5 xl:-mt-7"
                autoplay={{
                    delay: 3000,
                }}
            >
                { data.map((category : any) => (
                    <Slide key={`category--key-${category.id}`}>
                        <Card
                            item={category}
                            href=""
                            variant={type}
                            size={type === "rounded" ? "medium" : "small"}
                        />
                    </Slide>
                ))}
            </Carousel>
		</div>
	);
};

export default CategoryBlock;
