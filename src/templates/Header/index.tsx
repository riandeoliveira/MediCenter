import MenuItem from "components/MenuItem";
import Link from "next/link";
import { IoMdMedical } from "react-icons/io";
import menuItems from "./content.json";
import styles from "./styles.module.scss";

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <Link href="/">
          <a className={styles.link}>
            <IoMdMedical size={48} className={styles.logo} />
            <h1 className={styles.title}>MediCenter</h1>
          </a>
        </Link>
        <nav>
          <ul className={styles.list}>
            {menuItems.map(({ title, path }, i) => (
              <MenuItem title={title} path={path} key={i} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
