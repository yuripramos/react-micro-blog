import React, { useContext } from 'react';

import { AuthorsContext } from '../../store/Authors/index';
import { getDate } from '../../utils/helpers';

type Post = {
  data: {
    title: string;
    body: string;
    metadata: {
      authorId: string,
      publishedAt: string
    }
  };
  id: string;
}


export default ({ data: { title, body, metadata }, id }: Post) => {
  const { authorId, publishedAt } = metadata;
  const { state: authors }: any = useContext(AuthorsContext);
  const { name: authorName } = authors.data.find((author: any) => author.id === authorId) || {};
  const date = getDate(publishedAt);

  return (
    <li className="post" id={id}>
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        <p>{body}</p>
      </main>
      <footer>
        {authorName ? `${authorName} – ` : ''}
        {date}
      </footer>
    </li>
  );
};
