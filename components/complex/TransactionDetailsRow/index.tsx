interface TransactionDetailsRowProps {
  title: string;
  content: string;
}

function TransactionDetailsRow(props: TransactionDetailsRowProps) {
  const { title, content } = props;

  return (
    <p className="text-lg color-palette-1 mb-20">
      {title}
      <span className="purchase-details">{content}</span>
    </p>
  )
}

export default TransactionDetailsRow;
