//src/componets/players.js

export default function Player(props) {
  return (
    <li className="Player">
      <p>
        {props.name} - {props.score}
      </p>
    </li>
  );
}
