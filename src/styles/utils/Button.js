export function buttonStyle() {
  return `
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
}
