import { memo, useContext } from 'react';
import axios from 'axios';

import { useUpdate } from '../../../services';
import { QueryContext } from '../providers';

const UrlManager = () => {
  const {
    actions: { updateQuery },
    requestQuery,
    queries
  } = useContext(QueryContext);

  useUpdate(async () => {
    const lastRequest = queries[queries.length - 1];

    if (requestQuery && lastRequest) {
      try {
        updateQuery({ queryId: lastRequest.queryId, data: { loading: true } });

        const result = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );

        updateQuery({
          queryId: lastRequest.queryId,
          data: { loading: false, success: true }
        });
      } catch (error) {
        updateQuery({
          queryId: lastRequest.queryId,
          data: { error: true }
        });
      }
    }
  }, [requestQuery]);

  console.log('queries: ', queries);

  return null;
};

export default memo(UrlManager);
