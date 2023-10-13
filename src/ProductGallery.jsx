// React
import { useState } from "react"
// SCSS
import style from "./ProductGallery.module.scss"
// Images
import gallery1 from "./assets/images/gallery1.jpg"
import gallery2 from "./assets/images/gallery2.jpg"
import gallery3 from "./assets/images/gallery3.jpg"
import gallery4 from "./assets/images/gallery4.jpeg"
import gallery5 from "./assets/images/gallery5.jpg"

export default function ProductGallery() {

  const [imageScr, setImageScr] = useState(gallery5)


  return (
    <div className={style.gallery_container}>

      <div className={style.big_image}><img src={imageScr} alt="gallery" /></div>

      <div className={style.small_images_container}>
        <div onClick={()=> {setImageScr(gallery5)}} className={style.small_image}><img src={gallery5} alt="product image" /></div>
        <div onClick={()=> {setImageScr(gallery1)}} className={style.small_image}><img src={gallery1} alt="product image" /></div>
        <div onClick={()=> {setImageScr(gallery2)}} className={style.small_image}><img src={gallery2} alt="product image" /></div>
        <div onClick={()=> {setImageScr(gallery3)}} className={style.small_image}><img src={gallery3} alt="product image" /></div>
        <div onClick={()=> {setImageScr(gallery4)}} className={style.small_image}><img src={gallery4} alt="product image" /></div>
      </div>

    </div>
  )
}