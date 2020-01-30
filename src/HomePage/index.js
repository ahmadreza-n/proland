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
            <h1>درباره محصولات</h1>
            <p className="lead text-muted">
              {`
              طعم سلامتی!
              `}
            </p>
            {/* <p>
              <a href="#" className="btn btn-primary ml-2">Main call to action</a>
              <a href="#" className="btn btn-secondary ml-2">Secondary action</a>
            </p> */}
          </div>
        </section>
        <CardList />
        <footer className="text-muted">
          <div className="container">
            <p className="float-left">
              <a
                href="#"
                title="برگشت به بالا"
              >
                <i className="far fa-arrow-up" />
              </a>
            </p>
            <p>تمامی حقوق سایا محفوظ میباشد.</p>
          </div>
        </footer>
      </>
    );
  }
}

export default HomePage;
