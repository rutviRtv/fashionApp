"use client";
import React, { useEffect, useState } from "react";
import ProductCard, { IProduct } from "./ProductCard";
import Data from "@/utils/ProductData";

const tabsData = ["All", "Women's", "Men's", "Jewelry", "Cosmetics"];

const NewProducts = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [data, setData] = useState([]);

  const shuffleArray = (array: any) => {
    return array
      .map((value: any) => ({ value, sort: Math.random() }))
      .sort((a: any, b: any) => a.sort - b.sort)
      .map(({ value }: any) => value);
  };

  useEffect(() => {
    setData(shuffleArray(Data).slice(0, 15));
  }, []);

  const handleTab = (index: number) => {
    const category = tabsData[index].toLowerCase();
    setSelectedTab(index);

    if (category == "all") {
      setData(shuffleArray(Data).slice(0, 15));
      return;
    }

    const filterData = Data.filter((item) => item.category.includes(category));
    setData(shuffleArray(filterData));
  };
  return (
    <div>
      <div className="container pt-32">
        <div className="text-center">
          <h2 className="font-semibold text-2xl pb-4">New Arrivals</h2>
        </div>

        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center pt-6 uppercase font-medium text-xl">
          {tabsData.map((text, index) => (
            <li
              key={index}
              className={` ${
                //if tab is selected then text color will be "text-accent
                selectedTab === index && "text-accent"
              } cursor-pointer hover:text-accent transition delay-150`}
              onClick={() => handleTab(index)}
            >
              {text}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap justify-center gap-8 pt-8">
          {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-8 justify-center items-center w-full"> */}
          {data.map((item: IProduct) => (
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              sale={item.sale}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
