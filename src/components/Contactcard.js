import React from 'react';
import user from '../assets/user.jpg';

function Contactcard(props) {
    const {id,name,email} = props.contact;
  return (
    <div className="item">
        <img className='ui avatar image' src={user} alt="Joshi"/>
    <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
    </div>
    <i className="trash alternate outline icon" style={{color:"red",marginTop:"7px"}}></i>
</div>
  )
}

export default Contactcard;