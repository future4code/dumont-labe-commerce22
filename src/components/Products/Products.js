import React from 'react'
import styled from 'styled-components'
import { produtoCard } from './ProductsCard'

const Products = styled.div `
border: 1px solid black;
`
const ProductsHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
pdding: 0 16px;
`
const ProductsGrid = styled.div`
display: grid;
grid-template-columns: repeat (3, 1fr) ;
gap: 16px;
padding: 16px;
`
export class Produtos extends React.Component{
    state = {
        sort: 'CRESCENTE'
    }
    getFilteredAndOrdereList = () =>{
        return this.props.products
        .filter((product) => prooduct.price < this.props.maxFilter)
        .filter((product) => prooduct.price > this.props.minFilter)
        .filter((product) => prooduct.nme . includes( this.props.nameFilter))
        .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.price - b.price : b.price - a.price)
    }

    onChangeSort = (event) =>{
        this.setState({sort: event.target.value})
    }
render(){
    const filteredAndOrdereList = this.getFilteredAndOrdereList()
return 
    <Products>
        <ProductsHeader>
            <p>Quantiade de produtos: {filteredAndOrdereLists.lenght}</p>
            <label>Ordem:
                <select value={this.state.sort} onChange={this.onChangeSort}>
                    <option value = {'CRESCENTE'}>Crescente</option>
                    <option value = {'DECRESCENTE'}>Decrescente</option>
                </select>
            </label>
        </ProductsHeader>
        <ProductsGrid>
            
            {filteredAndOrdereLists.map((products) => {
                return <ProductsCard 
                product ={product} 
                onAddProductToCart={this.props.onAddProductToCart}/>
            })}
           
        </ProductsGrid>
    </Products>
}
}