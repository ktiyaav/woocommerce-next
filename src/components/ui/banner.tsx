import Image from "next/image";
import type { FC } from "react";
import cn from "classnames";
import Link, { LinkProps } from "next/link";

interface BannerProps {
	banner: any;
    layout?: 'one' | 'two' | 'three' | 'multiple' | 'carousel';
    boxed?: boolean;
    width?: number;
    height?: number;
	variant?: "rounded" | "default";
	effectActive?: boolean;
	className?: string;
	classNameInner?: string;
	href: LinkProps["href"];
}

function getImage(deviceWidth: number, imgObj: any) {
	return deviceWidth < 480 ? imgObj.mobile : imgObj.desktop;
}

const Banner: FC<BannerProps> = ({
    boxed = false,
    layout= 'one',
	banner,
	className,
	variant = "rounded",
	classNameInner,
	href,
    width = 800,
    height = 50,
}) => {
	const { name, image } = banner;
	return (
		<div className={cn("mx-auto my-2", boxed ? `container` : `` , className)}>
			<Link
				href={href}
				className={cn(
                    "h-full group flex justify-center relative overflow-hidden",
                    `max-h-[${height}px]`,
                    variant === 'rounded' ? `rounded-lg` : 'rounded',
                    classNameInner
                )}
			>
				<Image
					src={image.src}
					width={width}
					height={height}
					alt={name}
					quality={100}
					className={`bg-gray-300 object-cover w-full h-[${height}px]`}
				/>
				<div className="absolute top-0 -start-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
			</Link>
		</div>
	);
};

export default Banner;
