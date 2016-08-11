import React from 'react';

const Author =({name,id,Clicked}) => (
  <div id= {id} className='author' onClick={Clicked}>
    <h4>{name} ({id})</h4>
  </div>
)

export default Author