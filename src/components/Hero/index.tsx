import React from 'react';
import './styles.scss';

import image from '../../assets/images/newspaper.png';

export default () => (
  <section className="hero">
    <article>
      <h1>React Micro Blog</h1>
      <p>Simple posts from a simple mocky.</p>
    </article>
    <article>
      <img src={image} alt="The Simple Post newspaper" />
    </article>
  </section>
);
