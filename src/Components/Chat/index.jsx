import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

import "./Chat.css";

const Chat = () => (
  <div className="chat">
    <div className="chat__header">
      <Avatar />

      <div className="chat__headerInfo">
        <div>Room name</div>
        <span>Last seen at...</span>
      </div>

      <div className="chat__headerRight">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>

    <div className="chat__body">
      <p className="chat__message">
        <span className="chat__name">Sonny</span>
        This is a message
        <span className="chat__timestamp">{new Date().toUTCString()}</span>
      </p>
      <p className="chat__message chat__receiver">
        <span className="chat__name">Sonny</span>
        This is a message
        <span className="chat__timestamp">{new Date().toUTCString()}</span>
      </p>
      <p className="chat__message">
        <span className="chat__name">Sonny</span>
        This is a message
        <span className="chat__timestamp">{new Date().toUTCString()}</span>
      </p>
    </div>
  </div>
);

export default Chat;
