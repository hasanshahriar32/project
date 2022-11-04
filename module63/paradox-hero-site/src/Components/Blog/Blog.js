import React from "react";

const Blog = () => {
  return (
    <div className="mockup-window border m-3 min-h-[80vh] border-base-300">
      <div className="App flex flex-col justify-center px-4 py-16 border-t border-base-300">
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            what is cors?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>
              Cross-origin resource sharing (CORS) is a browser security feature
              that restricts cross-origin HTTP requests that are initiated from
              scripts running in the browser. If your REST API's resources
              receive non-simple cross-origin HTTP requests, you need to enable
              CORS support.
            </p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>
              Firebase Authentication provides backend services, easy-to-use
              SDKs, and ready-made UI libraries to authenticate users to your
              app. It supports authentication using passwords, phone numbers,
              popular federated identity providers like Google, Facebook and
              Twitter, and more.
            </p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            How does the private route work?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated
            </p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            What is Node? How does Node work?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>
              Node. js is an open-source backend javascript runtime environment.
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
