import styled from "styled-components";




export const Loading = styled.div`
margin-top: 100px;
 text-align: center;
 `;



export const Container = styled.main`
  padding: 90px 20px 160px;
`;
export const Title = styled.h2`
  text-align: center;
   margin-bottom: 18px;
 `;


export const Legend = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  padding: 0;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 13px;
    color: #fff;
  }

  span {
    width: 25px; height: 25px; border-radius: 50%; margin-bottom: 8px;
  }
  .selected    { background: #FBE192; border: 1px solid #EE897F; }
  .available   { background: #1AAE9E; border: 1px solid #0E7D71; }
  .unavailable { background: #5C5C5C; border: 1px solid #000000; }
`;

export const Form = styled.form`
  display: flex; 
  flex-direction: column; 
  gap: 20px;




  label { font-size: 18px; display: flex; flex-direction: column; }

  input {
    height: 51px;
    margin-top: 5px;
    padding: 0 12px;
    border: 1px solid #D4D4D4;
    border-radius: 3px;
    font-size: 18px;
  }

  button {
    height: 46px;
    background: #EE897F;
    border: none;
    border-radius: 3px;
    font-size: 18px;
    color: #000;
  }
`;

export const Footer = styled.footer`
  position: fixed;
  bottom:0; 
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
