import styled from "styled-components";

export const Container = styled.main`
  padding: 90px 20px;
  padding-bottom: 190px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1e1f26;
  min-height: 100vh;

  h2 {
    font-size: 24px;
    color: #24c37a; 
    text-align: center;
    font-weight: 500;
    margin-bottom: 40px;
  }
`;


export const Section = styled.section`
  width: 100%;
  max-width: 338px;
  background-color: #2b2d36;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  color: #ffffff;

  h3 {
    font-size: 18px;
    font-weight: 700;
    color: #f87c7c;
    margin-bottom: 8px;
    border-bottom: 1px solid #3e3f49;
    padding-bottom: 5px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: #ffffff;
  }
`;


export const FixedButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;                 
  max-width: 338px;
  height: 42px;
  background: #ee897f;
  border: none;
  border-radius: 3px;
  font-size: 18px;
  font-weight: 500;
  color: #1e1f26;
  cursor: pointer;
  z-index: 1000;
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 80px; 
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
