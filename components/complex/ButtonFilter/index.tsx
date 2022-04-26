import Link from "next/link";
import classnames from "classnames";

interface ButtonFilterProps {
  text: string;
  btnActive?: boolean;
}

function ButtonFilter(props: ButtonFilterProps) {
  const { text, btnActive = false } = props;
  const activeClass = btnActive ? "btn-active" : "";
  const linkClass = classnames(
    "btn",
    "btn-status",
    "rounded-pill",
    "text-sm",
    activeClass,
    "me-3"
  );

  return (
    <Link href="/">
      <a data-filter="*" className={linkClass}>
        {text}
      </a>
    </Link>
  );
}

export default ButtonFilter;
