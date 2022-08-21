import Title from "components/Title";
import DepartmentPostList from "layouts/DepartmentPostList";
import styles from "./styles.module.scss";

const Departments = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <Title label="Departments" theme="dark" />
      <DepartmentPostList />
    </section>
  );
};

export default Departments;
