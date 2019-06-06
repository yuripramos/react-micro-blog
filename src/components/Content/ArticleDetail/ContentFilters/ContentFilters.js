import React, { Fragment } from "react";
import { func, object, arrayOf, string, shape } from "prop-types";

import Filter from "../../../common/Filter";
import Dropdown from "../../../common/Dropdown";
import { Label, Wrapper, FormItem } from "./styles";

function ContentFilters({ authorsList, onFilter, defaultFilter }) {
  const componentLabels = {
    filterButton: "APPLY",
    filterLabel: "FILTER BY"
  };
  const authorsArray =
    authorsList &&
    authorsList.map(c => {
      return { name: c.name, value: c.name };
    });
  authorsArray.unshift({ name: "", value: "" });
  return (
    <Wrapper>
      {authorsArray && (
        <Filter
          onFilter={onFilter}
          defaultFilterState={defaultFilter}
          componentLabels={componentLabels}
        >
          {(changeFunc, state) => {
            return (
              <Fragment>
                <FormItem>
                  <Label>TYPE</Label>
                  <Dropdown
                    onChange={changeFunc}
                    name="type"
                    list={[
                      {
                        name: "author",
                        value: "author"
                      },
                      {
                        name: "last pubs",
                        value: "last pubs"
                      }
                    ]}
                    value={state && state.filter["type"]}
                    width={100}
                    noEmptySelection
                  />
                </FormItem>
                {state && state.filter["type"] === "author" && (
                  <FormItem>
                    <Label>Author</Label>
                    <Dropdown
                      onChange={changeFunc}
                      name="range"
                      list={authorsArray}
                      value={state && state.filter["range"]}
                      width={240}
                      noEmptySelection
                    />
                  </FormItem>
                )}
              </Fragment>
            );
          }}
        </Filter>
      )}
    </Wrapper>
  );
}

ContentFilters.propTypes = {
  onFilter: func.isRequired,
  defaultFilter: object,
  authorsList: arrayOf(
    shape({
      name: string,
      id: Number
    })
  )
};

export default ContentFilters;
