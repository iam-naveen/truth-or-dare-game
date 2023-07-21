import { useState } from "react";
import "./App.css";
import UserInput from "./Components/UserInput";
import Button from "@mui/material/Button";
import Question from "./Components/Question";
import Plug from "./Components/Plug";

function App() {
  const [task, setTask] = useState(null);
  const [rating, setRating] = useState(null);
  const [question, setQuestion] = useState(null);
  // console.table({ task, rating });

  const getdata = () => {
    const url =
      "https://api.truthordarebot.xyz/api/" + task + "?rating=" + rating;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.table(data);
        setQuestion(data.question);
      });
  };

  return (
    <div className="App">
      <UserInput setTask={setTask} setRating={setRating} />

      <Button
        sx={{
          marginTop: 4,
          marginBottom: 4,
        }}
        color="error"
        variant="contained"
        onClick={getdata}
      >
        <span style={{ fontSize: "1rem", margin: "0.5rem 1.5rem" }}>
          Generate
        </span>
      </Button>

      <Question question={question} />

      <Plug />
    </div>
  );
}

export default App;
