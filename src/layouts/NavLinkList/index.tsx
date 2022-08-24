import NavLink from "components/NavLink";
import navLinks from "./content.json";
import styles from "./styles.module.scss";

const NavLinkList = (): JSX.Element => {
  return (
    <ul className={styles.list}>
      {navLinks.map(({ title, path }, i) => (
        <NavLink title={title} path={path} key={i} />
      ))}
    </ul>
  );
};

export default NavLinkList;
