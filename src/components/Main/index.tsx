import React, { useContext } from 'react';

import Hero from '../Hero/index';
import LatestList from '../LatestList/index';
import PostList from '../PostList/index';
import { PostsContext } from '../../store/Posts/index';
import { sortObjectsArrayByKey } from '../../utils/helpers';

export default () => {
  const { state: posts } = useContext(PostsContext);
  console.log(posts.data);
  const sortedDescPosts = sortObjectsArrayByKey(posts.data, ['metadata', 'publishedAt'], true);

  return (
    <main>
      <Hero />
      <LatestList data={sortedDescPosts.slice(0, 3)} />
      <PostList data={sortedDescPosts} />
    </main>
  );
};
