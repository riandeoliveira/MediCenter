import styles from "./styles.module.scss";

interface TitleProps {
  theme: "dark" | "light";
  children: string;
}

const Title = ({ theme, children }: TitleProps): JSX.Element => {
  return (
    <div className={styles.title_container}>
      <h2 className={`${styles.title} ${styles[theme]}`}>{children}</h2>
      <hr className={styles.bar} />
    </div>
  );
};

export default Title;
