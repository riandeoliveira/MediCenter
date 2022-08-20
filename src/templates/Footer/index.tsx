import Card from "components/Card";
import cards from "./content";
import styles from "./styles.module.scss";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.cards}>
          {cards.map(({ type, title, content }, i) => (
            <Card id={i} type={type} title={title} content={content} key={i} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
