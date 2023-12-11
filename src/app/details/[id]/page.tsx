"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Data from "@/utils/ProductData";
import Link from "next/link";
import Image from "next/image";
import { AiFillStar, AiOutlineStar, AiOutlineHeart} from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdCompareArrows } from "react-icons/md";
import { BiAddToQueue } from "react-icons/bi";
import { addToFavorite } from "@/redux/features/favoritesSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { IProduct } from "@/components/ProductCard";



const DetailPage = ({ id, img, name, price, sale }: IProduct) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const params = useParams();
  const [productData, setProductData] = useState<any>();
  
  useEffect(() => {
    const id = params.id;
    const getProductData = Data.filter((item) => item.id.toString() === id)[0];
    console.log(getProductData);
    setProductData(getProductData);
  }, [params.id]);

  

  const addProductToFavorite  = (e: React.FormEvent) => {
    e.stopPropagation();
    
    const payload = {
      id,
      name: productData.name,
      img: productData.img,
      price: productData.price,
      quantity: 1,
    };
    dispatch(addToFavorite(payload));
    console.warn("payload",payload);
  };

  return (
    <div className="pt-8">
      <div className="bg-gray-100 py-4">
        <div className="container flex gap-4 items-center text-gray-500">
          <Link href="/" className="cursor-pointer hover:text-accent">
            Home
          </Link>

          <div className="w-[30px] h-[2px] bg-gray-400" />
          <p className="capitalize">{productData?.category[0]}</p>
          <div className="w-[30px] h-[2px] bg-gray-400" />
          <p>{productData?.name}</p>
        </div>
      </div>

      <div className="container pt-8 pb-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <Image
              className="w-full h-full"
              src={productData?.img}
              width={800}
              height={400}
              alt={productData?.name}
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center text-accent">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <p className="text-gray-400 text-[14px] ml-2 hover:text-accent cursor-pointer">
                (8 customer review)
              </p>
            </div>

            <div className="text-[#161616] space-y-6">
              <h2 className="text-3xl font-semibold">{productData?.name}</h2>
              <p className="text-xl">${productData?.price}.00</p>
              <p className="text-gray-500 text-[14px]">
                A product description for a fashion app typically serves to
                inform users about the features, benefits, and details of a
                particular fashion item available on the platform. It should be
                concise, engaging, and provide enough information to help users
                make informed decisions.
              </p>
              <p className="text-gray-500 text-[14px]"> 20 in stock</p>
              <button className="uppercase bg-accent py-4 px-8 rounded-lg text-white flex gap-2 item-center hover:bg-black">
                <HiOutlineShoppingBag className="text-[24px]" />
                Add To Cart
              </button>
              <div className="flex gap-4 items-center uppercase py-4 text-[14px]">
                <div className="flex gap-1 items-center cursor-pointer" onClick={addProductToFavorite}>
                  <AiOutlineHeart  />
                  Add To Wish List
                </div>
               

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
