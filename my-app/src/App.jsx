/** @jsx jsx */
import { Fragment } from 'react'
import Main from './containers/Main.jsx';
import { AppWrap } from './assets/index.style.js'

const App = () => {
  return (
    <Fragment>
      <AppWrap>
        <Main/>
      </AppWrap>
    </Fragment>
  );
};

export default App;
