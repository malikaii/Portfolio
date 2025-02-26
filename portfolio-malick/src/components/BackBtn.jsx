import React from 'react'
import { BsArrowLeftShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function BackBtn() {
  return (
    <div>
      <Link
        className="group text-white w-fit px-6 py-3 my-2
                    flex items-center rounded-md bg-gradient-to-r from-cyan-500
                    to-blue-500"
        to={"/"}
      >
        <span className="group-hover:rotate-90 duration-300">
          <BsArrowLeftShort size={25} className="ml-1" />
        </span>
        Back
      </Link>
    </div>
  );
}

export default BackBtn