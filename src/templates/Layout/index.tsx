import styles from "./styles.module.scss";

interface LayoutProps {
  children: JSX.Element[];
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
