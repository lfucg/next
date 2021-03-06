---
layout: with-navigation
stylesheets: ["/css/discovery.css"]
title: Discovery Report
local-javascripts: ["/js/index.js"]
remote-javascripts: ["http://d3js.org/d3.v3.min.js"]
---

# LexingtonKy.gov Discovery Phase Report

<h2>Executive summary</h2>

<p>The City of Lexington is redesigning LexingtonKy.gov with the primary goal of improving service delivery to its residents and stakeholders. The team responsible for the redesign has completed the initial discovery phase aimed at understanding the current site and its associated services so that they might be improved. The following is a summary of the findings from this work performed in early 2015.</p>

<h2>Introduction to the redesign</h2>

<p>The City has prioritized this project in order to address several issues with the current site that are commonly reported by residents and city employees.</p>

<ul>
<li>It is structured around departmental hierarchies rather than intuitive service areas.</li>
<li>It is difficult to use on mobile devices, which now account for half of traffic.</li>
<li>Rather than being focused on quickly facilitating action, it is largely an information broadcast model.</li>
<li>The content is lengthy, lacks structure, and often falls out of date.</li>
<li>The content management system is difficult to use, even for experienced content creators.</li>
<li>Updating the website is largely a secondary task that increases workload for city employees rather than creating efficiencies that make work easier.</li>
</ul>


<h2>Goals of the redesign</h2>

<p>In short, the mission is to make it <a href="https://www.gov.uk/transformation">simple, clear, and fast</a> to interact with the City online. Below are several attributes of a successful site:</p>

<ul>
<li>Works well on mobile devices.</li>
<li>Is beautiful and easy to use.</li>
<li>Has concise information that is accessible to everyone.</li>
<li>Reflects the unique character of a great city.</li>
<li>Is structured around the expectations of residents.</li>
<li>Gives content creators clear feedback so that they can continually improve the site.</li>
<li>Is action-oriented, to get people in and out quickly.</li>
<li>Is a key information sharing tool that decreases workload for city employees. As a result the site is naturally kept up-to-date.</li>
</ul>


<h2>The role of the redesign in future digital services</h2>

<p>Lexingtonians have come to expect a great deal from LexingontonKY.gov. The same way that they do business online with their bank, mobile phone provider, or clothing retailer, they expect to interact with city services online, quickly, and at the time of their choosing. The City has made strides in this regard but still many interactions require calling, printing, scanning, faxing or standing in line between 9am and 5pm. While transactional services are generally beyond the scope of the website redesign, their futures are very much interconnected.</p>

<p>LexingtonKy.gov is the jumping off point for all present and future digital servcies. The structure of the site and information about the services will play a large role in whether residents find them, understand them, and use them successfully. The redesign also defines the experience that residents will expect when interacting with associated digital services. A successful redesign produces a set of tools for integrating future components without requiring loads of expensive design and custom interface work. For this reason, the site redesign includes a deliverable known as a pattern portfolio. It's a set of LexingtonKy.gov interface components that future applications use to quickly and cheaply adopt the look and feel of the main site.</p>

<p>At a higher level, a core promise of the redesign lies in building the project iteratively, in manageable pieces, guided by continual feedback from real users. This agile approach is a core practice of successful organizations and is an increasingly common way for governments to improve service at less cost to taxpayers.</p>

<h2>Analysis from the discovery phase</h2>

<p>When talking with people, the first comment is usually that the website is hard to navigate as it is built around the organizational chart of the government rather than around services they need. The following is an interactive tool that shows the quantity of pages in each section of the site.</p>

<p>Due to the structure of the site, the City has very limited ability to bring forward commonly requested information. As an example, finding the schedule for routine trash pickup takes several well educated guesses through the drop-down menus:  <code>City Government</code> > <code>Environmental Quality &amp; Public Works</code> > <code>Division of Waste Management</code>. Even people we talked to with deep knowledge of the government found this structure difficult to negotiate at times.</p>

<p>Note that the large majority of the site is nested within the City Government section.</p>

<h4>Organization of the current site (clickable!) </h4>

<p>Click on a section to show pages inside of it. Hover for number of pages.</p>

