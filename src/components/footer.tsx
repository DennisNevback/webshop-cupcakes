import { Link } from "react-router-dom"
function Footer() {

  return (
    <div className='self-end relative flex h-35 w-full bg-gray-200 content-center p-1 text-sm color-white' >
      <img src="/images/logo/dennisDesertLogo.png" alt="Dennis Desert" className="h-1/2 absolute top-8 left-2" />
      <span className="flex flex-col justify-center content-center self-center space-x-12 ml-20">
        <span className="content-center">
          <h5>Adress:</h5>
          <p>Största Fejkgatan 17</p>
          <p>222 22 Malmö</p>
        </span>
        <span className="content-center">
          <p>Kontakt:</p>
          <p><a href="mailto:fake_email@bakesalot.com">fake_email@bakesalot.com</a></p>
          <p>070 000 00 000</p>
        </span>
      </span>
      <span className="flex absolute space-x-4 h-1/2 p-2 right-0 bottom-0">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
          className="h-full">
          <img src="/images/logo/Facebook_Logo_Primary.png" alt="Facebook" className="h-full w-auto" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="h-full">
          <img src="/images/logo/LI-In-Bug.png" alt="LinkedIn" className="h-full w-auto" />
        </a>
      </span>
    </div>
  )
}

export default Footer