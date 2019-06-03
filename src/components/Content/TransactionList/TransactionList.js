import React from "react";
import { arrayOf, object } from "prop-types";
import Icon from "../../common/Icon";
import {
  Title,
  Item,
  ListWrapper,
  Description,
  AccInfo,
  InfoStyle,
  Arrow,
  Name,
  Empty
} from "./styles";

function TransactionList({ transfers }) {
  const isFilled = transfers.length > 0;
  return (
    <ListWrapper>
      <Title>Articles</Title>
      {isFilled ? (
        transfers.map((e, i) => (
          <Item key={i}>
            <AccInfo>
              <Description recipient>
                <Icon name="Transactions" />
              </Description>
              <InfoStyle>Origin Acc: INFO 1</InfoStyle>
              <InfoStyle>Document: INFO 2</InfoStyle>
              <Name>{e.recipient.name}</Name>
            </AccInfo>
            <Arrow>
              {" "}
              <Icon name="To" width="25px" height="25px" />{" "}
            </Arrow>
            <AccInfo spacing="true">
              <Description>
                {/* {e.dueDate} / R$ {e.ammount && formatNumber(e.ammount)} */}
              </Description>
              <InfoStyle>{`data:01/10/2018 - hour:xx:xx:xx`}</InfoStyle>
              {/* <InfoStyle>
                {e.documentType.toUpperCase()}
                {`: ${e.document}`}
              </InfoStyle> */}
              <Name>{e.favoredName}</Name>
            </AccInfo>
          </Item>
        ))
      ) : (
        <Empty>No Articles to display</Empty>
      )}
    </ListWrapper>
  );
}

export default TransactionList;

TransactionList.propTypes = {
  transfers: arrayOf(object)
};
