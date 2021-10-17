import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const DrawerComponent=() => {
    const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer 
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}>
        <List>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/home">Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about">About</Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText onClick={() => setOpenDrawer(false)}>
              <Link to="/contact">Contact</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} >
            <ListItemText>
              <Link to="/users">Users</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
export default DrawerComponent;
