import { useSelector, useDispatch } from 'react-redux'
import socketIOClient from "socket.io-client";
import React from "react";
import { Search } from "@material-ui/icons";
import "./Widgets.css";
import { updateSearchText } from '../redux/tweetsSlice'

function Widgets() {
  const searchText = useSelector((state) => state.tweets.searchText)
  const dispatch = useDispatch();
  const updateSearch = (e) => {
    dispatch(updateSearchText(e.target.value));
    const socket = socketIOClient();
    socket.emit('changeRule', e.target.value);
  }

  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Twitter" onChange={updateSearch} value={searchText} type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

      </div>
    </div>
  );
}

export default Widgets;