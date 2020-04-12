import React, { ReactNode } from 'react';
import { AuthorsProvider } from './Authors/index';
import { PostsProvider } from './Posts/index';


type Props = {
  children: ReactNode
}


export default ({ children }: Props) => (
  <AuthorsProvider>
    <PostsProvider>{children}</PostsProvider>
  </AuthorsProvider>
);
