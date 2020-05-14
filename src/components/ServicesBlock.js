import React from 'react';
import _ from 'lodash';
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';

import {htmlToReact, markdownify} from '../utils';

export default class ServicesBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className="block services-block outer">
              <div className="inner">
                <div className="block-inside">
                  <div className="block-header">
                    <h2 className="block-title line-top">{_.get(this.props, 'section.title')}</h2>
                    {_.get(this.props, 'section.subtitle') &&
                    <p className="block-subtitle">
                      {htmlToReact(_.get(this.props, 'section.subtitle'))}
                    </p>
                    }
                  </div>
                  {_.get(this.props, 'section.serviceslist') &&
                  <div className="block-content">
                    <div className="services-list">
                      {_.map(_.get(this.props, 'section.serviceslist'), (service, service_idx) => (
                      <div key={service_idx} className="service">
                        <Rotate>
                          <span className="service-counter" aria-hidden="true">{service_idx + 1}.</span>
                        </Rotate>
                        <Zoom>
                          <h3 className="service-title">{_.get(service, 'title')}</h3>
                          <div className="service-text">
                            {markdownify(_.get(service, 'content'))}
                          </div>
                        </Zoom>
                      </div>
                      ))}
                    </div>
                  </div>
                  }
                </div>
              </div>
            </section>
        );
    }
}
