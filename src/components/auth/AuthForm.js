import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styled-components';
import homeImage from '../../../assets/images/home-image.jpg';
import lotusIcon from '../../../assets/images/lotusIcon.png';

const HomeImage = styles.div`
@media (min-width: 375px) {
  background-image: url(${homeImage}); 
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
@media (min-width: 700px) {
  height: 100vh;
  background-size: 50vw 100vh;
  background-color:  #47B1CD;
}
`;

const FormStyles = styles.form`
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
@media (min-width: 375px) {
  font-family: 'Muli', sans-serif;
  font-size: 1.3em;
  text-align: left;
  padding-top: 2em;
}
`;

const LabelAuth = styles.label`
@media (min-width: 375px) {
  margin-bottom: 1em;
  padding-top: 1em;
  display: inline-block;
  text-align: left;
  vertical-align: 10px;
  margin-left: 1em;
  width: 50%
}
`;

const FormDiv = styles.div`
@media (min-width: 375px) {
  color: #568697;
  background-color: rgba(255, 255, 255, 0.9);
  width: 80%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 1em;
}
@media (min-width: 700px) {
  width: 40%;
}
@media (min-width: 1400px) {
  width: 30%;
}
`;
const InputAuth = styles.input`
@media (min-width: 375px) {
  margin-left: .2em;
  vertical-align: 10px;
  background: none;
  border-style: none;
  border-bottom: 1pt solid #568697;
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 80%;
  color: #568697;
}
@media (min-width: 700px) 
  width: 50%;
}
@media (min-width: 1400px) 
  vertical-align: 20px;
  width: 20%;
}
`;

const StyledLogo = styles.img `
@media (min-width: 375px) {
  padding-top: 1em;
  width: 20vw;
  height: 10vh;
  margin-right: auto;
  margin-left: auto;
  display: block
}
@media (min-width: 700px) {
  width: 10vw;
}
@media (min-width: 1400px) {
  width: 7vw;
}
`;

const AuthButton = styles.button`
@media (min-width: 375px) {
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 50%;
  margin-top: 1em;
  background-color: rgba(255, 255, 255, 0.9);
  border-style: none;
  padding: .5em;
  border-radius: 10px;
  font-family: 'Muli', sans-serif;
  color: #568697;
}
@media (min-width: 700px) {
  margin-top: 4em;
  font-size: 1.2em;
  width: 40%;
}
@media (min-width: 700px) {
  margin-top: 4em;
  font-size: 1.2em;
  width: 30%;
}
`;

function AuthForm({ handleAuth, onChange, email, password, name, phone }) {
  return (
    <>
    <HomeImage >
      <StyledLogo src={lotusIcon} />
      <FormStyles onSubmit={handleAuth.bind(null, email, password, name, phone)} id="signup">
        <FormDiv>
          <LabelAuth htmlFor="signup-email">Email: </LabelAuth>
          <InputAuth onChange={onChange} value={email} type="email" id="email" required/>
        </FormDiv>
        <FormDiv>
          <LabelAuth htmlFor="signup-password">Password: </LabelAuth>
          <InputAuth onChange={onChange} value={password} type="password" id="password"
            required/>
        </FormDiv>
        <FormDiv>
          <LabelAuth htmlFor="name">Name: </LabelAuth>
          <InputAuth onChange={onChange} value={name} type="text" id="name" required/>
        </FormDiv>
        <FormDiv>
          <LabelAuth htmlFor="phone">Phone: </LabelAuth>
          <InputAuth onChange={onChange} value={phone} type="tel" id="phone"/>
        </FormDiv>
        <AuthButton type="submit" value="Sign up">Sign Up</AuthButton>
      </FormStyles>
    </HomeImage>
</>
  );
}

AuthForm.propTypes = {
  handleAuth: PropTypes.func.isRequired,
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  password: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default AuthForm;
