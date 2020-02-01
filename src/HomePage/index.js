import React, { PureComponent } from 'react';

import NavBar from './components/Navbar';
import CardList from './components/CardList';

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
              تمامی محصولات پرولند در حضور مشتری تولید میشه و
               میتونین با خیال راحت از طعم واقعی هر نوع فراورده گوشتی و مرغی لذت ببرین.\n
               برای دیدن همه محصولات از مغازه ما دیدن کنین.
              `}
            </p>
            {/* <p>
              <a href="#" className="btn btn-primary ml-2">Main call to action</a>
              <a href="#" className="btn btn-secondary ml-2">Secondary action</a>
            </p> */}
          </div>
        </section>
        <div className="row justify-content-center mb-5">
          <video
            controls
            width="80%"
          >
            <source src="videos/process.mp4" type="video/mp4" />
            <track
              default
              kind="captions"
              srcLang="en"
            />
            {'Sorry, your browser doesn\'t support embedded videos.'}
          </video>
        </div>
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
            <p>تمامی حقوق سایت محفوظ میباشد.</p>
          </div>
        </footer>
      </>
    );
  }
}

export default HomePage;
