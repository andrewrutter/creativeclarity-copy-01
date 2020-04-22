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
            Creative Clarity Inc
          </p>
          {_.get(this.props, 'pageContext.site.siteMetadata.footer.has_social') && <Social {...this.props}/>}
        </div>
      </div>
      <div class="inner site-info">
        <div class="site-footer-inside">
          <p class="">11770 Haynes Bridge Rd, Ste 205-508 Alpharetta, GA 30009<br/>
              <a href="tel:8332703304">(833) 270-3304</a>
            </p>
            <ul class="social-links">
              <li>&copy;2020 All Rights Reserved.</li>
            </ul>
          </div>
        </div>
      </footer>
      );
    }
}