<!--[if lt IE 9]>
<p style="color: darkred">You are using an older browser that is not currently supported. <a href="http://whatbrowser.org/">Upgrade your browser today</a> to fully use the site.</p>
[endif]-->


<p class="chart" id="chart"></p>


<h4>The site in rough service categories</h4>

<p>People that arrive at the site from Google or Bing searches comprise nearly 60% of visitors. They show a different way of thinking about the site. Rather than departments, they tend think about specific services like trash pickup or park schedules:</p>

<p>This view is created by finding keywords inside of search terms. For example, the search term <code>woodland arts fair lexington ky</code> was matched on the term <code>woodland</code> that we put in the <code>parks</code> category.</p>

<p class="chart" id="chart-inverse"></p>


<h2>Activities from the discovery phase</h2>

<p>The primary focus of discovery was to produce actionable analytics. It also led to a couple of quick wins along the way.</p>

<ul>
<li>Searching within the current site was often 'down' or unavailable to users. When users were able to search, what they searched <em>for</em> was not being recorded for analysis. We fixed these issues to help make the site more functional and to enable better performance insight.</li>
<li>Several content creators highlighted that it was hard to understand content performance. The analytics for their area was mixed in with every other area of the site. We solved this problem by joining multiple data sources to create separate reports for different service areas.</li>
<li>We gathered information from other cities engaged in similar work

<ul>
<li><a href="http://austintexas.gov/page/phase-one-documentation">Austin</a></li>
<li><a href="http://digifrodo.tumblr.com/">Oakland</a></li>
<li><a href="http://alpha.phila.gov/">Philadelphia</a></li>
<li><a href="http://www.sandiego.gov/mayor/pdf/newsreleases/2014/news140826websiteannoucement.pdf">San Diego</a></li>
</ul>
</li>
</ul>

<h2>Redesign process at a glance</h2>

<p>In order to build the site iteratively the project is broken into phases. By and large, in each phase the project team presents a short cyle of work to real users so that their feedback can inform next steps.</p>

<h3>Discovery phase (Complete)</h3>

* Perform analysis to understand the current site and ways it can likely be improved
* Set initial key performance indicators (KPIs) for the next phase
* Define a set of activities for the next phase
* Form the team necessary to continue
* About two months long

<h5>Initial Key Performance Indicators (KPIs) for LexingtonKy.gov</h5>

<p>Based on our analysis, we have a few initial KPIs. These may change as we gain insight but these are good starting points:</p>

* Lower the bounce rate, or number of times that people encounter a page and immediately leave it
* Lower the quantity of in-site searches (aside from the ones that start from the home page)
  * In-site searches usually indicate that a user expected to find certain information but did not
* Lower the time to complete common tasks
 * For example, lower the time to find a pool schedule or holiday pickup time for trash

<h3>Alpha phase (Summer 2015)</h3>

* Show temporary, experimental pages to a wide array of users to learn what makes sense to them
  * Pages do not necessarily need to be created in the new CMS
  * The experiments should use whatever is available and quick to deploy
* Perform <a href="https://en.wikipedia.org/wiki/Card_sorting">card sorting</a> exercises to define the service categories that are intuitive to users
* Focus on high-traffic portions of the site. Analysis highlights several service areas to start with:
  * Events, parks, pools, golf
  * Permitting for home and small business users
  * Requesting various traffic/incident reports or learning about police jobs
* Test integrations with associated service
* Finish with a basic working system and a good understanding of how the service should operate
* About two months

### Beta phase

* Create a publicly accessible version of the new site on the new CMS platform
  * A link from the existing site invites users to give it a try and provide feedback
* To begin, it should be a rough draft that covers as many service areas as possible
* The redesign team continues iterative user research with a wide variety of users
* As the beta progresses, user feedback is continually collected as content is fleshed-out, rearranged, and improved
* The number of users should grow as the site improves
* City stakeholders decide when the site meets the standards to be made live
* About three to six months

### Live phase

* The City has continual feedback mechanisms from user research and analytics
* The site continues to evolve based on this feedback
* Digital services go through a similar design process in order to integrate with the site and meet the needs of residents
