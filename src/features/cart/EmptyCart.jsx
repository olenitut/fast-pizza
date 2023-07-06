import LinkButton from "../../ui/LinkButton";
function EmptyCart() {
  return (
    <div className="py-3 px-4 flex flex-col gap-6">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
