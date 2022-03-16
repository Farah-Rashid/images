import './ImageList.css' ;
import React from "react" ;


const ImageList =(props) =>{
    const images = props.images.map ((image)=>{
        return <img key = {image.id} src={image.urls.regular} alt={image.description}/> ;
    })
    return <div className="Image-List">{images}</div> ;
};


export default ImageList ;