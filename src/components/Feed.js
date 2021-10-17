
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import Spinner from "./Spinner";

function Feed({feeds}) {
  const tweetsData = useSelector((state) => state.tweets.tweetsData)

  const [page, setPage] = useState(0);
  const [tweetsList, setList] = useState(feeds);

  const loadNewSet = () => {
    let currentPage = page;
    setPage(++currentPage);
  };

  useEffect(() => {
    const limit = 10;
    const newSet = tweetsData.slice((page -1) * limit, (page * limit) - 1);
    const realSet = tweetsList;
    realSet.concat(newSet);
    setList(realSet);
  }, [page, tweetsData, tweetsList])

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      {feeds.map((tweet) => (
        <Post key={tweet.id}
              displayName={tweet.displayName} 
              userName={tweet.userName}
              text={tweet.text}
              replies={tweet.replies}
              retweets={tweet.retweets}
              likes={tweet.likes}
        />
      ))}
    </div>
  );
}

export default Feed;