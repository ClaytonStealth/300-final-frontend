import React, { useRef, useEffect } from "react";

const ResizableDiv = () => {
  const refBox = useRef(null);
  const refTop = useRef(null);
  const refRight = useRef(null);
  const refBottom = useRef(null);
  const refLeft = useRef(null);
  useEffect(() => {
    const resizeableElement = refBox.current;
    const styles = window.getComputedStyle(resizeableElement);
    const width = parseInt(styles.width, 10); //100px -> 100
    const height = parseInt(styles.height, 10);

    let xCord = 0;
    let yCord = 0;

    resizeableElement.style.top = "150px";
    resizeableElement.style.left = "150px";

    const onMouseMoveTopResize = (e) => {
      const diff = e.clientY - yCord;
      const newHeight = height - diff;
      yCord = e.clientY;
      resizeableElement.style.height = `${newHeight}px`;
    };
  }, []);
  return (
    <>
      <h1 className='heading'>Resizable div</h1>
      <div className='wrapper'>
        <div ref={refBox} className='resizable-box'>
          <div ref={refLeft} className='resizer rl'></div>
          <div ref={refTop} className='resizer rt'></div>
          <div ref={refRight} className='resizer rr'></div>
          <div ref={refBottom} className='resizer rb'></div>
        </div>
      </div>
    </>
  );
};

export default ResizableDiv;
