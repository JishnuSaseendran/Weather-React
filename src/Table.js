import React, { Component } from 'react'
import TableHeaders from './TableHeaders'      
import TableBody from './TableBody'



export default class Table extends Component {
  render() {

    const {characterData, removeCharacter} = this.props;

    return (
        <div className="container">
        
            <table>
            <TableHeaders />
            <TableBody characterData={characterData} 
                removeCharacter={removeCharacter}/>  
            </table>
            
        </div>
    )
  }
}
