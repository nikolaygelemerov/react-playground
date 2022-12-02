import { idGenerator } from '../../../../services';

export const setQuery = ({ filters, queryBy }, setState) => {
  setState(prevState => {
    const queries = [...prevState.queries];
    const queryId = idGenerator();

    queries.push({
      error: false,
      loading: false,
      queryBy,
      queryId,
      success: false,
      ...(filters ? { filters } : {})
    });

    return { ...prevState, queries, requestQuery: {} };
  });
};

export const updateQuery = ({ data, queryId }, setState) => {
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
