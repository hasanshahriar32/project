import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Course from "./Course";

const CoursePrint = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <Course ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

export default CoursePrint;
