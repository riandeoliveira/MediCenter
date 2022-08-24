import DepartmentPost from "components/DepartmentPost";
import departmentPosts from "./content.json";
import styles from "./styles.module.scss";

const DepartmentPostList = (): JSX.Element => {
  return (
    <div className={styles.department_posts}>
      {departmentPosts.map(({ source, href }, i) => (
        <DepartmentPost source={source} href={href} key={i} />
      ))}
    </div>
  );
};

export default DepartmentPostList;
