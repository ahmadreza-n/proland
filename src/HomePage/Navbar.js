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
                    {'پرولند اولین ارائه کننده کالباس و سوسیس در ایران.'}
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
                        href="https://goo.gl/maps/93959zCv9d4rSc9L9"
                        className="text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="far fa-map-marker-alt ml-2" />
                        {'به ما سر بزنید'}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Collapse>
          <NavbarBrand href="/" className="ml-auto">پرولند</NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="ml-2" />
        </Navbar>
      </div>
    );
  }
}

export default Example;
