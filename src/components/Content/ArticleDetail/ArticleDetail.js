import React, { Fragment } from "react";
import { array } from "prop-types";
import moment from "moment";
import { findById } from "../../../utils/filters";
// import { Row } from "../../../styles/grid";
// import { isResponsive } from "../../../utils/getResolution";

import { Wrapper, Title, Content, FooterInfo, FooterWrapper } from "./styles";

/*eslint-disable*/
function ArticleDetail({ authorsList, articlesList }) {
  const isFilled = authorsList && authorsList.length > 0;
  return (
    <Wrapper large>
      {isFilled &&
        articlesList.map((e, i) => (
          <Fragment key={`article-${i}`}>
            <Title>{e.title}</Title>
            <Content>{e.body}</Content>
            <FooterWrapper>
              <FooterInfo>
                Published at: {moment(e.metadata.publishedAt).format("L")}
              </FooterInfo>
              <FooterInfo>
                Author : {findById(authorsList, e.metadata.authorId).name}
              </FooterInfo>
            </FooterWrapper>
          </Fragment>
        ))}
    </Wrapper>
  );
}

export default ArticleDetail;

ArticleDetail.propTypes = {
  authorsList: array,
  articlesList: array
};
