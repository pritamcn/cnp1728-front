
import Link from 'next/link'
import React from 'react'
const Footer = () => {
  return (
    <>
    <footer className="c-footer bg-light-gray py-12">
    <div className="container text-center">
      <ul className="c-footer-nav list-none mb-3 p-0">
        <li className="px-5"><Link href="/">Home</Link></li>
        {/* <li className="px-5"><Link href="#">Category</Link></li>
        <li className="px-5"><Link href="#">Compare</Link></li> */}
        {/* <li className="px-5"><Link href="#">Imprint</Link></li>
        <li className="px-5"><Link href="#">Impressum</Link></li> */}
        <li className="px-5"><Link href="#">Privacy</Link></li>
      </ul>
      
      <div className="c-copyright">
        copyright 2017–2022 TopRatgeber24.de
      </div>

    </div>
  </footer>
  
  </>
  )
}

export default Footer