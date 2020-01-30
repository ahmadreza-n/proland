import React, { PureComponent } from 'react';

import NavBar from './Navbar';
import CardList from './CardList';

class HomePage extends PureComponent {
  render() {
    return (
      <>
        <NavBar />
        <section className="jumbotron text-center">
          <div className="container">
            <h1>Album example</h1>
            <p className="lead text-muted">
              {`
              Something short and leading about the collection below—its contents, 
              the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.
              `}
            </p>
            <p>
              <a href="#" className="btn btn-primary mr-2">Main call to action</a>
              <a href="#" className="btn btn-secondary mr-2">Secondary action</a>
            </p>
          </div>
        </section>
        <CardList />
        <footer className="text-muted">
          <div className="container">
            <p className="float-right">
              <a href="#">Back to top</a>
            </p>
            <p>All rights reserved.</p>
          </div>
        </footer>
      </>
    );
  }
}

export default HomePage;
