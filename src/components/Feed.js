
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import Spinner from "./Spinner";
import { Button } from "@material-ui/core";

function Feed() {
  const limit = 10;

  const tweetsData = useSelector((state) => state.tweets.tweetsData)
  const [isLoading, setLoading] = useState(true);
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(1);
  const [tweetsList, setList] = useState([]);

  const loadNewSet = () => {
    let currentPage = page;
    setPage(++currentPage);
    const newSet = tweetsData.slice((page -1) * limit, page * limit);
    const realSet = tweetsList;
    const readySet = realSet.concat(newSet);
    setList(readySet);
    setLoadMore(false);
  };

  useEffect(() => {
    if (tweetsData.length === 10) {
      setLoading(false);
      const newSet = tweetsData.slice((page -1) * limit, page * limit);
      const realSet = tweetsList;
      const readySet = realSet.concat(newSet);
      setList(readySet);
      setLoadMore(false);
    }
    let currentPage = page;
    if (tweetsData.length > (++currentPage * limit) && tweetsData.length % 10 === 0) {
      setLoadMore(true); 
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tweetsData])

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      {isLoading ? (
        <Spinner />
      ) : (
        tweetsList?.map((tweet) => (
        <Post key={tweet.id}
              displayName={tweet.displayName} 
              userName={tweet.userName}
              text={tweet.text}
              replies={tweet.replies}
              retweets={tweet.retweets}
              likes={tweet.likes}
        />
        ))
      )}
      {loadMore ? (
        <Button variant="outlined" onClick={loadNewSet} className="sidebar__tweet" fullWidth>
          Load More
        </Button>
      ) : (
        ''
      )}
    </div>
  );
}

export default Feed;