import React, { Fragment } from "react";
import { func, object } from "prop-types";

import Filter from "../../../common/Filter";
import Dropdown from "../../../common/Dropdown";
import { Label, Wrapper, FormItem } from "./styles";

function ContentFilters({ onFilter, defaultFilter }) {
  const componentLabels = {
    filterButton: "APPLY",
    filterLabel: "FILTER_BY"
  };
  return (
    <Wrapper data-test="DashboardFilters">
      <Filter
        onFilter={onFilter}
        defaultFilterState={defaultFilter}
        componentLabels={componentLabels}
      >
        {(changeFunc, state) => {
          return (
            <Fragment>
              <FormItem>
                <Label>CATEGORY</Label>
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
                  <Label>PERIOD</Label>
                  <Dropdown
                    onChange={changeFunc}
                    name="range"
                    list={[
                      { name: "author 1", value: 15 },
                      { name: "author 2", value: 30 },
                      { name: "author 3", value: 60 }
                    ]}
                    value={state && state.filter["range"]}
                    width={100}
                    noEmptySelection
                  />
                </FormItem>
              )}
            </Fragment>
          );
        }}
      </Filter>
    </Wrapper>
  );
}

ContentFilters.propTypes = {
  onFilter: func.isRequired,
  defaultFilter: object
};

export default ContentFilters;
