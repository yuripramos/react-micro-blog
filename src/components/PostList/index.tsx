import React, { useState, useContext, useEffect } from 'react';

import Post from '../Post/index';
import Dropdown from '../Dropdown/index';
import NoContent from '../NoContent/index';
import { AuthorsContext } from '../../store/Authors/index';
import Arrow from '../../assets/icons/Arrow';

const getKey = (post: any) => {
  const { authorId, publishedAt } = post.metadata;
  return `post-${authorId}-${publishedAt}`;
};

type Props = {
  data: any
}

export default ({ data }: Props) => {
  const [posts, setPosts] = useState([]);
  const [descOrdered, setDescOrdered] = useState(true);
  const [authorFilter, setAuthorFilter] = useState([]);
  const { state }: any = useContext(AuthorsContext);
  const hasPosts = posts.length > 0;

  useEffect(() => {
    setPosts(data);
  }, [data]);

  useEffect(() => {
    if (authorFilter.length) {
      const idList = authorFilter.map((author) => author.id);
      const filteredPosts = data.filter((post: any) => idList.includes(post.metadata.authorId));
      setPosts(filteredPosts);
    }
  }, [authorFilter]); //eslint-disable-line

  return (
    <section>
      <header>
        <h1>All Posts</h1>
        {hasPosts && (
          <aside>
            <Dropdown
              id="authors-dropdown"
              data={state.data}
              placeholder="Filter by Author"
              dataLabel="name"
              multiple={true}
              onChange={setAuthorFilter}
            />
            <button
              className={`btn order ${descOrdered ? 'desc' : 'asc'}`}
              title={`Order ${descOrdered ? 'DESC' : 'ASC'}`}
              onClick={() => setDescOrdered(!descOrdered)}
            >
              <Arrow />
            </button>
          </aside>
        )}
      </header>
      {hasPosts ? (
        <ul className="posts">
          {(descOrdered ? posts : posts.slice().reverse()).map((post) => (
            <Post key={getKey(post)} id={getKey(post)} data={post} />
          ))}
        </ul>
      ) : (
          <NoContent />
        )}
    </section>
  );
};
