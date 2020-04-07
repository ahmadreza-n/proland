import React, { PureComponent } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';

class Example extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }));
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <Navbar color="dark" dark>
          <Collapse isOpen={isOpen} navbar>
            <div className="container">
              <div className="row">
                <div className="col-sm-8 col-md-7 py-4">
                  <h4 className="text-white">درباره ما</h4>
                  <p className="text-muted">
                    {`پرولند تولید کننده سوسیس و کالباس سالم از گوشت و مرغ تازه و بدون هیچگونه ضایعاتی است.
                     میتونین با خیال راحت و بدون نگرانی از طعم واقعی سوسیس و کالباس لذت ببرین`}
                  </p>
                </div>
                <div className="col-sm-4 offset-md-1 py-4">
                  <h4 className="text-white">ارتباط با ما</h4>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="https://instagram.com/hyper_proland?igshid=1p31lk3qrj9t0"
                        className="text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-instagram ml-2" />
                        {'در اینستاگرام دنبال کنید'}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://goo.gl/maps/fx7vJUNrZwibKTLf8"
                        className="text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="far fa-map-marker-alt ml-2" />
                        {'به ما سر بزنید'}
                      </a>
                    </li>
                    <li style={{ color: '#fff' }}>
                      <i className="far fa-phone ml-2" />
                      {'021-86127330'}
                    </li>
                    <li style={{ color: '#fff' }}>
                      <i className="far fa-map-pin ml-2" />
                      {'شهرک غرب، بلوار دادمان، نرسیده به پل یادگار امام، پلاک ۱۳۸'}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Collapse>
          <NavbarBrand href="/" className="ml-auto">
            <img src={'images/logo.png'} alt="logo" className="ml-2" style={{ width: 40, height: 40 }} />
            {'پرولند'}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="ml-2" />
        </Navbar>
      </div>
    );
  }
}

export default Example;
