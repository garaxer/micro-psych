import { addToCart, useLoggedIn } from "cart/cart";

interface Props {
  id: number;
}

const AddToCart = ({ id }: Props) => {
  const isLoggedIn = useLoggedIn();

  return (
    <>
      {isLoggedIn && (
        <button
          onClick={() => addToCart(id)}
          className="bg-red-900 text-white py-2 px-5 rounded-md text-sm mt-5"
        >
          Add To Cart
        </button>
      )}
    </>
  );
};

export default AddToCart;
