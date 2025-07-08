import styled from "styled-components";


export const Loading = styled.div`margin-top: 100px; text-align: center;`;
export const Container = styled.main`padding: 90px 20px 120px;`;
export const Title = styled.h2`text-align: center; margin-bottom: 20px;`;
export const Day = styled.section`
  margin-bottom: 25px;
  p { font-size: 20px; color: #293845; }
`;
export const Buttons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 18px;

  button {
    width: 83px;
    height: 43px;
    background: #E8833A;
    border: none;
    border-radius: 3px;
    color: #FFFFFF;
    font-size: 18px;
  }
`;
export const Footer = styled.footer`
  position: fixed;
  bottom: 0; left: 0;
  width: 100%;
  height: 117px;
  background: #DFE6ED;
  border-top: 1px solid #9EADBA;
  display: flex;
  align-items: center;
  padding: 14px 10px;
  gap: 14px;

  span { font-size: 26px; color: #293845; }
`;
export const Poster = styled.div`
  width: 64px; height: 89px;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
  border-radius: 2px;
  img { width: 100%; height: 100%; }
`;