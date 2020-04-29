import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';
import {Helmet} from 'react-helmet';

import {Layout} from '../components/index';
import {htmlToReact, safePrefix} from '../utils';
import {
  FacebookShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
  TumblrShareCount,
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  WeiboShareButton,
  PocketShareButton,
  InstapaperShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  MailruIcon,
  EmailIcon,
  LivejournalIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon,
  WeiboIcon,
} from "react-share";

export default class Post extends React.Component {
    render() {
      console.log(this.props)
        const shareUrl = _.get(this.props, 'location.href');
        const title = _.get(this.props, 'pageContext.frontmatter.title');
        const shareImage = _.get(this.props, 'pageContext.frontmatter.content_img_path');
        return (
            <Layout {...this.props}>
              <Helmet>
                <meta property="og:type" content="article" />
                <meta property="og:title" content={_.get(this.props, 'pageContext.frontmatter.title')} />
                {_.get(this.props, 'pageContext.frontmatter.excerpt') &&
                <meta property="og:description" content={_.get(this.props, 'pageContext.frontmatter.excerpt')} />
                }
              </Helmet>
            <div className="outer">
              <div className="inner">
                <article className="post post-full">
                  <header className="post-header inner-small">
                    <h1 className="post-title line-top">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                    <div className="post-meta">
                      <time className="published"
                        dateTime={moment(_.get(this.props, 'pageContext.frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(this.props, 'pageContext.frontmatter.date')).strftime('%B %d, %Y')}</time>
                    </div>
                    {_.get(this.props, 'pageContext.frontmatter.subtitle') &&
                    <div className="post-subtitle">
                      {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                    </div>
                    }
                  </header>
                  {_.get(this.props, 'pageContext.frontmatter.content_img_path') &&
                  <div className="post-thumbnail">
                    <img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.content_img_path'))} alt={_.get(this.props, 'pageContext.frontmatter.title')} />
                  </div>
                  }
                  <div className="post-content inner-small">
                    {htmlToReact(_.get(this.props, 'pageContext.html'))}
                  </div>
                  <div className="social-wrappers inner-small">
                    <div className="social-wrapper">
                      <FacebookShareButton
                        url={shareUrl}
                        quote={title}
                        className="social-wrapper__share-button"
                      >
                        <FacebookIcon size={32} round />
                      </FacebookShareButton>

                      <div>
                        <FacebookShareCount url={shareUrl} className="social-wrapper__share-count">
                          {count => count}
                        </FacebookShareCount>
                      </div>
                    </div>

                    <div className="social-wrapper">
                      <FacebookMessengerShareButton
                        url={shareUrl}
                        appId="521270401588372"
                        className="social-wrapper__share-button"
                      >
                        <FacebookMessengerIcon size={32} round />
                      </FacebookMessengerShareButton>
                    </div>

                    <div className="social-wrapper">
                      <TwitterShareButton
                        url={shareUrl}
                        title={title}
                        className="social-wrapper__share-button"
                      >
                        <TwitterIcon size={32} round />
                      </TwitterShareButton>

                      <div className="social-wrapper__share-count">&nbsp;</div>
                    </div>

                    <div className="social-wrapper">
                      <TelegramShareButton
                        url={shareUrl}
                        title={title}
                        className="social-wrapper__share-button"
                      >
                        <TelegramIcon size={32} round />
                      </TelegramShareButton>

                      <div className="social-wrapper__share-count">&nbsp;</div>
                    </div>

                    <div className="social-wrapper">
                      <WhatsappShareButton
                        url={shareUrl}
                        title={title}
                        separator=":: "
                        className="social-wrapper__share-button"
                      >
                        <WhatsappIcon size={32} round />
                      </WhatsappShareButton>

                      <div className="social-wrapper__share-count">&nbsp;</div>
                    </div>

                    <div className="social-wrapper">
                      <LinkedinShareButton url={shareUrl} className="social-wrapper__share-button">
                        <LinkedinIcon size={32} round />
                      </LinkedinShareButton>
                    </div>

                    <div className="social-wrapper">
                      <PinterestShareButton
                        url={shareUrl}
                        media={shareImage}
                        className="social-wrapper__share-button"
                      >
                        <PinterestIcon size={32} round />
                      </PinterestShareButton>

                      <div>
                        <PinterestShareCount url={shareUrl} className="social-wrapper__share-count" />
                      </div>
                    </div>

                    <div className="social-wrapper">
                      <RedditShareButton
                        url={shareUrl}
                        title={title}
                        windowWidth={660}
                        windowHeight={460}
                        className="social-wrapper__share-button"
                      >
                        <RedditIcon size={32} round />
                      </RedditShareButton>

                      <div>
                        <RedditShareCount url={shareUrl} className="social-wrapper__share-count" />
                      </div>
                    </div>

                    <div className="social-wrapper">
                      <TumblrShareButton
                        url={shareUrl}
                        title={title}
                        className="social-wrapper__share-button"
                      >
                        <TumblrIcon size={32} round />
                      </TumblrShareButton>

                      <div>
                        <TumblrShareCount url={shareUrl} className="social-wrapper__share-count" />
                      </div>
                    </div>

                    <div className="social-wrapper">
                      <LivejournalShareButton
                        url={shareUrl}
                        title={title}
                        description={shareUrl}
                        className="social-wrapper__share-button"
                      >
                        <LivejournalIcon size={32} round />
                      </LivejournalShareButton>
                    </div>

                    <div className="social-wrapper">
                      <EmailShareButton
                        url={shareUrl}
                        subject={title}
                        body="body"
                        className="social-wrapper__share-button"
                      >
                        <EmailIcon size={32} round />
                      </EmailShareButton>
                    </div>

                    <div className="social-wrapper">
                      <WorkplaceShareButton
                        url={shareUrl}
                        quote={title}
                        className="social-wrapper__share-button"
                      >
                        <WorkplaceIcon size={32} round />
                      </WorkplaceShareButton>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            </Layout>
        );
    }
}
