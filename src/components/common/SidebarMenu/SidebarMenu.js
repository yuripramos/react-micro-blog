import React, { Component } from "react";
import {
  ListMenuItems,
  Item,
  Span,
  MenuList,
  Divisor,
  LeftBorder,
  ListItem
} from "./styles";
import { string, bool } from "prop-types";
import { redirect } from "../../../utils/redirect";

class SidebarMenu extends Component {
  constructor(props) {
    super(props);
    this.isActive = this.isActive.bind(this);
  }

  isActive(path) {
    const { currentLocation } = this.props;
    return currentLocation.includes(path);
  }

  render() {
    const { desktop } = this.props;
    if (desktop) {
      return (
        <ListMenuItems>
          <Item
            onClick={() => redirect("/lastarticles")}
            active={this.isActive("/lastarticles")}
          >
            <Span>LAST ARTICLES</Span>
          </Item>
          <Item
            onClick={() => redirect("/authors")}
            active={this.isActive("/authors")}
          >
            <Span>AUTHORS</Span>
          </Item>
          <Item
            onClick={() => redirect("/vision")}
            active={this.isActive("/vision")}
          >
            <Span>OUR VISION</Span>
          </Item>
          <Item
            onClick={() => redirect("/contact")}
            active={this.isActive("/contact")}
          >
            <Span>CONTACT</Span>
          </Item>
        </ListMenuItems>
      );
    } else {
      return (
        <MenuList>
          <Divisor />
          <ListItem
            onClick={() => redirect("/lastarticles")}
            active={this.isActive("/lastarticles")}
          >
            <LeftBorder />
            LAST ARTICLES
          </ListItem>
          <ListItem
            onClick={() => redirect("/authors")}
            active={this.isActive("/authors")}
          >
            <LeftBorder />
            AUTHORS
          </ListItem>
          <ListItem
            onClick={() => redirect("/vision")}
            active={this.isActive("/vision")}
          >
            <LeftBorder />
            OUR VISION
          </ListItem>
          <ListItem
            onClick={() => redirect("/contact")}
            active={this.isActive("/contact")}
          >
            <LeftBorder />
            CONTACT
          </ListItem>
        </MenuList>
      );
    }
  }
}

export default SidebarMenu;

SidebarMenu.propTypes = {
  currentLocation: string,
  desktop: bool
};
