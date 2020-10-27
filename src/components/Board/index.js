import PropTypes from "prop-types";
import { Consumer } from "../../context";
// components
import { AddItem } from "../AddItem";
import Card from "../Card";
// style
import { ListContainer } from "./styles/boardStyle";

const Board = ({ listofItems, title, uniqueBoardId }) => {
  const onCardDrag = (event, id, boardId) => {
    event.dataTransfer.setData("cardToBeMovedId", id);
    event.dataTransfer.setData("fromBoard", boardId);
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDelete = (idToBeDeleted, boardId, contextData) => {
    const copyState = { ...contextData.boardsData };
    // eslint-disable-next-line no-console
    console.log(copyState);
    // eslint-disable-next-line no-console
    console.log(idToBeDeleted, boardId);
    const { items } = copyState[boardId];
    // eslint-disable-next-line no-console
    console.log(idToBeDeleted, boardId);
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === idToBeDeleted) {
        items.splice(i, 1);
      }
    }
    contextData.setBoardsData({ ...copyState });
  };

  const onDrop = (event, DropboardId, contextData) => {
    const removeFromBoard = event.dataTransfer.getData("fromBoard");
    const cardToBeMoved = event.dataTransfer.getData("cardToBeMovedId");
    const copyState = { ...contextData.boardsData };
    const { items } = copyState[removeFromBoard];

    if (removeFromBoard === DropboardId) {
      let indexToBeMoved;
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === cardToBeMoved) {
          indexToBeMoved = i;
        }
      }
      items.unshift(items[indexToBeMoved]);
      items.splice(indexToBeMoved + 1, 1);
    } else {
      copyState[DropboardId].items.push(
        items.filter((element) => element.id === cardToBeMoved)[0]
      );

      for (let i = 0; i < items.length; i++) {
        if (items[i].id === cardToBeMoved) {
          items.splice(i, 1);
        }
      }
    }
    contextData.setBoardsData({ ...copyState });
  };

  return (
    <Consumer>
      {(context) => (
        <ListContainer
          onDragOver={(event) => onDragOver(event)}
          onDrop={(event) => onDrop(event, uniqueBoardId, context)}
        >
          <div className="board-name">{title}</div>
          {listofItems.map((element) => {
            return (
              <Card
                key={element.id}
                title={element.title}
                desc={element.desc}
                onCardDrag={onCardDrag}
                cardId={element.id}
                boardId={uniqueBoardId}
                context={context}
                onDelete={onDelete}
              />
            );
          })}
          <AddItem boardId={uniqueBoardId} />
        </ListContainer>
      )}
    </Consumer>
  );
};

Board.defaultProps = {
  listofItems: [],
  title: "",
  uniqueBoardId: "",
};

Board.propTypes = {
  listofItems: PropTypes.array,
  title: PropTypes.string,
  uniqueBoardId: PropTypes.string,
};

export default Board;
