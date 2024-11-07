import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Product {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  originalPrice: number;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className=" bg-gray-100  rounded-xl hover:scale-[1.03] transition-all relative overflow-hidden shadow-xl">
      <div className="">
        <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <Image
            src={product.imageUrl}
            alt={product.title}
            className="h-full w-full "
            width={144}
            layout="responsive"
            height={36}
          />
        </div>
      </div>

      <div className="text-center bg-gray-100 p-6">
        <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>
        <h4 className="text-lg text-gray-800 font-bold mt-6">
          ${product.price}
        </h4>

        <Link
          href={`/products/${product.id}`}
          type="button"
          className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 cursor-pointer bg-blue-400 hover:bg-blue-500 text-base text-white font-semibold rounded-xl"
        >
          عرض التفاصيل
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
