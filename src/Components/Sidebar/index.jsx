import React from "react";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import SidebarChat from "../SidebarChat";
import "./Sidebar.css";

const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar__header">
      <Avatar />
      <div className="sidebar__headerRight">
        <IconButton>
          <DonutLargeIcon />
        </IconButton>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>

    <div className="sidebar__search">
      <div className="sidebar__searchContainer">
        <SearchIcon />
        <input type="text" placeholder="Search or start new chat" />
      </div>
    </div>

    <div className="siderbar__chats">
      <SidebarChat />
      <SidebarChat />
      <SidebarChat />
    </div>
  </div>
);

export default Sidebar;
