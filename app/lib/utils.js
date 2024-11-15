const handleBokenImg = (e) =>{
    e.target.src = "/assets/img/no-photo.jpg"
}

export{
   handleBokenImg,
} 

export const externalImageLoader = ({ src }) => src;