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
              <a href="#">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_910_44)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0005 1C18.303 1.00296 12.7923 3.02092 8.45374 6.69305C4.11521 10.3652 1.23181 15.452 0.319089 21.044C-0.593628 26.636 0.523853 32.3684 3.47174 37.2164C6.41963 42.0643 11.0057 45.7115 16.4099 47.5059C17.6021 47.7272 18.0512 46.9883 18.0512 46.36C18.0512 45.7317 18.0273 43.91 18.0194 41.9184C11.3428 43.3608 9.93197 39.101 9.93197 39.101C8.84305 36.3349 7.26927 35.6078 7.26927 35.6078C5.09143 34.1299 7.43223 34.1576 7.43223 34.1576C9.84455 34.3275 11.1123 36.6194 11.1123 36.6194C13.2504 40.2667 16.7278 39.2116 18.0949 38.5952C18.3095 37.0501 18.9335 35.999 19.621 35.4023C14.2877 34.8017 8.68408 32.7548 8.68408 23.6108C8.65102 21.2394 9.53605 18.9461 11.156 17.2054C10.9096 16.6047 10.087 14.1785 11.3905 10.8829C11.3905 10.8829 13.4054 10.2427 17.9916 13.3289C21.9253 12.2592 26.0757 12.2592 30.0095 13.3289C34.5917 10.2427 36.6026 10.8829 36.6026 10.8829C37.9101 14.1706 37.0875 16.5968 36.8411 17.2054C38.4662 18.9464 39.353 21.2437 39.317 23.6187C39.317 32.7824 33.7015 34.8017 28.3602 35.3905C29.2186 36.1334 29.9856 37.5836 29.9856 39.8122C29.9856 43.0051 29.9578 45.5736 29.9578 46.36C29.9578 46.9962 30.391 47.7391 31.6071 47.5059C37.0119 45.7113 41.5984 42.0634 44.5462 37.2147C47.4941 32.3659 48.611 26.6326 47.6972 21.0401C46.7835 15.4476 43.8986 10.3607 39.5587 6.68921C35.2187 3.01771 29.7067 1.00108 24.0085 1H24.0005Z" fill="white"/>
                    <path d="M9.08887 35.264C9.03721 35.3826 8.84645 35.4181 8.69146 35.3351C8.53646 35.2522 8.42122 35.098 8.47686 34.9755C8.5325 34.853 8.71928 34.8214 8.87428 34.9044C9.02927 34.9874 9.14848 35.1455 9.08887 35.264Z" fill="white"/>
                    <path d="M10.0626 36.3428C9.98028 36.384 9.88612 36.3955 9.79622 36.3753C9.70632 36.3551 9.62629 36.3045 9.56979 36.2321C9.41479 36.0662 9.38298 35.837 9.50221 35.7342C9.62143 35.6315 9.83606 35.6789 9.99105 35.8449C10.146 36.0108 10.1818 36.24 10.0626 36.3428Z" fill="white"/>
                    <path d="M11.0085 37.7139C10.8614 37.8167 10.6111 37.7139 10.472 37.5085C10.4335 37.4716 10.4029 37.4274 10.382 37.3785C10.3611 37.3296 10.3503 37.2771 10.3503 37.2239C10.3503 37.1708 10.3611 37.1183 10.382 37.0694C10.4029 37.0205 10.4335 36.9763 10.472 36.9394C10.619 36.8406 10.8694 36.9394 11.0085 37.141C11.1476 37.3425 11.1516 37.6112 11.0085 37.7139Z" fill="white"/>
                    <path d="M12.2921 39.0417C12.161 39.1879 11.8947 39.1484 11.6761 38.9508C11.4575 38.7532 11.4059 38.4845 11.537 38.3423C11.6682 38.2 11.9344 38.2395 12.161 38.4331C12.3875 38.6268 12.4312 38.8994 12.2921 39.0417Z" fill="white"/>
                    <path d="M14.0923 39.8162C14.0327 40.0019 13.7625 40.0849 13.4922 40.0058C13.222 39.9268 13.0432 39.7055 13.0948 39.5158C13.1465 39.3262 13.4207 39.2392 13.6949 39.3262C13.9691 39.4131 14.144 39.6225 14.0923 39.8162Z" fill="white"/>
                    <path d="M16.0557 39.9505C16.0557 40.1442 15.8331 40.3101 15.547 40.3141C15.2608 40.318 15.0264 40.16 15.0264 39.9663C15.0264 39.7727 15.2489 39.6067 15.535 39.6028C15.8212 39.5988 16.0557 39.753 16.0557 39.9505Z" fill="white"/>
                    <path d="M17.8838 39.6463C17.9196 39.8399 17.7208 40.0414 17.4347 40.0888C17.1486 40.1363 16.8982 40.0217 16.8624 39.832C16.8267 39.6423 17.0333 39.4368 17.3115 39.3855C17.5897 39.3341 17.848 39.4526 17.8838 39.6463Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_910_44">
                      <rect width="48" height="48" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z" fill="white"/>
              </svg>
              </a>

              {/* Medium */}
              <a href="#">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.0749 23.6554C27.0749 31.1968 21.0139 37.3103 13.5377 37.3103C6.06146 37.3103 0 31.1955 0 23.6554C0 16.1153 6.061 10 13.5377 10C21.0143 10 27.0749 16.114 27.0749 23.6554Z" fill="white"/>
                <path d="M41.9256 23.6554C41.9256 30.7541 38.8951 36.5109 35.1568 36.5109C31.4184 36.5109 28.3879 30.7541 28.3879 23.6554C28.3879 16.5568 31.418 10.7999 35.1563 10.7999C38.8947 10.7999 41.9252 16.555 41.9252 23.6554" fill="white"/>
                <path d="M47.9999 23.6554C47.9999 30.0141 46.9342 35.1719 45.6193 35.1719C44.3043 35.1719 43.2391 30.0154 43.2391 23.6554C43.2391 17.2954 44.3048 12.1389 45.6193 12.1389C46.9338 12.1389 47.9999 17.2949 47.9999 23.6554Z" fill="white"/>
              </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </body>
  );
}

export default App;
