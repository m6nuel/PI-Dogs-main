import React from 'react';
import style from './paginate.module.css';

export const Paginate = ({dogsPag, dogs, pags}) => {
    const pagNumb = [];
    for (let i = 1; i < Math.ceil(dogs / dogsPag); i++) {
        pagNumb.push(i);        
    }
  return (
    <nav>
        <ul>
            {
                pagNumb && pagNumb.map( num => (
                    <li className={`${ style.li }`} onClick={() => pags(num)} key={num}>
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
