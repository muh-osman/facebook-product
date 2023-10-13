// SCSS
import style from "./Main.module.scss";
// 
import ProductGallery from "./ProductGallery";
import Description from "./Description";

export default function main() {
  return (
    <main className={style.main}>

      <div className={style.Description}>
        <Description />
      </div>

      <div className={style.gallery}>
        <ProductGallery />
      </div>

    </main>
  );
}
