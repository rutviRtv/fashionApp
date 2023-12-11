import { RxCross1 } from "react-icons/rx";
import AddToFavoriteProduct from "./AddToFavoriteProduct";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";

const Favorite = ({ setShowFavorite }: any) => {
  const favoriteItems = useAppSelector((state) => state.favoritesReducer);

  return (
    <div className="bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-50 overflow-y-scroll">
      <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6">
        <RxCross1
          className="absolute right-0 top-8 m-6 text-[24px] cursor-pointer bg-red-500 text-white"
          onClick={() => {
            setShowFavorite(false);
          }}
        />
        <h3 className="pt-6 text-lg left-0 top-0 text-[24px] cursor-pointer">
          Your FavoriteList
        </h3>

        <div className="mt-6 space-y-2">
          {favoriteItems?.map((item: any) => (
            <AddToFavoriteProduct
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>

        <div className="flex justify-between items-center font-medium text-xl py-4">
          {/* <p>Total:</p>
          <p>${getTotal()}.00</p> */}
        </div>

        {/* <button className="bg-black text-white text-center w-full rounded-3x1 py-2 hover:bg-accent mb-4 mt-4">
          View Cart
        </button> */}

      
          <button className="bg-accent text-white text-center w-full rounded-3x1 py-2 hover:bg-black" onClick={() => {
            setShowFavorite(false);
          }}>
            CheckOut
          </button>
       
      </div>
    </div>
  );
};

export default Favorite;