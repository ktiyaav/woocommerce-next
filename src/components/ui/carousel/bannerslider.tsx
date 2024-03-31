import Carousel , { Slide } from "@/components/ui/carousel";
import { SwiperSlide } from "swiper/react";
import Banner from "@components/ui/banner";

interface BannerProps {
	className?: string;
	width?: number;
	height?: number;
    banners: Array<any>;
}

const breakpoints = {
	"0": {
		slidesPerView: 2,
	},
};

const BannerSliderBlock: React.FC<BannerProps> = ({
	className = "mb-12 md:mb-14 xl:mb-16",
	width = 800,
	height = 400,
    banners
}) => {
	return (
		<div className={`${className} mx-auto max-w-[1920px] overflow-hidden`}>
			<div className="-mx-32 sm:-mx-44 lg:-mx-60 xl:-mx-72 2xl:-mx-80">
				<Carousel
                    slidesPerView={5}
					// breakpoints={breakpoints}
					centeredSlides={true}
					loop={true}
					// autoplay={{
					// 	delay: 4000,
					// }}
					pagination={{
						clickable: true,
					}}
					paginationVariant="circle"
					buttonGroupClassName="hidden"
				>
					{banners.map((banner: any) => (
						<Slide
							key={`banner--key${banner.id}`}
							className="px-1.5 md:px-2.5 xl:px-3.5"
						>
							<Banner
								banner={banner}
								width={width}
								height={height}
								href=""
							/>
						</Slide>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default BannerSliderBlock;
