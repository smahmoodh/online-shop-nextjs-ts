import Link from "next/link";

const MenuItem = ({ cssClass, link, title, text, children }) => {
  return (
    <li className={cssClass}>
      <Link href={link} title={title}>
        {text}
      </Link>
      {children}
    </li>
  );
};

export default MenuItem;
