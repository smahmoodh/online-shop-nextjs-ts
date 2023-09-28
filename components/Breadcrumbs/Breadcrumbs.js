import React from "react";
import { mongooseConnect } from "@/lib/mongodb";
import { Product } from "@/models/Product";
import { Category } from "@/models/Category";
import Link from "next/link";

const Breadcrumbs = async ({ id, type }) => {
	await mongooseConnect();
	let path = [];
	path.push({ title: "خانه", url: "/" });

	const categories = await Category.find();



	// Define a function that takes the categories array and the current category id as parameters
	const findParent = async (categories, catId) => {
		const path = []; // Initialize an empty array to store the path
		const helper = (currentId) => {
			if (!currentId) {
				return path;
			}
			const currentCategory = categories.find(
				(category) => category._id.toString() === currentId.toString(),
			);
			if (currentCategory) {
				path.push({ title: currentCategory.name, url: '/category/' + currentCategory.path });
				return helper(currentCategory.parent);
			}

			return [];
		};
		helper(catId);
		return path.reverse();
	};

	if (type === "product") {
		const product = await Product.findById(id);
		const parentPath = await findParent(categories, product.category);
		path = [...path, ...parentPath];
		path.push({ title: product.title, url: product._id.toString() });
	} else if (type === "category") {
		// const category = await Category.findById(id);
		const category = await categories.find(category => category.path === id);
		console.log(category);
		if (category.parent) {
			const parentPath = await findParent(categories, category._id);
			path = [...path, ...parentPath];
		} else {
			path.push({ title: category.name, url: '/category/' + category.path });
		}
	} else if (type === "cart") {
		path.push({ title: 'سبد خرید', url: '/cart' });
	}

	return (
		<>
			<div className="breadcrumbs clearfix p-0 pl-6 md:pl-0 mb-4 md:mb-5 text-xs text-right flex items-center gap-y-0 gap-x-2 leading-[18px] whitespace-nowrap overflow-x-auto md:overflow-hidden">
				{path.length > 0 &&
					path.map((item, index) =>
						path.length > index + 1 ? (
							<>
								<Link href={item.url}>{item.title}</Link>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-3 h-3 last:hidden -mt-0.5"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15.75 19.5L8.25 12l7.5-7.5"
									/>
								</svg>
							</>
						) : (
							<>
								<span>{item.title}</span>
							</>
						),
					)}
			</div>
		</>
	);
};

export default Breadcrumbs;
