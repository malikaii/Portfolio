import React from 'react'
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div>
        <h3>This page does not exist</h3>
        <Link to={"/"}>Home</Link>
    </div>
  )
}

export default ErrorPage;