import React, { Fragment } from "react";
import { array } from "prop-types";
// import { Row } from "../../../styles/grid";
// import { isResponsive } from "../../../utils/getResolution";

import { Result, Title, Content } from "./styles";

function TransactionDetail({ authorsList, articlesList }) {
  console.log("detail", authorsList, articlesList);
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

export default TransactionDetail;

TransactionDetail.propTypes = {
  authorsList: array,
  articlesList: array
};
