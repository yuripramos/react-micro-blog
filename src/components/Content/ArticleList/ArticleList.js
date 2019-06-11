import React from "react";
import { array } from "prop-types";
import Icon from "../../common/Icon";
import moment from "moment";
import {
  Title,
  Item,
  ListWrapper,
  Description,
  Info,
  InfoStyle,
  Name,
  Empty
} from "./styles";

function ArticleList({ articlesList }) {
  const isFilled = articlesList && articlesList.length > 0;
  return (
    <ListWrapper>
      <Title>Articles</Title>
      {isFilled ? (
        articlesList.map((e, i) => (
          <Item key={i}>
            <Info>
              <Description recipient>
                <Icon name="Papers" />
              </Description>
              <Name>{e.title}</Name>
              <InfoStyle>{`Published at:${moment(e.metadata.publishedAt).format(
                "L"
              )}`}</InfoStyle>
            </Info>
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
  articlesList: array
};
