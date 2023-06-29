import { styled } from "styled-components";

const ControllerButton = styled.button`
  width: 100px;
  height: 100px;
  font-size: 70px;
  padding: 0;

  @media (max-width: 900px) {
    width: 50px;
    height: 50px;
    font-size: 30px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Controller = ({ setMove }) => {
  return (
    <Container>
      <ControllerButton onClick={() => setMove("↑")}>↑</ControllerButton>
      <div>
        <ControllerButton onClick={() => setMove("←")}>←</ControllerButton>
        <ControllerButton>-</ControllerButton>
        <ControllerButton onClick={() => setMove("→")}>→</ControllerButton>
      </div>
      <ControllerButton onClick={() => setMove("↓")}>↓</ControllerButton>
    </Container>
  );
};

export default Controller;
