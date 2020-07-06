import styled from "styled-components";

// $Second: #e52f8b;
// $First: #31b6e9;
const StyledNav = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1068;
  height: 60px;

  .container {
    width: 90%;
    max-width: 970px;

    height: 100%;
    margin: auto;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .navbar-brand-logo {
      img {
        width: 50px;
        object-fit: cover;
      }
    }

    .nav-links {
      height: 100%;
      display: flex;
      align-items: center;
      a {
        font-size: 18px;
        line-height: 60px;
        padding: 0 16px;
        display: block;
        color: #f5f5f5e8;
        .btn {
          width: 140px;
          height: 38px;
          background: #e52f8b;
          outline: none;
          border: none;
          line-height: 30px;
          color: #f5f5f5e8;

          font-size: 18px;
          border-radius: 2em;
        }
      }
    }
  }
`;

export default StyledNav;
