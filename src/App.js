import React, {useState, useEffect} from 'react';
import Form from './components/Form'
import Feed from './components/Feed';
import useReactPathname from './hooks/useReactPathname';
import './App.css';

function App() {
  const pathname = useReactPathname();
  let currentPage;

   if(pathname === '/') {
    currentPage =
      <React.Fragment>
         <Form />
      </React.Fragment>
  } else {
    currentPage =
      <React.Fragment>
      <Feed pathname={pathname} />
      </React.Fragment>
  }

  return (
    <div className="App">
    {currentPage}
    </div>
  );
}

export default App;
// toDo: explain why we pass in a button name as a child
// https://www.netlify.com/blog/2020/12/17/react-children-the-misunderstood-prop/
//

/*
Update UI styles
https://www.awwwards.com/inspiration/application-form-miele-x



  */
