import "./global.css";
import styled from "styled-components";


export const COLORS = {
  dollar: "#8BC34A",
  booger: "#DCE775",
  lemon: "#FFF59D",
  mayGreen: "#388E3C",
  islamic: "#008F11",
  black: "#0D0208",
  darkGreen: "#003B00",
  malachite: "#00FF41",
  link: "#91165a"
}

export const IdentityAvatar = styled.img`
  width: 128px;
  height: auto;
  border: 2px solid #fff;
  border-radius: 64px;
`
export const IdentityTable = styled.table`
  margin-top: 70px;
  td {
    padding: 6px 20px;
  }
`

export const SideBySide = styled.table`
  margin-top: 30px;
  border: 1px solid #DCE775;
  border-collapse: collapse;
  th, td {
    padding: 6px 20px;
    max-width: 50%;
    border: 1px solid #DCE775;
  }
`

export const Likes = styled.div`
  color: ${COLORS.lemon};
  margin-left: -10px;
  .svg-inline--fa {
    margin: 0 10px;
  }
`
