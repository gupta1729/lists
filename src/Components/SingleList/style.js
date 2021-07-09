import styled from 'styled-components'

const bgColor = '#fff'
const selectedBgColor = '#9c075a'
const defaultTextColor = '#000'
const selectedTextColor = '#fff'

const StyledList = styled.li
  `
list-style-type: disclosure-closed;
background-color: ${props => props.isSelected ? selectedBgColor : bgColor};
color: ${props => props.isSelected ? selectedTextColor : defaultTextColor};
margin-bottom:5px;
transition: transform 0.1s ease;
a{
  display:block;
  padding:0.5rem;
  margin-left:10px;
}
&:hover{
  transform: scale(1.01);
  box-shadow: -1px 1px 20px 0px #bbbbbb7a;
}
`

export {
  StyledList
}
