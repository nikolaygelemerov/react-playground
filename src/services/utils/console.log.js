// eslint-disable-next-line import/no-anonymous-default-export
export default ({ bgColor, color, value }) => {
  console.log(
    `%c ${value}`,
    `background: ${bgColor || 'black'}; color: ${color || 'white'}`
  );
};
