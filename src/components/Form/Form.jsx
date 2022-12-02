import React, {useState} from 'react';
import Button from '../Button';
import InputField from '../InputField';

const Form = () => {
  // fyi: an author can be a user or an org.
  const [authorName, setAuthorName] = useState('');
  const [repoName, setRepoName] = useState('');

  const handleOnClick = () => {
    // route to new path on click
    if(authorName) {
      const pathname = '/' + authorName + '/' + repoName;
      window.location.href = pathname;
    }
  }

  return (
    <div>
      <InputField
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
        placeholderText="Enter User or Org Name"
      />
      <InputField
        value={repoName}
        onChange={(e) => setRepoName(e.target.value)}
        placeholderText="Enter Repository Name"
      />
      <Button
      onClick={handleOnClick}
      >
        Submit
      </Button>
    </div>
  );
}

export default Form;
