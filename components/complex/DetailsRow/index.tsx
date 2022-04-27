interface DetailsRowProps {
  title: string;
  content: string;
}

function DetailsRow(props: DetailsRowProps) {
  const { title, content } = props;

  return (
    <p className="text-lg color-palette-1 mb-20">
      {title}
      <span className="purchase-details">{content}</span>
    </p>
  )
}

export default DetailsRow;
