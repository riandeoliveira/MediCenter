import NavLinkList from "layouts/NavLinkList";
import Link from "next/link";
import { useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { IoMdMedical } from "react-icons/io";
import styles from "./styles.module.scss";

const Header = (): JSX.Element => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenuIsOpen((state: boolean) => !state);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <Link href="/">
          <a className={styles.link}>
            <IoMdMedical size={48} className={styles.logo} />
            <h1 className={styles.title}>MediCenter</h1>
          </a>
        </Link>
        <div className={styles.mobile_menu}>
          <button
            type="button"
            title="Mobile menu button"
            aria-expanded={menuIsOpen ? "true" : "false"}
            className={styles.button}
            onClick={toggleMenu}
          >
            {menuIsOpen ? <CgClose size={32} /> : <CgMenu size={32} />}
          </button>
        </div>
        <nav className={`${styles.nav} ${menuIsOpen ? styles.active : ""}`}>
          <NavLinkList />
        </nav>
      </div>
    </header>
  );
};

export default Header;
