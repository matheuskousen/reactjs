import styled from "styled-components";
import backgroundImage from "../../../assets/herohome.jpeg";
const Heroo = styled.section`
  position: relative;
  width: 100%;
  height: 601px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.5;
  }

  .container {
    width: 90%;
    max-width: 1000px;
    margin: auto;
    color: #ffffff;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      margin-top: 20px;
      margin-bottom: 10px;
      text-align: center;
      font-size: 49px;
    }

    p {
      font-size: 23px;
      text-align: center;
      font-weight: 300;
      margin-top: 25px;
      margin-bottom: 10px;
    }
    a {
      width: 250px;
      height: 50px;
      margin-top: 20px;
      margin-bottom: 10px;
      color: #ffffff;
      padding: 12px 30px;
      display: inline-block;
      font-weight: 600;
      border-radius: 2em;
      font-size: 17px;
      line-height: 24.2857px;
      text-align: center;
      background: #e52f8b;
    }
  }
`;

export default Heroo;
