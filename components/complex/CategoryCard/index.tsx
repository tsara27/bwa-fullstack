import Image from "next/image";

interface CategoryCardProps {
  icon: string;
  title: string;
  total: string;
}

function CategoryCard(props: CategoryCardProps) {
  const { icon, title, total } = props;

  return (
    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
      <div className="categories-card">
        <div className="d-flex align-items-center mb-24">
          <Image
            src={`/icon/overview/${icon}`}
            width={60}
            height={60}
            alt={title}
          />
          <p className="color-palette-1 mb-0 ms-12">{title}</p>
        </div>
        <div>
          <p className="text-sm color-palette-2 mb-1">Total Spent</p>
          <p className="text-2xl color-palette-1 fw-medium m-0">{total}</p>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
