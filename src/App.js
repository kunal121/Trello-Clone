import Board from "./components/Board";
import { useState, useEffect } from "react";
import boardDataMock from "./mocks/dataMock";
import { BoardContainer, GlobalContainer, GlobalStyle } from "./globalStyle";
import { Provider } from "./context";

const App = () => {
  const [boardsData, setBoardsData] = useState([]);

  useEffect(() => {
    // considering it as api call
    setBoardsData(boardDataMock);
  }, [boardDataMock]);

  return (
    <>
      <GlobalStyle />
      <GlobalContainer>
        <Provider value={{ boardsData, setBoardsData }}>
          <BoardContainer>
            {Object.keys(boardsData).map((currentBoard) => {
              return (
                <Board
                  listofItems={boardsData[currentBoard].items}
                  title={boardsData[currentBoard].title}
                  uniqueBoardId={boardsData[currentBoard].id}
                  key={boardsData[currentBoard].id}
                />
              );
            })}
          </BoardContainer>
        </Provider>
      </GlobalContainer>
    </>
  );
};

export default App;
