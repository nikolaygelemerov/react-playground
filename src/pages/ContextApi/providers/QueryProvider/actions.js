import { idGenerator } from '../../../../services';

export const setQuery = ({ queryBy, filters }, setState) => {
  setState(prevState => {
    const queries = [...prevState.queries];
    const queryId = idGenerator();

    queries.push({
      error: false,
      loading: false,
      success: false,
      filters,
      queryBy,
      queryId
    });

    return { ...prevState, requestQuery: {}, queries };
  });
};

export const updateQuery = ({ queryId, data }, setState) => {
  setState(prevState => {
    const queries = [...prevState.queries];

    const queryIndex = queries.findIndex(({ queryId: id }) => id === queryId);

    if (queryIndex !== -1) {
      const query = { ...queries[queryIndex], ...data };

      queries.splice(queryIndex, 1, query);

      return { ...prevState, queries };
    } else {
      return prevState;
    }
  });
};
