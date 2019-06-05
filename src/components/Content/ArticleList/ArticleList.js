import React from "react";
import { array } from "prop-types";
import Icon from "../../common/Icon";
import moment from "moment";
import {
  Title,
  Item,
  ListWrapper,
  Description,
  AccInfo,
  InfoStyle,
  Name,
  Empty
} from "./styles";
/*eslint-disable*/
/*HERE IT GOES THE TITLES LIST AND PUBLISHED DATE */

function ArticleList({ articlesList, authorsList }) {
  const isFilled = articlesList.length > 0;
  return (
    <ListWrapper>
      <Title>Articles</Title>
      {isFilled ? (
        articlesList.map((e, i) => (
          <Item key={i}>
            <AccInfo>
              <Description recipient>
                <Icon name="Papers" />
              </Description>
              <Name>{e.title}</Name>
              <InfoStyle>{`Published at:${moment(e.metadata.publishedAt).format(
                "L"
              )}`}</InfoStyle>
            </AccInfo>
          </Item>
        ))
      ) : (
        <Empty>No Articles to display</Empty>
      )}
    </ListWrapper>
  );
}

export default ArticleList;

ArticleList.propTypes = {
  authorsList: array,
  articlesList: array
};
