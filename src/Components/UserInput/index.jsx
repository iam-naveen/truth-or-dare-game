import Selector from "./Selector/index.jsx";

export default function UserInput(props) {
  return (
    <div className="userInput">
      <Selector show={[]} options={["Truth", "Dare"]} set={props.setTask} />
      <Selector
        className="tagged"
        show={["U", "15+"]}
        options={["pg", "pg13"]}
        set={props.setRating}
      />
    </div>
  );
}
