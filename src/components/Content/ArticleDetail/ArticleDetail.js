import React, { Component } from "react";
import { array } from "prop-types";
import moment from "moment";
import ContentFilters from "./ContentFilters";
/*eslint-disable*/
import { findById, filterArtistByName } from "../../../utils/filters";
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
      },
      articlesDisplayed: []
    };
    this.onFilter = this.onFilter.bind(this);
  }

  onFilter(filter) {
    const { authorsList, articlesList } = this.props;
    this.setState({
      filter,
      articlesDisplayed: filterArtistByName(
        authorsList,
        articlesList,
        filter.range
      )
    });
  }

  componentDidMount() {
    const { authorsList, articlesList } = this.props;
    const isFilled = authorsList && authorsList.length > 0;
    isFilled &&
      this.setState({
        articlesDisplayed: articlesList
      });
  }

  render() {
    const { authorsList, articlesList } = this.props;
    const { filter, articlesDisplayed } = this.state;
    const isFilled = authorsList && authorsList.length > 0;
    return (
      <Wrapper large>
        <ContentFilters
          authorsList={authorsList}
          onFilter={this.onFilter}
          defaultFilter={filter}
        />
        {isFilled ? (
          articlesDisplayed.map((e, i) => (
            <Article
              key={`article-${i}`}
              last={i + 1 === articlesDisplayed.length}
            >
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
          ))
        ) : (
          <span>No content to display, please try again</span>
        )}
      </Wrapper>
    );
  }
}

export default ArticleDetail;

ArticleDetail.propTypes = {
  authorsList: array,
  articlesList: array
};
