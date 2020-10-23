import React from 'react'

import styled from 'styled-components'

const CardContainer = 'styled.div'`
border: 1px solid black;
display: flex;
flex-direction: column;
`;

const CardInfo = styled.div`
display: flex;
flex-direction: column;
padding: 16px;

p{
    margin: 8px, 0;
}
`
const AddToCartBtn = style.button`
align-self: center;
margin-top: 4px;
`
export class ProductCard extends React.Component{
render(){
    const product = this.props.product
return 
    <CardContainer>
        <img src ={product.photo}/> 
        <CardInfo>
            <p>{product.name}</p>            
            <p>{product.price},00</p>
            <AddToCartBtn onClick={() =>this.props.onAddProductToCart(product.id)}>
                Adicionar ao Carrinho
                </AddToCartBtn>
        </CardInfo>
    </CardContainer>
}
}