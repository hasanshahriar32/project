// import React, { useRef } from "react";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import { Link, useLoaderData } from "react-router-dom";
import ReactDOM from "react-dom";
// import Course from "./Course";

// const CoursePrint = () => {
//   const componentRef = useRef();
//   if (document?.getElementById("printPreview")) {
//     document?.getElementById("printPreview").classList.add("hidden");
//   }
//   return (
//     <div className="App">
//       <ReactToPrint
//         trigger={() => (
//           <button className="btn btn-success">Print this out!</button>
//         )}
//         content={() => componentRef.current}
//       />
//       <Course ref={componentRef} />
//     </div>
//   );
// };

// ReactDOM.render(<CoursePrint />, document.getElementById("root"));

// export default CoursePrint;
import React from "react";
import { render } from "react-dom";

import Course from "./Course";
import { useEffect } from "react";

class Example extends React.Component {
  render() {
    return (
      <div>
        <Course />
      </div>
    );
  }
}
class CoursePrint extends React.PureComponent {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return (
              <div className="App">
                <a className="btn fixed right-3" href="#">
                  🖨️ Print this out!
                </a>
              </div>
            );
          }}
          content={() => this.componentRef}
        />
        <Example ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default CoursePrint;
