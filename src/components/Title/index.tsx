import styles from "./styles.module.scss";

interface TitleProps {
  name: string;
  theme: "dark" | "light";
}

const Title = ({ name, theme }: TitleProps): JSX.Element => {
  return (
    <div className={styles.title_container}>
      <h2 className={`${styles.title} ${styles[theme]}`}>{name}</h2>
      <hr className={styles.bar} />
    </div>
  );
};

export default Title;
