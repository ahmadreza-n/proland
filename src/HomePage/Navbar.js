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
                  <h4 className="text-white">About</h4>
                  <p className="text-muted">
                    {`Lorem ipsum is placeholder text commonly used in the graphic, 
                    print, and publishing industries for previewing layouts and visual mockups.`}
                  </p>
                </div>
                <div className="col-sm-4 offset-md-1 py-4">
                  <h4 className="text-white">Contact</h4>
                  <ul className="list-unstyled">
                    <li>
                      <a href="http://twitter.com" className="text-white">
                        <i className="fab fa-twitter mr-2" />
                        {'Follow on Twitter'}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white">
                        <i className="fab fa-facebook mr-2" />
                        {'Like on Facebook'}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white">
                        <i className="fab fa-instagram mr-2" />
                        {'Follow on Instagram'}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Collapse>
          <NavbarBrand href="/" className="mr-auto">Hyper Protein Proland</NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="mr-2" />
        </Navbar>
      </div>
    );
  }
}

export default Example;
