import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { Skeleton } from "./skeleton";
interface Props {
	item: any;
	variant?: "rounded" | "circle";
	size?: number;
	href: LinkProps["href"];
}

const Card: React.FC<Props> = ({
	item,
	variant = "circle",
	size = 150,
	href,
}) => {
	const { name, image } = item ?? {};
	return (
		<Link
			href={href}
			className={`group flex justify-center text-center flex-col  h-[${size}] w-[${size}]`}
		>
			<div
				className={`relative inline-flex mb-2.5 md:mb-2 lg:mb-3 xl:mb-3 mx-auto ${
					variant === "rounded" ? "rounded-md" : "rounded-full"
				}`}
			>	
				{image?.src ? 
				<>
				<div className={`flex w-full `}>
					<Image
						src={image?.src ?? ''}
						alt={name}
						width={size}
						height={size}
						quality={100}
						className={`object-cover bg-gray-300 w-full  h-[${size}px] w-[${size}px] ${
							variant === "rounded" ? "rounded-md" : "rounded-full"
						}`}
					/>
				</div>
				</> 
				:
				<>
				<div className="flex items-center space-x-4">
				<Skeleton className={`h-[192px] w-[192px] rounded-md`} />
				</div>
				</>}
                <div
                    className={`absolute top left bg-black w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-30 ${
                        variant === "rounded" ? "rounded-md" : "rounded-full"
                    }`}
                />
                <div className="absolute top left h-full w-full flex items-center justify-center">
                    <span className="text-white text-base sm:text-xl lg:text-2xl xl:text-3xl transform opacity-0 scale-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100" />
                </div>
			</div>
            <div className="text-center text-black dark:text-white text-xs uppercase mb-2">{name}</div>
		</Link>
	);
};

export default Card;
