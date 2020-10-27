import { useState } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
// styles
import { AddItemContainer } from "./styles/addItems";
// utils
import { v4 as uuidv4 } from "uuid";

const onTextChange = (event, setText) => {
  const { value } = event.target;
  setText(value);
};

const handleSubmit = (event, context, text) => {
  const { id } = event.target;
  context.boardsData[id].items.push({
    id: uuidv4(),
    desc: text,
  });
  context.setBoardsData({
    ...context.boardsData,
  });
};

const AddItem = ({ boardId }) => {
  const [text, setText] = useState("");
  return (
    <Consumer>
      {(context) => (
        <AddItemContainer>
          <input
            id={boardId}
            value={text}
            onChange={(event) => onTextChange(event, setText)}
            placeholder="Please write here to add"
          />
          <button
            type="button"
            id={boardId}
            onClick={(event) => handleSubmit(event, context, text)}
          >
            Add Item
          </button>
        </AddItemContainer>
      )}
    </Consumer>
  );
};

AddItem.defaultProps = {
  boardId: "",
};

AddItem.propTypes = {
  boardId: PropTypes.string,
};

export { AddItem };
