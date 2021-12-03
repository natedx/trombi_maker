import React, {useState} from 'react'
import "./Person.css"

export default function Person (props : {item: {firstName: String, lastName: String, imageFile: String}}) {

    let { item } = props;
    let [image, setImage] = useState(process.env.PUBLIC_URL + '/images/'+ item.imageFile +'.png')

    return(
        <div className={"personContainer"}>

            <img src={image}
                 className="App-logo" alt="logo"
                 onError={
                     () => setImage(process.env.PUBLIC_URL + "/placeholder.jpeg")
                 }
            />

            <p>{item.firstName} {item.lastName.toUpperCase()}</p>
        </div>
    )
}
