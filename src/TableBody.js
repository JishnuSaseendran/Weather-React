import React from 'react'

export default function TableBody(props) {
  return (
    <tbody>
        {
          props.characterData.map((row, index) => {
            return(
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                  <button onClick={ () => props.removeCharacter(index)}>
                    Delete
                  </button>
                </td>  
              </tr>
            )
          })
        }
    </tbody>
  )
}