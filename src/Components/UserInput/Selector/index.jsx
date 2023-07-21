import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Selector(props) {
  const [selected, setSelected] = useState(0);
  return (
    <ButtonGroup>
      <Button
        className="input-btn"
        onClick={() => {
          setSelected(1);
          props.set(props.options[0]);
        }}
        color="primary"
        variant={selected === 1 ? "contained" : "outlined"}
      >
        <span className={props.className}>
          {props.show[0] || props.options[0]}
        </span>
      </Button>
      <Button
        className="input-btn"
        onClick={() => {
          setSelected(2);
          props.set(props.options[1]);
        }}
        color="primary"
        variant={selected === 2 ? "contained" : "outlined"}
      >
        <span className={props.className}>
          {props.show[1] || props.options[1]}
        </span>
      </Button>
    </ButtonGroup>
  );
}
