import styled from "styled-components";


export const Loading = styled.div`
margin-top: 100px; 
text-align: center;
color: white;
`;

export const Container = styled.main`

padding: 90px 20px 120px;

`;

export const Title = styled.h2`
text-align: center; 
margin-bottom: 20px;
font-weight: 400;
`;

export const Day = styled.section`
  background-color: #2b2d36;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  color: #ffffff;

  p {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 12px;
    border-bottom: 1px solid #3e3f49;
    padding-bottom: 5px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  button {
    width: 83px;
    height: 43px;
    background-color: transparent;
    border: 1px solid #EE897F;
    border-radius: 3px;
    color: #EE897F;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #EE897F;
      color: #2b2d36;
    }
  }
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0; 
  left: 0;
  width: 100%;
  background-color: #292a32;
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 14px;
  border-top: 1px solid #444;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.2);

  span {
    font-size: 16px;
    color: #ffffff;
    line-height: 22px;
  }
`;

export const Poster = styled.div`
  width: 64px;
  height: 89px;
  background-color: #fff;
  box-shadow: 0px 2px 4px 2px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 48px;
    height: 72px;
    object-fit: cover;
  }
`;
