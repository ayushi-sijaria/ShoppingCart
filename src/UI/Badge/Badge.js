import React from 'react'

const Badge = (props) => {
     return (
          <div className='Badge'>
               <p>{props.discount}%off</p>
          </div>
     )
}

export default Badge
