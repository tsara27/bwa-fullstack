import classnames from "classnames";
import Link from "next/link";

interface MenuProps {
  title: string;
  active?: boolean;
  href: string;
}

function Menu(props: Partial<MenuProps>) {
  const { title, active, href="/" } = props;
  const classTitle = classnames({
    'nav-link': true,
    active
  })

  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={classTitle} aria-current="page">{title}</a>
      </Link>
    </li>
  );
}

export default Menu;
