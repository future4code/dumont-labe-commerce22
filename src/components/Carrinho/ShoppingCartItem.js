import React from 'react'
import style from 'styled-components';

const ItemContainer = styled.div`
display: grid;
grid-auto-flow: column;
gap: 8px;
align-items: center;
p{
    margin: 0;
}
`

export class ShopCartItem extends React.Component{
render(){
return 
<ItemContainer>
    <p>{this.props.cartItem.quantity}x</p>
    <p>{this.props.cartItem.name}</p>
    <button onClick = {() => this.props.onRemoveProductFromCart(this.props.cartItem.id)}>Remover</button>

</ItemContainer>

}
}