import Image from "next/image";
import Link, { LinkProps } from "next/link";
interface Props {
	item: any;
	variant?: "rounded" | "circle";
	size?: "small" | "medium";
	href: LinkProps["href"];
}

const Card: React.FC<Props> = ({
	item,
	variant = "circle",
	size = "small",
	href,
}) => {
	const { name, image } = item ?? {};
	const imageSize: any =
		(size === "small" && 180) || (size === "medium" && 198);

	const placeholderImage = `/assets/placeholder/card-${size}.svg`;
	return (
		<Link
			href={href}
			className="group flex justify-center text-center flex-col"
		>
			<div
				className={`relative inline-flex mb-3.5 md:mb-4 lg:mb-5 xl:mb-6 mx-auto ${
					variant === "rounded" ? "rounded-md" : "rounded-full"
				}`}
			>
				<div className={`flex h-[${imageSize}] w-[${imageSize}]`}>
					<Image
						src={image?.src ?? placeholderImage}
						alt={name}
						width={imageSize}
						height={imageSize}
						quality={100}
						className={`object-cover bg-gray-300 ${
							variant === "rounded" ? "rounded-md" : "rounded-full"
						}`}
					/>
				</div>
                <div
                    className={`absolute top left bg-black w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-30 ${
                        variant === "rounded" ? "rounded-md" : "rounded-full"
                    }`}
                />
                <div className="absolute top left h-full w-full flex items-center justify-center">
                    <span className="text-white text-base sm:text-xl lg:text-2xl xl:text-3xl transform opacity-0 scale-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100" />
                </div>
			</div>
            <div className="text-center">{name}</div>
		</Link>
	);
};

export default Card;
