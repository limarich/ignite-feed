import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/diego3g.png" />
          <div className={styles.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="5 de Novembro ร s 09:27h" dateTime="2022-11-05 09:27:00">
          Publicado hรก 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa ๐</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐
        </p>

        <p>
          <a href="">๐ jane.design/doctorcare</a>
        </p>

        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href=""> #rocketseat</a>
        </p>
      </div>
    </article>
  );
}
