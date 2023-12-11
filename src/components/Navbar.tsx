import Link from "next/link";
import React, { useEffect, useState } from "react";
import Data from "@/utils/ProductData";

const tabsData = [
  "HOME",
  "CATEGORIES",
  "MEN'S",
  "WOMEN'S",
  "JEWELRY",
  "COSMETIC",
  "BLOG",
  "HOT OFFERS",
];

const Navbar = () => {
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
    <div className="hidden lg:block ">
      <div className="container">
        <div className="flex w-fit pt-20 gap-10 mx-auto font-medium py-4 left-0 right-0 text-blackish justify-between items-center">
          {/* <Link className="navbar__link relative" href="/">
            HOME
          </Link>
          <Link className="navbar__link relative" href="#">
            CATEGORIES
          </Link>
          <Link className="navbar__link relative" href="#">
            {`MEN'S`}
          </Link>
          <Link className="navbar__link relative" href="#">
            {`WOMEN'S`}
          </Link>
          <Link className="navbar__link relative" href="#">
            JEWELRY
          </Link>
          <Link className="navbar__link relative" href="#">
            COSMETIC
          </Link>
          <Link className="navbar__link relative" href="#">
            BLOG
          </Link>
          <Link className="navbar__link relative" href="#">
            HOT OFFERS
          </Link> */}
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center pt-6 uppercase font-medium text-xl">
            {tabsData.map((text, index) => (
              <li
                key={index}
                className={` ${
                  selectedTab === index && "text-accent"
                } cursor-pointer hover:text-accent transition delay-150`}
                onClick={() => handleTab(index)}
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
