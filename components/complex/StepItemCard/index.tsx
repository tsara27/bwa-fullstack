interface StepItemCardProps {
  icon: 'step-1' | 'step-2' | 'step-3';
  title: string;
  paragraph1: string;
  paragraph2: string;
}

function StepItemCard(props: StepItemCardProps) {
  const { icon, title, paragraph1, paragraph2 } = props;

  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <img src={`/icon/${icon}.svg`} className="mb-30" height="80" width="80" alt="Icon step one" />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
        <p className="text-lg color-palette-1 mb-0">{paragraph1}<br/>{paragraph2}</p>
      </div>
    </div>
  )
}

export default StepItemCard;
