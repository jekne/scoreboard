//src/componets/players.js

export default function Player(props) {
  const onClickIncrement = () => {
    props.incrementScore(props.id);
  };
  return (
    <li className="Player">
      <p>
        {props.name} - {props.score}{" "}
        {<button onClick={onClickIncrement}>+</button>}
      </p>
    </li>
  );
}
