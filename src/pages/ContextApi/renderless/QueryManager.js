import { memo, useCallback, useContext } from 'react';
// import axios from 'axios';

import { useUpdate, useUpdateOnly } from '../../../services';
import { QueryContext } from '../providers';

const UrlManager = () => {
  const {
    actions: { updateQuery },
    queries,
    requestQuery
  } = useContext(QueryContext);

  const makeQuery = useCallback(async () => {
    const lastRequest = queries[queries.length - 1];

    if (requestQuery && lastRequest) {
      try {
        updateQuery({ data: { loading: true }, queryId: lastRequest.queryId });

        // const result = await axios.get(
        //   'https://jsonplaceholder.typicode.com/posts'
        // );

        if (lastRequest.queryBy === 'sort') {
          console.log('POR lastRequest.queryId: ', lastRequest.queryId);
          setTimeout(() => {
            updateQuery({
              data: { loading: false, success: true },
              queryId: lastRequest.queryId
            });
          }, 3000);
        } else {
          updateQuery({
            data: { loading: false, success: true },
            queryId: lastRequest.queryId
          });
        }
      } catch (error) {
        updateQuery({
          data: { error: true },
          queryId: lastRequest.queryId
        });
      }
    }
  }, [queries, requestQuery, updateQuery]);

  useUpdate(async () => {
    await makeQuery();
  }, [requestQuery]);

  useUpdateOnly(() => {
    console.log('POR queries: ', queries);
  }, [queries]);

  return null;
};

export default memo(UrlManager);
