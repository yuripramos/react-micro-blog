import React, { Component } from "react";
import { array } from "prop-types";
import moment from "moment";
import ContentFilters from "./ContentFilters";
import { findById } from "../../../utils/filters";
// import { Row } from "../../../styles/grid";
// import { isResponsive } from "../../../utils/getResolution";

import {
  Wrapper,
  Title,
  Content,
  FooterInfo,
  FooterWrapper,
  Article
} from "./styles";

/*eslint-disable*/
class ArticleDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: {
        type: "author",
        range: 5
      }
    };
    this.onFilter = this.onFilter.bind(this);
  }

  onFilter(filter) {
    this.setState({
      filter
    });
  }

  render() {
    const { authorsList, articlesList } = this.props;
    const { filter } = this.state;
    const isFilled = authorsList && authorsList.length > 0;
    return (
      <Wrapper large>
        <ContentFilters onFilter={this.onFilter} defaultFilter={filter} />
        {isFilled &&
          articlesList.map((e, i) => (
            <Article key={`article-${i}`} last={i + 1 === articlesList.length}>
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
            </Article>
          ))}
      </Wrapper>
    );
  }
}

export default ArticleDetail;

ArticleDetail.propTypes = {
  authorsList: array,
  articlesList: array
};
