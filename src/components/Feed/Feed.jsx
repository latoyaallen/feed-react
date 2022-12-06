import React, {useState, useEffect} from 'react';
import Button from '../Button';

const Feed = ({pathname}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // https://stackoverflow.com/questions/48699820/how-do-i-hide-api-key-in-create-react-app
    const token = 'todo'
    const splitPath = pathname.split("/");
    const authorName = splitPath[1];
    const repoName = splitPath[2];
    console.log('authorName', authorName); // an author can be a user or an org
    console.log('repoName', repoName);
    const API_ENDPOINT = 'https://api.github.com/repos/' + authorName + '/' + repoName + '/commits'
    fetch(API_ENDPOINT, {
      headers: {
        Authorization: `token ${token}`
      }
    })
      .then(res => res.json())
      .then(setData)
  },[])
}

export default Feed;
