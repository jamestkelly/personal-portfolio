import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import { Link, animateScroll as scroll } from "react-scroll";
import ReactModal from "react-modal";
import { BsTerminalFill, BsBriefcaseFill, BsCodeSlash } from "react-icons/bs";
import { FaCoffee } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Import components
import ThreeJSHero from "./components/ThreeJSHero.jsx";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ModalStyle from "./components/ModalStyle";

// Method to call react-scroll to smooth scroll to top of page.
const scrollTop = () => {
  scroll.scrollToTop();
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <body class="text-white font-roboto pb-12 bg-body">
        {/* NavBar */}
        <header class="py-6">
          <div class="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <div class="text-lg font-bold">Jim Tran Kelly</div>
            <div class="hidden md:flex space-x-12 items-center">
              <button
                class="hover:text-selected-text transition-all duration-150 ease-linear"
                onClick={scrollTop}
              >
                Home
              </button>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                <button class="hover:text-selected-text transition-all duration-150 ease-linear">
                  Projects
                </button>
              </Link>
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                <button class="hover:text-selected-text transition-all duration-150 ease-linear">
                  Experience
                </button>
              </Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                <button class="hover:text-selected-text transition-all duration-150 ease-linear">
                  Contact Me
                </button>
              </Link>

              <button
                class="relative inline-block text-lg group"
                onClick={this.handleOpenModal}
              >
                <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out bg-theme rounded group-hover:text-black">
                  <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-theme"></span>
                  <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
                  <span class="relative font-bold">Resume</span>
                </span>
                <span
                  class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </button>
            </div>
          </div>
        </header>

        <div>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal"
            style={ModalStyle}
          >
            <button
              class="px-8 py-4 bg-theme text-white font-bold mt-2 mb-4 flex items-center space-x-3 rounded
            hover:bg-white hover:text-black transition-all duration-150 ease-linear"
              onClick={this.handleCloseModal}
            >
              <span>Close</span>
            </button>
            <iframe
              className="min-w-full min-h-full"
              src={require("./resources/resume.pdf")}
            />
          </ReactModal>
        </div>

        {/* Hero & NavBar */}
        <div class="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <div class="flex flex-wrap md:flex-nowrap">
            {/* Side Bar */}
            <nav class="z-1 inline-block lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block">
              <div class="absolute left-50 transform -translate-x-1/2 space-y-12 mt-36">
                <div class="sidebar-icon group" onClick={scrollTop}>
                  <BsTerminalFill size="24" />
                  <span class="sidebar-tooltip group-hover:scale-100">
                    Home
                  </span>
                </div>

                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                >
                  <div class="sidebar-icon group">
                    <BsCodeSlash size="24" />
                    <span class="sidebar-tooltip group-hover:scale-100">
                      Projects
                    </span>
                  </div>
                </Link>

                <Link
                  activeClass="active"
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                >
                  <div class="sidebar-icon group">
                    <BsBriefcaseFill size="24" />
                    <span class="sidebar-tooltip group-hover:scale-100">
                      Experience
                    </span>
                  </div>
                </Link>

                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                >
                  <div class="sidebar-icon group">
                    <MdEmail size="24" />
                    <span class="sidebar-tooltip group-hover:scale-100">
                      Contact Me
                    </span>
                  </div>
                </Link>
              </div>
            </nav>

            {/* Hero */}
            <div class="z-1 flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36">
              <h1 class="font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left">
                Thoughtfully simple
                <br />
                full stack
                <br />
                development.
              </h1>
              <div class="w-full flex justify-center md:justify-start">
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                >
                  <button
                    class="px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center space-x-3 rounded
                  hover:bg-white hover:text-black transition-all duration-150 ease-linear"
                  >
                    <div>
                      <FaCoffee size="24" />
                    </div>
                    <span>View my work</span>
                  </button>
                </Link>
              </div>
            </div>

            <ThreeJSHero />
          </div>
        </div>

        {/* Projects */}
        <div class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <section class="w-full">
            <Projects />
          </section>
        </div>

        {/* Experience */}
        <div class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <section class="w-full">
            <Experience />
          </section>
        </div>

        {/* Contact Me */}
        <div class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <section class="w-full">
            <Contact />
          </section>

          <div className="mobile-nav mt-6"></div>

          {/* Mobile NavBar Footer*/}
          <nav className="mobile-nav fixed bottom-0 inset-x-0 bg-secondary-body flex justify-between">
            <div class="mobile-navbar-icon group" onClick={scrollTop}>
              <BsTerminalFill size="24" />
            </div>

            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              <div class="mobile-navbar-icon group">
                <BsCodeSlash size="24" />
              </div>
            </Link>

            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              <div class="mobile-navbar-icon group">
                <BsBriefcaseFill size="24" />
              </div>
            </Link>

            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              <div class="mobile-navbar-icon group">
                <MdEmail size="24" />
              </div>
            </Link>
          </nav>
        </div>
      </body>
    );
  }
}

export default App;
