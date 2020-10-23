import React from 'react'
import styled from 'styled-components'
const ContainerFilter = styled.div`
border: 1px solid black
padding: 8px;
`
const InputContainers = styled.label`
display: flex;
flex-direction: column;
align-item: flex-start;
margin-bottom: 8px;
`

export class Filtro extends React.Component{
render(){
return 
        <ContainerFilter>
            <h3>Filtros</h3>
            
                <InputContainers>
                    Valor Mínimo:
                    <input 
                    type= 'number'
                    value={this.props.minFilter}
                    onChange = {this.props.onChangeMinFilter}/> 
                </InputContainers>
            
            
                <InputContainers>
                    Valor Máximo:
                    <input 
                    type= 'number'
                    value={this.props.maxFilter}
                    onChange = {this.props.onChangeMaxFilter}/> 
                </InputContainers>
            
            
                <InputContainers>
                    Buscar por nome:
                    <input 
                    type= 'text'
                    value={this.props.nameFilter}
                    onChange = {this.props.onChangeNameFilter}/> 
                </InputContainers>
           

        </ContainerFilter>
}
}