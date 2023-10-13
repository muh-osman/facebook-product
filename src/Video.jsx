import style from "./Video.module.scss";

export default function Video() {
  return (
    <div className={style.container}>
      <iframe
        className={style.iframe}
        src="https://www.youtube.com/embed/FmRnR0FeO58?si=DO_kSnAniCqbBaGr"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
