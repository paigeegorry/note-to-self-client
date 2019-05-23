import styles from 'styled-components';
import { Link } from 'react-router-dom';

export const OpenIcon = styles.img`
@media (max-width: 414px) {
  height: 8vh;
  padding: 1em;
  display: flex;
  width: 50%;
}
@media (min-width: 414px) {
  height: 8vh;
  padding: 1em;
  display: flex;
  width: 20%;
}
`;

export const NavStyles = styles(Link)`
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
@media (max-width: 414px) {
 color: white;
 display: block;
 font-family: 'Muli', sans-serif;
 margin-right: auto;
 margin-left: 28%;
 text-decoration: none;
 width: 50%;
 font-size: 1.4em;
 font-weight: 700;
 padding: 2em 1em .3em 1em;
 text-align: center;
  button {
   color: white;
   font-weight: 700;
 }
}
@media (min-width: 414px) {
  color: white;
  display: block;
  font-family: ‘Muli’, sans-serif;
  margin-right: auto;
  margin-left: 38%;
  text-decoration: none;
  width: 40%;
  font-size: 1.6em;
  font-weight: 700;
  padding: 2em 1em .3em 1em;
  text-align: center;
   button {
    color: white;
    font-weight: 700;
  }
 }
 @media (min-width: 700px) {
  color: white;
  display: block;
  width: 50%;
  font-family: 'Muli', sans-serif;
  margin-right: auto;
  text-decoration: none;
  font-size: 2em;
  font-weight: 700;
  padding: 2em 1em .3em 1em;
  text-align: center;
   button {
    color: white;
    font-weight: 700;
    font-weight: 700;
    border-style: none;
    background: none;
  }
}
@media (min-width: 1500px) {
  color: white;
  display: block;
  margin: 0 auto;
  width: 100%;
  font-family: 'Muli', sans-serif;
  margin-right: 0;
  margin-left: 1em;
  text-decoration: none;
  font-size: 2em;
  font-weight: 700;
  padding: 2em 1em .3em 1em;
  text-align: center;
   button {
    color: white;
    font-weight: 700;
    border-style: none;
    background: none;
  }
}
`;
export const DivStyle = styles.div`
@media (max-width: 414px) {
  height: 10vh;
  position: relative;
  display: flex;
  justify-content: flex-end;
}
@media (min-width: 414px) {
  height: 10vh;
  position: relative;
  display: flex;
  justify-content: flex-end;
}
@media (min-width: 700px) {
  height: 15vh;
}
@media (min-width: 920px) {
  height: 20vh;
}
`;

export const Lotus = styles.img`
@media (max-width: 414px) {
  height: 6vh;
  width: 12vw;
  padding: 1em;
}
@media (min-width: 414px) {
  height: 6vh;
  width: 8vw;
  padding: 1em;
}
`;

export const ProfilePic = styles.img`
width: 4em;
padding: 1em;

@media (min-width: 700px) {
  padding: 1.5em;
}
@media (min-width: 1400px) {
  padding: 1.5em 4em 2em 2em;
}
`;

export const HeaderStyle = styles.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;