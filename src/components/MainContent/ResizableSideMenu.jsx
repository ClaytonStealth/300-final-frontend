import React, { useRef, useEffect } from "react";
import "tailwindcss/tailwind.css";

const ResizableSidebar = () => {
  const resizerRef = useRef();
  const sidebarRef = useRef();

  useEffect(() => {
    const resizer = resizerRef.current;
    const sidebar = sidebarRef.current;

    const initResizerFn = (resizer, sidebar) => {
      let x, w;

      const rs_mousedownHandler = (e) => {
        x = e.clientX;
        w = sidebar.clientWidth;

        document.addEventListener("mousemove", rs_mousemoveHandler);
        document.addEventListener("mouseup", rs_mouseupHandler);
      };

      const rs_mousemoveHandler = (e) => {
        const dx = e.clientX - x;
        const cw = w + dx;

        if (cw < 700) {
          sidebar.style.width = `${cw}px`;
        }
      };

      const rs_mouseupHandler = () => {
        document.removeEventListener("mouseup", rs_mouseupHandler);
        document.removeEventListener("mousemove", rs_mousemoveHandler);
      };

      resizer.addEventListener("mousedown", rs_mousedownHandler);
    };

    initResizerFn(resizer, sidebar);
  }, []);

  return (
    <div className='w-full h-full flex'>
      <div
        className='h-full overflow-x-hidden relative bg-gray-200'
        ref={sidebarRef}
      >
        <div
          className='w-0.5 top-0 right-0 h-full absolute cursor-col-resize bg-green-500'
          ref={resizerRef}
        ></div>
        <div className='p-4 bg-white'>
          <h3 className='text-blue-800'>Sidebar Menu</h3>
        </div>
        <ul className='py-2 space-y-2'>
          {Array(9)
            .fill("")
            .map((_, index) => (
              <li
                key={index}
                className='cursor-pointer px-4 py-1 text-sm font-medium hover:bg-gray-100'
              >
                Sidebar menu list {index + 1}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ResizableSidebar;
