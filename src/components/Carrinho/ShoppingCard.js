import React from 'react'
import styled from 'react'
import { ShoppingCardItem } from './ShoppingCartItem'
const ShoppingCardContainer = style.div`
border : 1px solid black;
padding: 8px;
`
const CartListContainer = style.div`
diplay: grid;
gap: 8px;

`
export class Carrinho extends React.Component{
    getTotalValue = () => {
        let totalValue = 0
        for (let product of this.props.productsInCard){
            totalValue += product.price * product.quantity   
        }
        return totalValue
    }
render(){
return 
<ShoppingCardContainer>
    <h3>Carrinho:</h3>
    <CartListContainer>
        {this.props.productsInCard.map((product) =>{
            return <ShoppingCartItem 
                     cardItem ={product}
                      onRemovcveProductFromCart ={thi.props.onRemoveProductsFromCart}
                      />
        })}
  
    </CartListContainer>
    <p>Valor Total: R${this.getTotalValue()},00</p>

</ShoppingCardContainer>
}
}