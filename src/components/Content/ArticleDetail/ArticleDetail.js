import React, { Fragment } from "react";
import { array } from "prop-types";
// import { Row } from "../../../styles/grid";
// import { isResponsive } from "../../../utils/getResolution";

import { Result, Title, Content } from "./styles";
/*eslint-disable*/
function ArticleDetail({ authorsList, articlesList }) {
  return (
    <Result large>
      {articlesList.map((e, i) => (
        <Fragment key={`article-${i}`}>
          <Title>{e.title}</Title>
          <Content>{e.body}</Content>
          <span>published at: xx/xx/xxxx</span>
        </Fragment>
      ))}
    </Result>
  );
}

export default ArticleDetail;

ArticleDetail.propTypes = {
  authorsList: array,
  articlesList: array
};
