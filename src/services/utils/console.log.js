export default ({ value, color, bgColor }) => {
  console.log(
    `%c ${value}`,
    `background: ${bgColor || 'black'}; color: ${color || 'white'}`
  );
};
