"use client"
import { ReactNode, useRef } from "react";
import { Swiper } from "swiper/react";
import { Navigation, Scrollbar, Pagination, Autoplay } from "swiper/modules";
import cn from "classnames";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import FeatherIcon from "feather-icons-react";

type CarouselPropsType = {
    children: ReactNode,
	className?: string;
	buttonGroupClassName?: string;
	prevActivateId?: string;
	nextActivateId?: string;
	prevButtonClasses?: string;
	nextButtonClasses?: string;
	buttonSize?: "default" | "small";
	paginationVariant?: "default" | "circle";
	paginationPosition?: "center" | "left" | "right";
	boxed?: true | false;
	loop?: boolean;
	centeredSlides?: boolean;
	pagination?: {} | any;
	navigation?: {} | any;
	scrollbar?: {} | any;
	delay?: number;
	slidesPerView?: any;
	spaceBetween?: number;
};

const Carousel: React.FunctionComponent<CarouselPropsType> = ({
	children,
	className = "",
	buttonGroupClassName = "-mt-4 md:-mt-5 xl:-mt-7",
	prevActivateId = "",
	nextActivateId = "",
	prevButtonClasses = "start-0",
	nextButtonClasses = "end-0",
	buttonSize = "default",
	paginationVariant = "default",
	paginationPosition,
	boxed = true,
	loop = true,
	navigation = true,
	pagination = false,
	delay = 0,
	slidesPerView = "auto",
	spaceBetween = 10,
	...props
}) => {
	const prevRef = useRef<HTMLButtonElement>(null);
	const nextRef = useRef<HTMLButtonElement>(null);
	const classPagination = paginationPosition
		? `pagination-${paginationPosition}`
		: "";

    let nextButtonClassName = cn(
        "right-8 w-7 h-7 lg:w-8 lg:h-8 text-sm md:text-base lg:text-lg text-black flex items-center justify-center rounded-full bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none transform shadow-navigation translate-x-1/2",
        {
            "lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm md:text-base lg:text-xl 3xl:text-2xl":
                buttonSize === "small"
        },
        nextButtonClasses
    );

	let prevButtonClassName = cn(
        "left-8 ml-7  w-7 h-7 lg:w-8 lg:h-8 text-sm md:text-base lg:text-lg text-black flex items-center justify-center rounded-full bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none transform shadow-navigation -translate-x-1/2",
        {
            "lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm md:text-base lg:text-xl 3xl:text-2xl":
                buttonSize === "small"
        },
        prevButtonClasses
    );
	// const breakpoints = {
	// 	"1536": {
	// 		slidesPerView: slidesPerView[4],
	// 		spaceBetween: spaceBetween[4],
	// 	},
	// 	"1024": {
	// 		slidesPerView: slidesPerView[3],
	// 		spaceBetween: spaceBetween[3],
	// 	},
	// 	"768": {
	// 		slidesPerView: slidesPerView[2],
	// 		spaceBetween: spaceBetween[2],
	// 	},
	// 	"640": {
	// 		slidesPerView: slidesPerView[1],
	// 		spaceBetween: spaceBetween[1],
	// 	},
	// 	"0": {
	// 		slidesPerView: slidesPerView[0],
	// 		spaceBetween: spaceBetween[0],
	// 	},
	// };
	const autoplay = delay>0 ? {delay: delay} : false;

	return (
		<div
			className={` ${boxed ? 'container' : ''} carouselWrapper relative flex items-center justify-center ${className} ${classPagination} ${
				paginationVariant === "circle" ? "dotsCircle" : ""
			}`}
		>
			<Swiper
				modules={[Navigation, Autoplay, Pagination, Scrollbar]}
				loop={loop}
				autoplay={autoplay}
				// breakpoints={breakpoints}
				slidesPerView="auto"
				spaceBetween={spaceBetween}
				pagination={pagination}
				navigation={
					navigation
						? {
								prevEl: prevActivateId.length
									? `#${prevActivateId}`
									: prevRef.current!, // Assert non-null
								nextEl: nextActivateId.length
									? `#${nextActivateId}`
									: nextRef.current!, // Assert non-null
						  }
						: {}
				}
				{...props}
			>
				{children}
			</Swiper>
			{Boolean(navigation) && (
				<div
					className={`flex items-center w-full absolute top-2/4 z-10 ${buttonGroupClassName}`}
				>
					{prevActivateId.length > 0 ? (
						<button
							className={prevButtonClassName}
							id={prevActivateId}
							aria-label="prev-button"
						>
							<FeatherIcon icon ="chevron-left"/>
						</button>
					) : (
						<button
							ref={prevRef}
							className={prevButtonClassName}
							aria-label="prev-button"
						>
							<FeatherIcon icon ="chevron-left"/>
						</button>
					)}

					{nextActivateId.length > 0 ? (
						<button
							className={nextButtonClassName}
							id={nextActivateId}
							aria-label="next-button"
						>
							<FeatherIcon icon ="chevron-right"/>
						</button>
					) : (
						<button
							ref={nextRef}
							className={nextButtonClassName}
							aria-label="next-button"
						>
							<FeatherIcon icon ="chevron-right"/>
						</button>
					)}
				</div>
			)}
		</div>
	);
};

export default Carousel;


export { SwiperSlide as Slide } from "swiper/react";