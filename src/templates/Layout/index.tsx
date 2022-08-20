import styles from "./styles.module.scss";

interface LayoutProps {
  children: JSX.Element[];
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.layout} role="layout">
      <div className={styles.layout_container}>{children}</div>
    </div>
  );
};

export default Layout;
