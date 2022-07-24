import {useState, useEffect} from 'react';
import Link from "next/link";

const InstructorNav = () => {

  const [current, setCurrent] = useState();

  useEffect(() => {
    //make sure we are in the client side(browser mode)
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  return (
    <div className="nav flex-column nav-pills mt-2">
      <Link href="/instructor">
        <a className={`nav-link ${ current === "/instructor" && "active" }`}>Dashboard</a>
      </Link>

      <Link href="/instructor/course/create">
        <a className={`nav-link ${ current === "/instructor/course/create" && "active" }`}>Course Create</a>
      </Link>
    </div>
  );
};

export default InstructorNav;
