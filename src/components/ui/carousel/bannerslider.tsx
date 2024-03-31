import Carousel , { Slide } from "@/components/ui/carousel";
import { SwiperSlide } from "swiper/react";
import Banner from "@components/ui/banner";

interface BannerProps {
	className?: string;
	width?: number;
	height?: number;
	boxed?: boolean;
    banners: Array<any>;
}

const BannerSliderBlock: React.FC<BannerProps> = ({
	className = "mb-10 md:mb-11 lg:mb-12 xl:mb-14 lg:pb-1 xl:pb-0",
	boxed = false,
	width = 800,
	height = 400,
    banners
}) => {
	return (
		<div className={`${className}`}>
				<Carousel
					boxed={boxed}
					centeredSlides={false}
					loop={true}
					delay={4000}
					pagination={true}
					buttonGroupClassName="hidden"
				>
					{banners.map((banner: any) => (
						<Slide
							key={`banner--key${banner.id}`}
							className="w-full"
						>
							<Banner
								banner={banner}
								width={width}
								height={height}
								href=""
								boxed={false}
							/>
						</Slide>
					))}
				</Carousel>
		</div>
	);
};

export default BannerSliderBlock;
