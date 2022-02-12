import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body class="text-white font-roboto pb-12">
      <header class="py-6">
        <div class="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <div class="text-lg font-bold">Jim Tran Kelly</div>
          <div class="hidden md:flex space-x-12 items-center">
            <a href="#" class="text-selected-text">Home</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact Me</a>
            <a href="#"><button class="px-6 py-2 bg-theme font-bold rounded">Resume</button></a>
          </div>
          <div class="md:hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="white"/>
            </svg>
          </div>
        </div>
      </header>

      {/* NavBar
            Note: This is temporary just to get all pieces in place.
      */}
      <div class="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div class="flex flex-wrap md:flex-nowrap">
          <nav class="inline-block lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block">
            <div class="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
              <a href="#" class="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body">
                <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Home</span>
              </a>
              <a href="#" class="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Projects</span>
              </a>
              <a href="#" class="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Experience</span>
              </a>
              <a href="#" class="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Contact</span>
              </a>
            </div>
          </nav>

        {/* Hero */}
          <div class="flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36">
            <h1 class="font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left">
              Thoughtfully simple<br/>full stack<br/>development.
            </h1>
            <div class="w-full flex justify-center md:justify-start">
              <button class="px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center space-x-3 rounded">
                <div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 3H9V5.4L10.81 6.85C10.93 6.94 11 7.09 11 7.24V11.5C11 11.78 10.78 12 10.5 12H6.5C6.22 12 6 11.78 6 11.5V7.24C6 7.09 6.07 6.94 6.19 6.85L8 5.4V3H4V13C4 15.21 5.79 17 8 17H14C16.21 17 18 15.21 18 13V10H20C21.11 10 22 9.1 22 8V5C22 3.89 21.11 3 20 3ZM20 8H18V5H20V8Z" fill="white"/>
                    <path d="M20 19H4V21H20V19Z" fill="white"/>
                  </svg>
                </div>
                <span>View my work</span>
              </button>
            </div>
          </div>
          <img src={require('./img/placeholder-orb.png')} alt="Placeholder for THREE.js canvas"
            class="w-3/4 mt-12 md:absolute -mt-6 md:mt-0 right-0 -z-1 max-h-fit max-w-fit"
          />
        </div>
      </div>

      {/* Projects */}
      <div class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <section class="w-full">
          <h2 id="projects" class="secondary-title">Projects</h2>
          <p class="section-paragraph">
            I’ve had the privilege and pleasure of working for several organisations to
            date, working as a full stack designing and implementing solutions on both
            the frontend and backend. To the right are several of the frameworks and
            languages that I have experience in.

            Unfortunately, for some projects, I’m unable to pubicly display them, however,
            feel free to contact me via the “Contact Me” section and I can send you a list
            and potentially provide you more details about my other projects I’ve worked
            on.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <img src={require('./img/placeholder-languages.png')} alt="Placeholder for languages 'cloud'"
              class="row-span-2"
            />

            <div>
              <h3 class="text-selected-text tertiary-title">is-my-coffee-cold</h3>
              <p class="section-paragraph">
                'is-my-coffee-cold' is a progressive web application (PWA) built
                using Ionic, Capacitor, AngularJS, and Firebase as the core
                technologies. The application calculates how long until a coffee
                goes cold in a given location. Additionally the application has
                CRUD functionality through No-SQL interactions  and email
                authentication through the implementation of Firebase.
              </p>
                <div class="w-full flex justify-center md:justify-start">
                  <a href="https://github.com/jamestkelly/is-my-coffee-cold">
                    <button class="px-4 py-4 bg-theme text-white font-bold mt-1 flex items-center space-x-3 rounded">
                      <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z" fill="white"/>
                        </svg>
                      </div>
                      <span>GitHub</span>
                    </button>
                  </a>
                </div>
            </div>

            <div>
              <h3 class="text-selected-text tertiary-title">Rove Wheelchair Visualiser</h3>
              <p class="section-paragraph">
                Rove Wheelchair Visualiser is a three-dimensional wheelchair
                creation platform that I was a full stack developer for during my
                time at Digital Purpose. The platform enables users to create and
                personalise a wheelchair matching to their needs and then send
                through the design to Rove Wheelchairs for fabrication. It was built
                using AngularJS, THREE.js, and Firebase.
              </p>
                <div class="w-full flex justify-center md:justify-start">
                  <a href="https://wheelchair-visualiser-demo.web.app">
                    <button class="px-4 py-4 bg-theme text-white font-bold mt-1 flex items-center space-x-3 rounded">
                      <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 19H5V5H12V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V12H19V19ZM14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3H14Z" fill="white"/>
                        </svg>
                      </div>
                      <span>Live Demo</span>
                    </button>
                  </a>
                </div>
            </div>
          </div>
        </section>
      </div>
    </body>
  );
}

export default App;
