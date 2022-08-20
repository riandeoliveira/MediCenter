import styles from "./styles.module.scss";

interface AsideProps {
  children: JSX.Element | JSX.Element[];
}

const Aside = ({ children }: AsideProps): JSX.Element => {
  return <aside className={styles.aside}>{children}</aside>;
};

export default Aside;
