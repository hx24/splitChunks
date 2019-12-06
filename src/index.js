import React from 'react';
import ReactDOM from 'react-dom';
// import Page from './Page'

const App = () => {
  let Page = null;
  let Home = null;

  import(/* webpackChunkName: "Page" */ './Page').then(Comp => {
    Page = Comp;
  });

  import(/* webpackChunkName: "Home" */ './Home').then(Comp => {
    Home = Comp;
  });

  return (
    <div>
      <div>App</div>
      <Page />
      <Home />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
