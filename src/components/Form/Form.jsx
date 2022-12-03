import React, {useState} from 'react';
import Button from '../Button';
import InputField from '../InputField';
import styles from './Form.module.css';

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
    <div className={styles['wrapper']}>
      <InputField
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
        labelAboveField="User or Organization Name"
      />
      <InputField
        value={repoName}
        onChange={(e) => setRepoName(e.target.value)}
        labelAboveField="Repository Name"
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
