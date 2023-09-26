import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 2.5rem 0;
  background-image: linear-gradient(to right, var(--blue), var(--lightBlue));
`;

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: white;
`;

const Header = () => {
  return (
    <Container>
      <Title>Exchange Rate Calculator</Title>
    </Container>
  );
};

export default Header;
