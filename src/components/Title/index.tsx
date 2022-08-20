import styles from "./styles.module.scss";

interface TitleProps {
  theme: "dark" | "light";
  label: string;
}

const Title = ({ theme, label }: TitleProps): JSX.Element => {
  return (
    <div className={styles.title_container}>
      <h2 className={`${styles.title} ${styles[theme]}`}>{label}</h2>
      <hr className={styles.bar} />
    </div>
  );
};

export default Title;
