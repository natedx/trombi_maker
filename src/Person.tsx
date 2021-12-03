import React from 'react'
import "./Person.css"

export default function Person (props : {item: {firstName: String, lastName: String, imageFile: String}}) {

    let { item } = props;

    return(
        <div className={"personContainer"}>
            <img src={process.env.PUBLIC_URL + '/images/'+ item.imageFile +'.png'} className="App-logo" alt="logo" />
            <p>{item.firstName} {item.lastName.toUpperCase()}</p>
        </div>
    )
}
