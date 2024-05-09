import Carousel , { Slide } from "@/components/ui/carousel";
import { SwiperSlide } from "swiper/react";
import Banner from "@components/ui/banner";

import Image from "next/image";
import cn from "classnames";
import Link, { LinkProps } from "next/link";

interface BannerProps {
	className?: string;
	width?: number;
	height?: number;
	boxed?: boolean;
    banners: Array<any>;
	variant?: string;
}

const BannerSliderBlock: React.FC<BannerProps> = ({
	className = "mb-10 md:mb-11 lg:mb-12 xl:mb-14 lg:pb-1 xl:pb-0",
	boxed = false,
	width = 800,
	height = 400,
    banners,
	variant = 'rounded',
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
							<div className={cn(
								"mx-auto my-2", 
								boxed ? `container` : '' , 
								className, 
							)}>
							<Link 
								href=""
								className={cn(
									"h-full group flex justify-center relative overflow-hidden",
									`max-h-[${height}px]`,
									variant === 'rounded' ? `rounded-lg` : 'rounded',
								)}
							>
								<Image
									src={banner.image?.src}
									width={width}
									height={height}
									alt={banner.name}
									quality={100}
									className={`bg-gray-300 object-cover w-full h-[${height}px]`}
								/>
								<div className="absolute top-0 -start-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
							</Link>
							</div>
						</Slide>
						
					))}
				</Carousel>
		</div>
	);
};

export default BannerSliderBlock;
