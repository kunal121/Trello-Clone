import PropTypes from "prop-types";
import { CardContainer } from "./styles/cardStyle";
import { AiOutlineClose } from "react-icons/ai";

const Card = ({ cardId, desc, onCardDrag, boardId, context, onDelete }) => {
  return (
    <CardContainer
      onDragStart={(e) => onCardDrag(e, cardId, boardId)}
      draggable
    >
      <p className="desc-card">{desc}</p>
      <button
        type="button"
        className="close-button"
        onClick={() => {
          onDelete(cardId, boardId, context);
        }}
      >
        <AiOutlineClose />
      </button>
    </CardContainer>
  );
};

Card.defaultProps = {
  desc: "",
  onCardDrag: () => {},
  onDelete: () => {},
  cardId: "",
  boardId: "",
  context: "",
};

Card.propTypes = {
  desc: PropTypes.string,
  onCardDrag: PropTypes.func,
  cardId: PropTypes.string,
  boardId: PropTypes.string,
  context: PropTypes.object,
  onDelete: PropTypes.func,
};

export default Card;
