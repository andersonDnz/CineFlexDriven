import styled from "styled-components";

export const Container = styled.main`
  padding: 90px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 24px;
    color: #247A6B;
    text-align: center;
    font-weight: 700;
    margin-bottom: 40px;
  }

  button {
    margin-top: 50px;
    width: 225px;
    height: 42px;
    background: #E8833A;
    border: none;
    border-radius: 3px;
    font-size: 18px;
    color: #FFFFFF;
  }
`;
export const Section = styled.section`
  width: 100%;
  margin-bottom: 25px;

  h3 { font-size: 23px; margin-bottom: 5px; font-weight: 700; }
  p  { font-size: 22px; }
`;