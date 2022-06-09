import React from "react";
import Contactcard from "./Contactcard";


const Contactlist = (props) => {
    console.log(props);
    const renderContactlist = props.contacts.map((contact) => {
        // return (
        //     <div className="item">
        //         <div className="content">
        //             <div className="header">{contact.name}</div>
        //             <div>{contact.email}</div>
        //         </div>
        //         <i className="trash alternate outline icon"></i>
        //     </div>
        // );
        return <Contactcard contact={contact}/>

    });
    // return(
    //     <div className="ui celled list">
    //               ContactList
    //     </div>    
    // );
    return <div className="ui celled list">{renderContactlist}</div>
};

export default Contactlist;