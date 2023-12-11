import { removeFromFavorite } from "@/redux/features/favoritesSlice";
import { useAppDispatch } from "@/redux/hooks";
import { RxCross1 } from "react-icons/rx";

interface propsType {
  id: number;
  img: string;
  name: string;
  price: number;
  quantity: number;
}
const AddToFavoriteProduct: React.FC<propsType> = ({
  id,
  img,
  name,
  price,
  quantity,
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-center items-center">
      <div className="flex w-[330px] gap-4">
        <img className="h-[80px] w-[80px]" src={img} alt={name} />
        <div className="space-y-2">
          <h3 className="font-medium">{name}</h3>
          <p className="text-gray-600 text-[14px]">
           ${price}.00
          </p>
        </div>
      </div>
      <RxCross1
        className="cursor-pointer"
        onClick={() => dispatch(removeFromFavorite(id))}
      />
    </div>
  );
};

export default AddToFavoriteProduct;
