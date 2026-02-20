import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  {productName:'Nintengo Switch 2', quantity: 2},
  {productName:'Pro Controller', quantity: 4},
  {productName:'Super Smash Bros',  quantity: 1},
  {productName:'Mario Kart World', quantity: 1}
]

export function FirstStepsApp() {

  return (
    <>
      <h1>Carrito de Compras</h1>
      {
        itemsInCart.map(({productName, quantity}, i) => (
          <ItemCounter key={i} name={productName} quantity={quantity}/>
        ))
      }

      {/* <ItemCounter name="Nintendo Switch 2" quantity={1} />
      <ItemCounter name="Pro Controller" quantity={2} />
      <ItemCounter name="Super Smash" quantity={3} /> */}
    </>
  );
}
