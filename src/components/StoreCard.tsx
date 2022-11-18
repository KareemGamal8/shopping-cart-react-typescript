import { useShoppingCart } from "../Context/ShoppingCartContext";
import { StoreProps } from "../types/StoreProps";
import FormatCurrency from "./FormatCurrency";

function StoreCard({ item }: StoreProps) {
  const {
    getItemQuantity,
    increaseItemsQuantity,
    decreaseItemsQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(item.id);

  return (
    <div className='card m-3' style={{ width: "30rem" }}>
      <img
        src={item.imgUrl}
        className='card-img-top'
        alt='Product'
        style={{ height: "20rem" }}
      />
      <div className='card-body d-flex justify-content-between align-items-center'>
        <h3 className='card-title'>{item.name}</h3>
        <span className='card-text'>{FormatCurrency(item.price)}</span>
      </div>
      <div className=' m-3'>
        {quantity === 0 ? (
          <button
            className='btn btn-primary mb-5'
            style={{ width: "100%" }}
            onClick={() => increaseItemsQuantity(item.id)}>
            Add To Cart
          </button>
        ) : (
          <>
            <div className=' d-flex justify-content-center align-items-center'>
              <button
                className='btn btn-primary '
                onClick={() => increaseItemsQuantity(item.id)}>
                +
              </button>
              <span className=' me-3 ms-3 fs-4'>{quantity} In Cart</span>
              <button
                className='btn btn-primary'
                onClick={() => decreaseItemsQuantity(item.id)}>
                -
              </button>
            </div>
            <div className=' d-flex justify-content-center mt-2'>
              <button
                type='button'
                className='btn btn-danger'
                onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default StoreCard;
