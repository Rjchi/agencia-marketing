import { useState } from 'react'

import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
// ver https://www.npmjs.com/package/react-spinners
import PulseLoader from 'react-spinners/PulseLoader';

// import logo from "../../assets/img/logo.png";

const Navbar = () => {

  const [loading, setLoading] = useState(true);

  // Funcion para identificar el scroll
  window.onscroll = () => {
    scrollfuction();
  }

  const scrollfuction = () => {
    if (document.getElementById('navbar')) {
      // Si el scroll es mayor a 50 agregale una clase a el id navbar en caso contrario remueve las clases
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('navbar').classList.add('shadow-navbar')
        document.getElementById('navbar').classList.add('bg-white')
      }
      else {
        document.getElementById('navbar').classList.remove('shadow-navbar')
        document.getElementById('navbar').classList.remove('bg-white')
      }
    }
  }

  return (
    // Con id queremos identificar cada vez que hacemos scroll

    <nav id='navbar' className="w-full py-4 top-0 z-40 fixed">
      <div className="px-4 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-12 px-2">
          <div className="ml-4 mt-2">
            <Link to="/">
              <img
                // src={logo}
                src="https://media.tenor.com/9xx5jJaHPpIAAAAd/fat-guy.gif"
                width={70}
                height={60}
                className=""
              />
            </Link>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
            <NavLink
              to="/casos"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-purple-800 transition duration-200 ease-in-out mx-3"
            >
              Casos
            </NavLink>
            <NavLink
              to="/servicios"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-purple-800 transition duration-200 ease-in-out mx-3"
            >
              Servicios
            </NavLink>
            <NavLink
              to="/nosotros"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-purple-800 transition duration-200 ease-in-out mx-3"
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/carreras"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-purple-800 transition duration-200 ease-in-out mx-3"
            >
              Carreras
            </NavLink>
            <NavLink
              to="/blog"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-purple-800 transition duration-200 ease-in-out mx-3"
            >
              Blog
            </NavLink>
            <NavLink
              to="/contacto"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-purple-800 transition duration-200 ease-in-out mx-3"
            >
              Contacto
            </NavLink>
            <Link
              to="/contacto"
              // Transicion transition duration-300 ease-in-out ...
              className="ml-3 relative inline-flex items-center rounded-md border border-transparent bg-black px-10 py-2 text-lg font-bold text-white shadow-xl transition duration-300 ease-in-out hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
            >
              Hire us
              {/* <img
                src="https://media.tenor.com/NqKNFHSmbssAAAAi/discord-loading-dots-discord-loading.gif"
                className="w-7 h-2 mt-1 ml-3"
              /> */}
              <PulseLoader className='ml-3' loading={loading} size={5} color="#ffffff" />

            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Navbar);
