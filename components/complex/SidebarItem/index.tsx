import classnames from "classnames";
import Link from "next/link";

interface SidebarItemProps {
  icon: string;
  title: string;
  link?: string;
  active?: boolean;
}

function SidebarItem(props: SidebarItemProps) {
  const { icon, title, link = "/", active = false } = props;
  const classItem = classnames({
    "item": true,
    "mb-30": true,
    active,
  });

  return (
      <div className={classItem}>
        <img
          src={`/icon/sidebar/${icon}`}
          width={25}
          height={25}
          className="icon me-3"
        />
        <p className="item-title m-0">
          <Link href={link}>
            <a className="text-lg text-decoration-none">{title}</a>
          </Link>
        </p>
      </div>
  );
}

export default SidebarItem;
