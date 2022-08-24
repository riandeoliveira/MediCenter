import Link from "next/link";
import styles from "./styles.module.scss";

interface NavLinkProps {
  path: string;
  title: string;
}

const NavLink = ({ path, title }: NavLinkProps): JSX.Element => {
  return (
    <li className={styles.item}>
      <Link href={path}>
        <a className={styles.link}>{title}</a>
      </Link>
    </li>
  );
};

export default NavLink;
