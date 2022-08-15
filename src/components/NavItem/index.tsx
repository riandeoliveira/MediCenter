import Link from "next/link";
import styles from "./styles.module.scss";

interface NavItemProps {
  path: string;
  title: string;
}

const NavItem = ({ path, title }: NavItemProps): JSX.Element => {
  return (
    <li className={styles.item}>
      <Link href={path}>
        <a className={styles.link}>{title}</a>
      </Link>
    </li>
  );
};

export default NavItem;
