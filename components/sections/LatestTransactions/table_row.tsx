import classnames from "classnames";


interface TableRowProps {
  deviceType: string;
  image: string;
  item: string;
  price: string;
  status: string;
  textCenter?: boolean;
  title: string;
}

function TableRow(props: TableRowProps) {
  const { title, image, status, deviceType, price, item, textCenter = false } = props;
  const classStatus = classnames("float-start", "icon-status", status);
  const classRow = classnames({
    "align-middle": true,
    "text-center": textCenter
  });


  return (
    <tr className={classRow}>
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${image}`}
          width={80}
          height={60}
          alt="Game"
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">{title}</p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">{deviceType}</p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item}</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
      </td>
      <td>
        <div>
          <span className={classStatus}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative capitalize">{status}</p>
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
