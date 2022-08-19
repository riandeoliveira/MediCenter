import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

interface DepartmentProps {
  href: string;
  source: string;
}

const Department = ({ href, source }: DepartmentProps): JSX.Element => {
  return (
    <Link href={href}>
      <a className={styles.link}>
        <Image
          src={`/assets/images/${source}.jpg`}
          alt="Department image"
          width={190}
          height={190}
        />
      </a>
    </Link>
  );
};

export default Department;
