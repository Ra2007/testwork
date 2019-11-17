import React, { useEffect } from 'react';

import './styles.scss';

const Instruments = props => {
  const { getInstrumList } = props;

  useEffect(() => {
    getInstrumList();
  }, []);
  console.log(props);
  return <div>Instruments</div>;
};

export default Instruments;
