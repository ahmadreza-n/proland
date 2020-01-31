import React, { PureComponent } from 'react';

import products from './images';

class Example extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      list: products || [],
    };
  }

  render() {
    const { list } = this.state;
    return (
      <div className="album py-3 bg-light">
        <div className="container">
          <div className="row">
            {list && list.map((item) => (
              <div key={item.id} id="product" className="col-md-4">
                <div className="card mb-4 shadow-sm" style={{ width: '18rem', marginLeft: 'auto', marginRight: 'auto' }}>
                  <img src={item.src} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.persianName}</h5>
                    <p className="card-text">
                      {item.description}
                    </p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
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
