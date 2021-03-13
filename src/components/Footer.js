import React from 'react';
import _ from 'lodash';

import {htmlToReact, Link} from '../utils';
import Social from './Social';

export default class Footer extends React.Component {
  render() {
    return (<footer id="colophon" className="site-footer outer">
      <div className="inner">
        <div className="site-footer-inside">
          <p>
            <Link to="https://www.bbb.org/us/ga/milton/profile/computer-software-developers/creative-clarity-inc-0443-27924878" target="_blank" rel="noopener">
              <img className="bbb" src="/images/bbb.png"></img>
            </Link>
          </p>
          {_.get(this.props, 'pageContext.site.siteMetadata.footer.has_social') && <Social {...this.props}/>}
        </div>
      </div>
      <div className="inner site-info">
        <div className="site-footer-inside">
          <p className="">11770 Haynes Bridge Rd, Ste 205-508 Alpharetta, GA 30009<br/>
              <a href="tel:8332703304">(833) 270-3304</a>
            </p>
            <ul className="social-links">
              <li>&copy;2020 All Rights Reserved.</li>
            </ul>
          </div>
        </div>
      </footer>
      );
    }
}
