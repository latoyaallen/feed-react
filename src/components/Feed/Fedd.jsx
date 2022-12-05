import React, {useState, useEffect} from 'react';
import Button from './Button';

const Feed = ({path}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const token = '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'
    const splitPath = path.split("/");
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
