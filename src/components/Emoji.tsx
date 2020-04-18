import React from 'react';

type Props = {
  label: string;
  symbol: string;
};

const Emoji: React.FC<Props> = ({ label, symbol }) => (
  <span role="img" aria-label={label}>
    {symbol}
  </span>
);

export default Emoji;
