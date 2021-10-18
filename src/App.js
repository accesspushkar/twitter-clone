import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import socketIOClient from "socket.io-client";
import { appendToSet } from '../src/redux/tweetsSlice';
import './App.css';
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";

function App() {
  const dispatch = useDispatch();
  const [list, setTweets] = useState([])

  const saveTweet = (tweet) => {
      dispatch(appendToSet(tweet))
      const temp = list;
      temp.push(tweet);
      setTweets(temp);
  } 

  useEffect(() => {
    const socket = socketIOClient();
    socket.on('connect', () => {
      console.log('Connected to server...');
    })
    socket.on('tweet', (tweet) => {
      const tweetData = {
        id: tweet.data.id,
        text: tweet.data.text,
        displayName: tweet.includes.users[0].name,
        username: `@${tweet.includes.users[0].username}`,
        replies: tweet.data.public_metrics.reply_count,
        retweets: tweet.data.public_metrics.retweet_count,
        likes: tweet.data.public_metrics.like_count,
      }
      saveTweet(tweetData);
    })
  }, []);

  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
