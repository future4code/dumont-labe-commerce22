import React from 'react';
import { Filter } from './components/Filter/Filter'
import { Products } from './components/Products/Products'
import { ShoppingCart } from './components/Carrinho/ShoppingCard'

import styled from 'styled-components'

const Main = style.div `
display: grid;
grid-template-colums: 1fr 3fr 1fr;
padding: 16px;
gap: 8px;`;
const products = [
  {
    id: 1,
    name: 'Produto 1',
    Price: 00,
    photo: 'https://picsum.photos/200/200?a=1'

  },
  {
    id: 2,
    name: 'Produto 2',
    Price: 00,
    photo: 'https://picsum.photos/200/200?a=1'
  },
  {
    id: 3,
    name: 'Produto 3',
    Price: 00,
    photo: 'https://picsum.photos/200/200?a=1'
  },
  {
    id: 4,
    name: 'Produto 4',
    Price: 00,
    photo: 'https://picsum.photos/200/200?a=1'
  },
  {
    id: 5,
    name: 'Produto 5',
    Price: 00,
    photo: 'https://picsum.photos/200/200?a=1'
  },
]
class App extends React.Component {
  state = {
    minFilter: '',
    maxFilter: '',
    nameFilter: '',
    productsInCart: [ ]}
    
  
  onChangeMinFilter = (event)=> {
  this.setState({minFilter: event.target.value})
  }

  onChangeMaxFilter = (event)=> {
    this.setState({maxFilter: event.target.value})
    }

    onChangeNameFilter = (event)=> {
      this.setState({nameFilter: event.target.value})
      }
        

    onAddProductToCart = (productId) => {
      const productInCart = this.state.productsInCart.find(product => productId === product.id)
      if(productInCart){
        const newProductsInCart = this.state.productsInCart.map(product => {
          if(productId === product.id) {
            return{
              ...product,
              quantity : product.quantity + 1
            }
          }
          return product
        })
        this.setState({productInCart: newProductInCart})
       } else {
         const productToAdd = products.find(product => productId === product.id)

         const newProductsInCart = [...this.state.productsInCart, {...productToAdd, quantity: 1}]
         this.setState({productsInCart: newProductsInCart})
            }
          }
          onRemoveProductFromCart = (productId) =>{

            const newProductInCart = this.state.productsInCart.map((product) =>{
              if(product.id === productId){
                return{
                  ...product,
                  quantity: product.quantity -1
                }
              }
              return product
            }).filter((product) =>product.quantity > 0)
            this.setState({productInCart: newProductsInCart})
          }
  
  
  render() {
    return (
      <Main>
        <Filter/>
        minFilter ={this.state.minFilter}
        maxFilter ={this.state.maxFilter}
        nameFilter ={this.state.nameFilter}
        onChangeMinFilter = {this.onChangeMinFilter}
        onChangeMaxFilter = {this.onChangeMAXFilter}
        onChangeNameFilter = {this.onChangenAMEFilter}

        <Products products={products}
        minFilter ={this.state.minFilter}
        maxFilter ={this.state.maxFilter}
        nameFilter ={this.state.nameFilter}/>
        <ShoppingCard
        productsInCart={this.state.productsInCart}
        onRemoveProductFromCart={this.onRemoveProductFromCart}
        />
  
      </Main>
    );
    
  }
}
  
  

export default App;
