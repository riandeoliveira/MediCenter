import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

interface DepartmentPostProps {
  href: string;
  source: string;
}

const DepartmentPost = ({ href, source }: DepartmentPostProps): JSX.Element => {
  return (
    <Link href={href}>
      <a className={styles.link}>
        <Image
          src={`/assets/images/${source}.jpg`}
          alt="Department post image"
          width={190}
          height={190}
          objectFit="cover"
          className={styles.image}
        />
      </a>
    </Link>
  );
};

export default DepartmentPost;
