import React from "react";
import Pdf from "../images/chart.pdf";
const MyComponent = () => {
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: "/webviewer/lib",
        initialDoc: { Pdf },
      },
      viewer.current
    ).then((instance) => {});
  }, []);

  return (
    <div className="MyComponent">
      <div className="header">React sample</div>
      <div className="webviewer" ref={viewer}></div>
    </div>
  );
};
export default Pdfviewer;
