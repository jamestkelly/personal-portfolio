import logo from './logo.svg';
import './App.css';
import { Link, animateScroll as scroll} from 'react-scroll';
import { BsLinkedin, BsTerminalFill, BsBriefcaseFill, BsCodeSlash, BsGithub, BsMedium } from 'react-icons/bs';
import { FaCoffee, FaFigma } from 'react-icons/fa';
import { MdEmail, MdMenu, MdWeb } from 'react-icons/md';

const scrollTop = () => {
  scroll.scrollToTop();
};

function App() {
  return (
    <body class="text-white font-roboto pb-12">

      {/* NavBar */}
      <header class="py-6">
        <div class="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <div class="text-lg font-bold">Jim Tran Kelly</div>
          <div class="hidden md:flex space-x-12 items-center">
            <a href="#" class="text-selected-text">Home</a>
            <Link
              activeClass='active'
              to="projects"
              spy={ true }
              smooth={ true }
              offset={ -40 }
              duration={ 500 }
            >
              <a href="#">Projects</a>
            </Link>
            <Link
              activeClass='active'
              to="experience"
              spy={ true }
              smooth={ true }
              offset={ -40 }
              duration={ 500 }
            >
              <a href="#">Experience</a>
            </Link>
            <Link
              activeClass='active'
              to="contact"
              spy={ true }
              smooth={ true }
              offset={ -40 }
              duration={ 500 }
            >
              <a href="#">Contact Me</a>
            </Link>
            <a href="#"><button class="px-6 py-2 bg-theme font-bold rounded">Resume</button></a>
          </div>
          <div class="md:hidden">
            <MdMenu size="24"/>
          </div>
        </div>
      </header>

      {/* Side Bar */}
      <div class="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div class="flex flex-wrap md:flex-nowrap">
          <nav class="inline-block lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block">
            <div class="absolute left-50 transform -translate-x-1/2 space-y-12 mt-36">

              <div class="sidebar-icon group" onClick={scrollTop}>
                  <BsTerminalFill size="24"/>
                  <span class="sidebar-tooltip group-hover:scale-100">
                    Home
                  </span>
              </div>

              <Link
                activeClass='active'
                to="projects"
                spy={ true }
                smooth={ true }
                offset={ -40 }
                duration={ 500 }
              >
                <div class="sidebar-icon group">
                  <BsCodeSlash size="24"/>
                  <span class="sidebar-tooltip group-hover:scale-100">
                    Projects
                  </span>
                </div>
              </Link>

              <Link
                activeClass='active'
                to="experience"
                spy={ true }
                smooth={ true }
                offset={ -40 }
                duration={ 500 }
              >
                <div class="sidebar-icon group">
                  <BsBriefcaseFill size="24"/>
                  <span class="sidebar-tooltip group-hover:scale-100">
                    Experience
                  </span>
                </div>
              </Link>

              <Link
                activeClass='active'
                to="contact"
                spy={ true }
                smooth={ true }
                offset={ -40 }
                duration={ 500 }
              >
                <div class="sidebar-icon group">
                  <MdEmail size="24"/>
                  <span class="sidebar-tooltip group-hover:scale-100">
                    Contact Me
                  </span>
                </div>
              </Link>
            </div>
          </nav>

        {/* Hero */}
          <div class="flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36">
            <h1 class="font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left">
              Thoughtfully simple<br/>full stack<br/>development.
            </h1>
            <div class="w-full flex justify-center md:justify-start">
              <Link
                activeClass='active'
                to="projects"
                spy={ true }
                smooth={ true }
                offset={ -40 }
                duration={ 500 }
              >
                <button class="px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center space-x-3 rounded">
                  <div>
                    <FaCoffee size="24"/>
                  </div>
                  <span>View my work</span>
                </button>
              </Link>
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
                      <BsGithub size="24"/>
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
                      <MdWeb size="24"/>
                    </div>
                    <span>Live Demo</span>
                  </button>
                </a>
              </div>
            </div>

            <div>
              <h3 class="text-selected-text tertiary-title">My Current Portfolio</h3>
              <p class="section-paragraph">
                This is the website you're currently looking at! This project went live
                early March, 2022 alongside my move to my new job at Deloitte Australia.
                This project was developed via the implementation of ReactJS, Tailwind CSS,
                and Firebase for hosting and email contact functionality.
              </p>
              <div class="w-full flex justify-center space-x-2 md:justify-start">
                <a href="https://www.figma.com/file/KKP7CBfZuGCs80q9LqlfzE/Personal-Portfolio-Website-%7C-2022---Present?node-id=0%3A1">
                  <button class="px-4 py-4 bg-theme text-white font-bold mt-1 flex items-center space-x-3 rounded">
                    <div>
                      <FaFigma size="24"/>
                    </div>
                    <span>Figma</span>
                  </button>
                </a>

                <a href="https://github.com/jamestkelly/personal-portfolio">
                  <button class="px-4 py-4 bg-theme text-white font-bold mt-1 flex items-center space-x-3 rounded">
                    <div>
                      <BsGithub size="24"/>
                    </div>
                    <span>GitHub</span>
                  </button>
                </a>
              </div>
            </div>

            <div>
              <h3 class="text-selected-text tertiary-title">My Old Portfolio</h3>
              <p class="section-paragraph">
                Naturally, while looking back my previous design and implementation isn't as
                impressive as my current one; I personally like to keep it here to show my
                improvement as a developer. The project was implemented in ReactJS alongside
                Firebase for hosting and email contact functionality.
              </p>
              <div class="w-full flex justify-center space-x-2 md:justify-start">
                <a href="https://github.com/jamestkelly/portfolio-website-old">
                  <button class="px-4 py-4 bg-theme text-white font-bold mt-1 flex items-center space-x-3 rounded">
                    <div>
                      <BsGithub size="24"/>
                    </div>
                    <span>GitHub</span>
                  </button>
                </a>

                <a href="http://portfolio-website-76885.web.app">
                  <button class="px-4 py-4 bg-theme text-white font-bold mt-1 flex items-center space-x-3 rounded">
                    <div>
                      <MdWeb size="24"/>
                    </div>
                    <span>Live Demo</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Experience */}
      <div class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <section class="w-full">
          <h2 id="experience" class="secondary-title">Experience</h2>
          <p class="section-paragraph">
            While I’m still relatively young, I’ve had the immense pleasure of working and
            developing my skills at the following organisations.
          </p>

          <div class="space-y-12 my-16">
            <div class="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">

              {/* Company Logo */}
              <div class="mb-6 lg:mb-0">
                <img src={require('./img/Deloitte-Logo-Black.png')} class="w-fit"/>
              </div>

              {/* Company Information*/}
              <div class="flex flex-wrap justify-center text-center lg:text-left lg:block">
                <h3 class="text-white text-3xl font-semibold">Deloitte Australia</h3>

                <div class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                  <div class="badge">Graduate Consultant</div>
                  <div class="badge">Platform Engineering</div>
                </div>

                <p class="text-secondary">
                  March 2022 - Present<br/>
                  <br/>
                  Worked with clients to enable them to disrupt industries before industries disrupt them.
                  Built and designed business solutions that are powered by modern technology platforms
                  that run on premise, in the cloud, or a hybrid of both.
                </p>
              </div>
            </div>
          </div>

          <div class="space-y-12 my-16">
            <div class="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">

              {/* Company Logo */}
              <div class="mb-6 lg:mb-0">
                <img src={require('./img/Digital-Purpose-Logo-White.png')} class="w-fit"/>
              </div>

              {/* Company Information*/}
              <div class="flex flex-wrap justify-center text-center lg:text-left lg:block">
                <h3 class="text-white text-3xl font-semibold">Digital Purpose</h3>

                <div class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                  <div class="badge">Full Stack Developer</div>
                </div>

                <p class="text-secondary">
                  March 2021 - March 2022<br/>
                  <br/>
                  Worked directly with clients and non-technical staff developing tech stacks for web applications.
                  Developed front-end through direct collaboration with the design team and clients. Gained experience
                  over several languages and frameworks, namely AngularJS, THREE.js, and TypeScript.
                </p>
              </div>
            </div>
          </div>

          <div class="space-y-12 my-16">
            <div class="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">

              {/* Company Logo */}
              <div class="mb-6 lg:mb-0">
                <img src={require('./img/FutureNet-Logo-White.png')} class="w-fit"/>
              </div>

              {/* Company Information*/}
              <div class="flex flex-wrap justify-center text-center lg:text-left lg:block">
                <h3 class="text-white text-3xl font-semibold">FutureNet</h3>

                <div class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                  <div class="badge">Undergraduate Software Engineer</div>
                </div>

                <p class="text-secondary">
                  November 2020 - March 2021<br/>
                  <br/>
                  Worked with an international software development team developing predominantly with
                  TypeScript and JavaScript. Established work environments and built progressive web
                  applications for use on desktop and mobile operating systems.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Me */}
      <div class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <section class="w-full">
          <h2 id="contact" class="secondary-title">Contact Me</h2>
          <p class="section-paragraph">
            Feel free to get in touch with me! Either fill out and submit the form below, or
            you can reach me through any of the alternative methods provided.
          </p>

          <div class="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-20">
            <div class="space-y-10">
              <div>
                <label class="text-white block mb-2 text-xl font-bold">
                  Name
                </label>
                <input class="w-full border border-input-border bg-input px-4 rounded-sm"/>
              </div>
              <div>
                <label class="text-white block mb-2 text-xl font-bold">
                  Email
                </label>
                <input type="email" class="w-full border border-input-border bg-input px-4 rounded-sm"/>
              </div>
              <div>
                <label class="text-white block mb-2 text-xl font-bold">
                  Message
                </label>
                <textarea class="w-full border border-input-border bg-input px-4 rounded-sm"/>
              </div>
              <button class="px-6 py-2 bg-theme text-white font-bold rounded">Submit</button>
            </div>
          </div>

          <div class="mt-12">
            <div class="flex mt-20 space-x-6">
              {/* GitHub */}
              <a href="https://github.com/jamestkelly">
                <BsGithub size="30"/>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/jimkellyt/">
                <BsLinkedin size="30"/>
              </a>

              {/* Medium */}
              <a href="https://medium.com/@jimkelly-t">
                <BsMedium size="30"/>
              </a>
            </div>
          </div>
        </section>
      </div>
    </body>
  );
}

export default App;
