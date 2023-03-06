function Rating({ children }) {
  const rating = Math.round(children);
  let starStr = '';
  for (let i = 0; i < 5; i++) {
    rating <= i ? (starStr += '☆') : (starStr += '★');
  }
  console.log(rating);

  const starsArray = new Array(5);
  console.log(starsArray);
  return <p>{starStr}</p>;
}

export default Rating;
