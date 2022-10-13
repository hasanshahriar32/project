import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="mockup-code text-wrap bg-primary text-primary-content">
            <pre data-prefix="$" className="bg-warning text-warning-content font-bold text-lg"><code>What is purpose of react router?</code></pre>
  <pre data-prefix='>'><code>React Router is a standard library for routing in React. </code></pre>
  <pre data-prefix='>'><code>It enables the navigation among views of various components in a React Application,</code></pre>
  <pre data-prefix='>'><code> allows changing the browser URL, and keeps the UI in sync with the URL.!</code></pre>
</div>
            <div className="mockup-code text-wrap bg-secondary text-secondary-content">
            <pre data-prefix="$" className="bg-warning text-warning-content font-bold text-lg"><code>How does context API work?</code></pre>
  <pre className='' data-prefix='>'><code>React.createContext() is all you need.</code></pre>
  <pre data-prefix='>'><code> It returns a consumer and a provider.</code></pre>
  <pre data-prefix='>'><code>Provider is a component that as it's names suggests provides the state to its children.</code></pre>
  <pre data-prefix='>'><code>It will hold the "store" and be the parent of all the components that might need that store.</code></pre>
  <pre data-prefix='>'><code>Consumer as it so happens is a component that consumes and uses the state.</code></pre>
  <pre data-prefix='>'><code> More information can be found on React's documentation page</code></pre>
</div>
            <div className="mockup-code text-wrap bg-primary text-primary-content">
            <pre data-prefix="$" className="bg-warning text-warning-content font-bold text-lg"><code>What is the usage of useHref hook?</code></pre>
  <pre data-prefix='>'><code>The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router. </code></pre>
  <pre data-prefix='>'><code> </code></pre>
  </div>
        </div>
    );
};

export default Blog;