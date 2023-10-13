// import {Cloudinary} from "@cloudinary/url-gen";

// const App = () => {
//   const cld = new Cloudinary({cloud: {cloudName: 'drd0m79k8'}});
// };



// import "./styles.css";
import { GalleryWidget } from "./GalleryWidget";

const cloudName = "drd0m79k8"; 



const config = {
  cloudName: cloudName,
  mediaAssets: [
    { tag: "electric_car_product_gallery_demo" }, // by default mediaType: "image"
    // { tag: "electric_car_product_gallery_demo", mediaType: "video" },
    // { tag: "electric_car_360_product_gallery_demo", mediaType: "spin" }
  ]
  // displayProps: { mode: "expanded", columns: 2 }, // multi column display
  // aspectRatio: "4:3", // if most assets are in landscape orientation
  // imageBreakpoint: 200,  // responsive resize images to closest step in 200px increments
  // carouselStyle: "indicators", // displays thumbnails by default
  // indicatorProps: { color: "red" },   // only relevant if CarouselStyle is set to indicators
  // carouselLocation: "right",  // "left" by default
  // borderColor: "red",  // color is transparent by default
  // borderWidth: 5, // border width is 0 by default
  // transition: "fade",  // "slide" by default
  // zoom: false,    // deactivate the zoom feature
};

export default function App() {
  return (
    <div className="App">
      <GalleryWidget config={config} />
    </div>
  );
}


