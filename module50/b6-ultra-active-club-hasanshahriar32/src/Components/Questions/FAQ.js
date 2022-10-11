import React from 'react';

const FAQ = () => {
    return (
        <div id='faq' className='m-3 rounded text-warning'>
            <h1 className='text-4xl mt-12 mb-5'>FAQs 🤔</h1>
     <div tabindex="0" class="collapse group">
  <div class="collapse-title bg-primary hover:bg-secondary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
    <h3 className='text-xl'>Q1: How does react work?</h3>
  </div>
  <div class="collapse-content bg-primary  text-primary-content group-focus:bg-secondary group-focus:text-secondary-content"> 
    <p>React is a JavaScript library developed by Facebook that is maintained by an ever-growing community. Because of the ability to render React Views both on the client and on the server, the framework is very popular among many developers. So, in this article, I will tell you some basic information about the work of ReactJS.

Although other frameworks have already followed the path of isomorphic rendering, ReactJS differs from them in one fundamental function: the virtual Document Object Model . The views do not modify the DOM of the browser directly, but hold it virtually in the components and are thus completely detached from any dependencies. Methods such as renderToString  can be used to render the React View components on the server.

Some large companies have already shown that React works: Not only parts of Facebook were developed with it, but platforms such as Instagram and the web version of WhatsApp also use the framework. Search Engine Optimization, or SEO for short, is a knockout criterion, especially for pages that are supposed to play a role in search engines. Therefore it should be noted that the server-side rendering of web applications developed with frameworks such as AngularJS is very time-consuming. For example, creating snapshots of the HTML code with PhantomJS is not exactly easy for dynamic pages  and also not particularly efficient.

In React, on the other hand, all components create their own virtual DOM. This not only allows them to be rendered on the server but also makes unit testing easier. If components change, for example, due to user interactions or new responses from the server, the virtual DOM does not attempt to re-render the entire application, but only the smallest affected element.

</p>
  </div>
</div>
     <div tabindex="0" class="collapse group">
  <div class="collapse-title hover:bg-secondary bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
    <h3 className='text-xl'>Q2: Describe differences between props vs state.</h3>
  </div>
  <div class="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content"> 
    <p>Props are pass down from the parent component to its children, whereas the state is produce and maintained inside the component. As a result, props are immutable and should only be pass down, not modified. State, on the other hand, is dynamic and internal to the component, thus it isn't pass on to children.</p>
  </div>
</div>
     <div tabindex="0" class="collapse group">
  <div class="collapse-title bg-primary hover:bg-secondary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
    <h3 className='text-xl'>Q3: What does useEffect hook do outside of fetching data?</h3>
  </div>
  <div class="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content"> 
    <p>useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect. The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.</p>
  </div>
</div>
        </div>
    );
};

export default FAQ;