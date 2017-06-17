import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { buttonStyle } from './utils/Button';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderBrand = styled.h1`
  margin-right: auto;
`;

export const HeaderOption = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: black;
  padding: 0.5em 1em;
  margin-right: 1em;
  border-radius: 2px;
  border: none;
  background-color: palevioletred;
  font-size: inherit;
  transition: background-color 0.2s;
  &:hover,
  &:focus{
    background-color: #d4547e;
  }
  &:focus{
    outline: none;
  }
`;

export const Introduction = styled.p`
  width: 50%;
  margin: 10em auto;
`;

export const UserOptions = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 10em;
`;

export const UserOption = styled.article`
display: flex;
 flex-direction: column;
 width: 30%;
 margin-right: 2em;
 align-items: center;
 & > * + * {
   margin-top: 3em;
 }
 box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
&:hover{
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
`;

export const UserTitle = styled.h2`

`;

export const UserDescription = styled.p`
`;

export const Video = styled(Link)`
  ${buttonStyle()};
  margin-top: 10em;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  width: 20%;
`;
