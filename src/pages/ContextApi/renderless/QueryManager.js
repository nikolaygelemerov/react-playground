import { memo, useCallback, useContext } from 'react';
// import axios from 'axios';

import { useUpdate, useUpdateOnly } from '../../../services';
import { QueryContext } from '../providers';

const UrlManager = () => {
  const {
    actions: { updateQuery },
    requestQuery,
    queries
  } = useContext(QueryContext);

  const makeQuery = useCallback(async () => {
    const lastRequest = queries[queries.length - 1];

    if (requestQuery && lastRequest) {
      try {
        updateQuery({ queryId: lastRequest.queryId, data: { loading: true } });

        // const result = await axios.get(
        //   'https://jsonplaceholder.typicode.com/posts'
        // );

        if (lastRequest.queryBy === 'sort') {
          console.log('POR lastRequest.queryId: ', lastRequest.queryId);
          setTimeout(() => {
            updateQuery({
              queryId: lastRequest.queryId,
              data: { loading: false, success: true }
            });
          }, 3000);
        } else {
          updateQuery({
            queryId: lastRequest.queryId,
            data: { loading: false, success: true }
          });
        }
      } catch (error) {
        updateQuery({
          queryId: lastRequest.queryId,
          data: { error: true }
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
