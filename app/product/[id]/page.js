import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { mongooseConnect } from "@/lib/mongodb";
import { Product } from "@/models/Product";
import { Category } from "@/models/Category";

const Page = async ({ params }) => {
  await mongooseConnect();
  const { id } = params;
  const product = await Product.findById(id);
  const catId = product.category;
  product.category = await Category.findById(catId);
  return (
    <>
      <div>
        <Breadcrumbs id={params.id} type={"product"} />
        <p>{product.title}</p>
      </div>
    </>
  );
};

export default Page;
