import React from 'react';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    width: '400px',
    height: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: '15px',
    padding: '20px',
    margin: '20px',
    boxSizing: 'border-box',
  };

  const cardNumberStyle = {
    fontSize: '30px',
    letterSpacing: '5px',
  };

  const cardInfoStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  };

  const cardExpirationStyle = {
    fontSize: '18px',
    marginRight: '30px',
  };

  return (
    <div style={cardStyle}>
      <div>
        <p>{type}</p>
      </div>
      <div>
        <p style={cardNumberStyle}>**** **** **** {number.slice(-4)}</p>
      </div>
      <div>
        <div style={cardInfoStyle}>
          <div style={cardExpirationStyle}>
            <p>
              Expires {expirationMonth}/{expirationYear.toString().slice(-2)}
            </p>
            <p>{bank}</p>
          </div>
          <div>
            <p>{owner}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
