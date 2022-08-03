import React from 'react'

export const Paginate = ({dogsPag, dogs, pags}) => {
    const pagNumb = [];
    for (let i = 0; i < Math.ceil(dogs / dogsPag); i++) {
        pagNumb.push(i);        
    }
  return (
    <nav>
        <ul>
            {
                pagNumb && pagNumb.map( num => (
                    <li onClick={() => pags(num)} key={num}>
                        <button type='button'>
                            {num}
                        </button>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}
