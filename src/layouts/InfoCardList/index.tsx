import InfoCard from "components/InfoCard";
import infoCards from "./content";
import styles from "./styles.module.scss";

const InfoCardList = (): JSX.Element => {
  return (
    <div className={styles.cards}>
      {infoCards.map(({ label, theme, description }, i) => (
        <InfoCard label={label} theme={theme} key={i}>
          {description}
        </InfoCard>
      ))}
    </div>
  );
};

export default InfoCardList;
