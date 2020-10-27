import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  background-color: white;
  padding: 5%;
  margin: 5%;
  border-radius: 10px;
  .desc-card {
    width: 95%;
  }
  .close-button {
    border: 0;
    background-color: white;
    width: 10px;
    height: 10px;
  }
`;

export { CardContainer };
