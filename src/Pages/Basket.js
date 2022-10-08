import { useNavigate } from "react-router-dom";

function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-between gap-2 w-[50vh] h-[40vh] bg-yellow-300">
      <h1 className="flex justify-content-center align-items-center bg-yellow-500 text-4.5 h-9 tw-px-10">
        Cart Items
      </h1>
      <hr></hr>
      <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-4">{item.name}</div>
          <div className="col-4">
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>
          <div className="col-4 text-right">
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="flex flex-col items-end">
            Total Price
            <div className="">{totalPrice.toFixed(2)}</div>
          </div>
          <hr></hr>

          <button
            className="btn d-flex justify-content-center align-items-center btn-warning text-4.5 h-9 tw-px-10"
            onClick={() => navigate("/cartItem")}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Basket;
