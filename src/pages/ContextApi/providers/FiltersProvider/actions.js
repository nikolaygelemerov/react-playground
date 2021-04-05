export const setFilter = ({ id, value }, setState) => {
  setState(prevState => {
    if (prevState.filters?.[id] !== value) {
      return {
        ...prevState.filters,
        filters: { ...prevState.filters, [id]: value }
      };
    } else {
      return prevState;
    }
  });
};
