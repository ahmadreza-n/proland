import React, { PureComponent } from 'react';

import products from './images';

class Example extends PureComponent {
  render() {
    return (
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {products && products.map((l) => (
              <div className="col-md-4">
                <div key={l.id} className="card mb-4 shadow-sm" style={{ width: '18rem' }}>
                  <img src={l.src} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{l.name}</h5>
                    <p className="card-text">
                      {`Some quick example text to build on the card title
                        and make up the bulk of the card's content.`}
                    </p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Example;
