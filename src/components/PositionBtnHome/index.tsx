import React from 'react';

type Props = {
    name : string, choosed : Boolean, onClick: () => void
}

const PositionBtn : React.FC<Props> = (props : Props) => {
  const { name, choosed, onClick } = props;
  return (
    <button
      className={`btn-position ${choosed ? 'choosed' : ''} ${name} `}
      onClick={onClick}
      type="button"
    >
      {name}

    </button>
  );
};

export default PositionBtn;
