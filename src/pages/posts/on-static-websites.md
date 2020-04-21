---
template: post
title: On static websites
subtitle: ''
date: 2020-04-15T00:00:00-04:00
thumb_img_path: ''
content_img_path: ''
excerpt: ''

---
There are few people who do not at least recognize the name Wordpress. Released in 2003, it  became the benchmark for open source content management powering innumerable blogs and corporate websites.  Architecturally, it follows a standard pattern of a web server running the Wordpress core code and extensions behind which sits a database housing the content.  

This works reliably but does have some limitations which includes;

* Performance - It takes a finite amount of time to construct each page
* Security - Hackers are constantly looking for new ways to attack the system
* Scale - As the number of site visitors increases so to does the time taken to generate each page and so additional resources are required

It is true that some of these issues can be resolved or at least mitigated through additional components such as Varnish. But this adds to the overall complexity of the deployment and associated costs. Being able to seamlessly scale up to 100k, 1M or more page views because your company was featured on the news can require additional complexity and cost.

## Static Site Builders

The issues above along with others has led to a new approach to content management in the form of static site builders. In this case, the entire website is essentially compiled to a set of raw html files. Javascript is then used to handle navigation once on the site has loaded which results in a blazing fast experience to the end user.  Our site is built using the highly popular [GatsbyJs](https://www.gatsbyjs.org/) framework.  Content management for the site and the associated build process can be complex but this has become greatly simplified over recent years with startups such as [Stackbit](https://app.stackbit.com) providing a fully integrated workflow in a few clicks. 

There are some downsides to this approach most significant of which is the cost to run build operations.  [Netlify]() is one of the most popular hosts for static sites and has a very seamless build process to run site generation. Their free tier includes 300 minutes of included build time but that can be easily consumed. Large sites will take longer to generate because each navigable page will be expanded.  Sites with frequent updates will also cost more in upfront build time.

## Conclusion

For smaller websites or sites looking to enable rich web application features, the use of a static site builder such as Gatsby is well worth considering.  Ongoing costs for serving the site are significantly lower than a similar site running on Wordpress or a similar traditional CMS and the relatively infrequent updates to the site can easily place many within the free tier for a service provider such as Netlify.  There are, of course, other costs and tradeoffs but the performance, scalability and tolerance of such sites is typically greatly improved.