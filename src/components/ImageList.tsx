import React from 'react'

const ImageList= (images:any) => {
//  images.map((image:any)=>{
//     return <img src={image.urls.regular}/>
//  });
const imagesource= images.images.map(({description,id,urls}:any)=>{
return <img key={id} alt={description} src={urls.regular}/>
})
    return (
    <div>{imagesource}</div>
  )
}

export default ImageList