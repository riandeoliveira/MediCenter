import Department from "components/Department";
import Title from "components/Title";
import departments from "./content.json";
import styles from "./styles.module.scss";

const Departments = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <Title name="Departments" theme="dark" />
      <div className={styles.departments}>
        {departments.map(({ source, href }, i) => (
          <Department source={source} href={href} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Departments;
