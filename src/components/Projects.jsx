import React, { Component } from "react";
import { BsGithub } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

import LanguageCloud from "./LanguageCloud";

class Projects extends Component {
  render() {
    return (
      <div>
        <h2 id="projects" class="secondary-title">
          Projects
        </h2>
        <p class="section-paragraph">
          I’ve had the privilege and pleasure of working for several
          organisations to date, working as a full stack designing and
          implementing solutions on both the frontend and backend. To the right
          are several of the frameworks and languages that I have experience in.
          Unfortunately, for some projects, I’m unable to pubicly display them,
          however, feel free to contact me via the “Contact Me” section and I
          can send you a list and potentially provide you more details about my
          other projects I’ve worked on.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <LanguageCloud class="row-span-2" />
          <div>
            <h3 class="text-selected-text tertiary-title">is-my-coffee-cold</h3>
            <p class="section-paragraph">
              'is-my-coffee-cold' is a progressive web application (PWA) built
              using Ionic, Capacitor, AngularJS, and Firebase as the core
              technologies. The application calculates how long until a coffee
              goes cold in a given location. Additionally the application has
              CRUD functionality through No-SQL interactions and email
              authentication through the implementation of Firebase.
            </p>
            <div class="w-full flex justify-center md:justify-start">
              <a href="https://github.com/jamestkelly/is-my-coffee-cold">
                <button
                  class="px-4 py-4 bg-theme text-white font-bold mt-1 flex items-center space-x-3 rounded
                  hover:bg-white hover:text-black transition-all duration-150 ease-linear"
                >
                  <div>
                    <BsGithub size="24" />
                  </div>
                  <span>GitHub</span>
                </button>
              </a>
            </div>
          </div>

          <div>
            <h3 class="text-selected-text tertiary-title">
              Rove Wheelchair Visualiser
            </h3>
            <p class="section-paragraph">
              Rove Wheelchair Visualiser is a three-dimensional wheelchair
              creation platform that I was a full stack developer for during my
              time at Digital Purpose. The platform enables users to create and
              personalise a wheelchair matching to their needs and then send
              through the design to Rove Wheelchairs for fabrication. It was
              built using AngularJS, THREE.js, and Firebase.
            </p>
            <div class="w-full flex justify-center md:justify-start">
              <a href="https://wheelchair-visualiser-demo.web.app">
                <button
                  class="px-4 py-4 bg-theme text-white font-bold mt-1 flex items-center space-x-3 rounded
                  hover:bg-white hover:text-black transition-all duration-150 ease-linear"
                >
                  <div>
                    <MdWeb size="24" />
                  </div>
                  <span>Live Demo</span>
                </button>
              </a>
            </div>
          </div>

          <div>
            <h3 class="text-selected-text tertiary-title">
              My Current Portfolio
            </h3>
            <p class="section-paragraph">
              This is the website you're currently looking at! This project went
              live early March, 2022 alongside my move to my new job at Deloitte
              Australia. This project was developed via the implementation of
              ReactJS, Tailwind CSS, and Firebase for hosting and email contact
              functionality.
            </p>
            <div class="w-full flex justify-center space-x-2 md:justify-start">
              <a href="https://www.figma.com/file/KKP7CBfZuGCs80q9LqlfzE/Personal-Portfolio-Website-%7C-2022---Present?node-id=0%3A1">
                <button
                  class="px-4 py-4 bg-theme text-white font-bold mt-1 flex items-center space-x-3 rounded
                  hover:bg-white hover:text-black transition-all duration-150 ease-linear"
                >
                  <div>
                    <FaFigma size="24" />
                  </div>
                  <span>Figma</span>
                </button>
              </a>

              <a href="https://github.com/jamestkelly/personal-portfolio">
                <button
                  class="px-4 py-4 bg-theme text-white font-bold mt-1 flex items-center space-x-3 rounded
                  hover:bg-white hover:text-black transition-all duration-150 ease-linear"
                >
                  <div>
                    <BsGithub size="24" />
                  </div>
                  <span>GitHub</span>
                </button>
              </a>
            </div>
          </div>

          <div>
            <h3 class="text-selected-text tertiary-title">My Old Portfolio</h3>
            <p class="section-paragraph">
              Naturally, while looking back my previous design and
              implementation isn't as impressive as my current one; I personally
              like to keep it here to show my improvement as a developer. The
              project was implemented in ReactJS alongside Firebase for hosting
              and email contact functionality.
            </p>
            <div class="w-full flex justify-center space-x-2 md:justify-start">
              <a href="https://github.com/jamestkelly/portfolio-website-old">
                <button
                  class="px-4 py-4 bg-theme text-white font-bold mt-1 flex items-center space-x-3 rounded
                  hover:bg-white hover:text-black transition-all duration-150 ease-linear"
                >
                  <div>
                    <BsGithub size="24" />
                  </div>
                  <span>GitHub</span>
                </button>
              </a>

              <a href="http://portfolio-website-76885.web.app">
                <button
                  class="px-4 py-4 bg-theme text-white font-bold mt-1 flex items-center space-x-3 rounded
                  hover:bg-white hover:text-black transition-all duration-150 ease-linear"
                >
                  <div>
                    <MdWeb size="24" />
                  </div>
                  <span>Live Demo</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
