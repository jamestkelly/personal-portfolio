import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <div>
        <h2 id="experience" class="secondary-title">
          Experience
        </h2>
        <p class="section-paragraph">
          While I’m still relatively young, I’ve had the immense pleasure of
          working and developing my skills at the following organisations.
        </p>

        <div class="space-y-12 my-16">
          <div class="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
            {/* Company Logo */}
            <div class="mb-6 lg:mb-0">
              <img
                src={require("../img/Deloitte-Logo-Black.png")}
                class="w-fit"
                alt="Deloitte Logo (2022)"
              />
            </div>

            {/* Company Information*/}
            <div class="flex flex-wrap justify-center text-center lg:text-left lg:block">
              <h3 class="text-white text-3xl font-semibold">
                Deloitte Australia
              </h3>

              <div class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                <div class="badge hover:bg-theme transition-all duration-150 ease-linear">
                  Full-Stack Developer (Consultant)
                </div>
                <div class="badge hover:bg-theme transition-all duration-150 ease-linear">
                  Cloud & Engineering
                </div>
              </div>

              <p class="text-secondary">
                March 2022 - Present
                <br />
                <br />
                <ul>
                  <li>
                    For a majority of my time at Deloitte I have worked on Illuminate, a supply-chain analytics and visualisation web application.
                    I design, develop, and deploy features and components, and squash bugs. I work primarily with the following technologies and
                    frameworks in my role: TypeScript, Docker, NestJS, Go, Python, Ansible, BullMQ, Redis, SQL, Databricks, and gRPC.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div class="space-y-12 my-16">
          <div class="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
            {/* Company Logo */}
            <div class="mb-6 lg:mb-0">
              <img
                src={require("../img/Digital-Purpose-Logo-White.png")}
                class="w-fit"
                alt="Digital Purpose Logo (2022)"
              />
            </div>

            {/* Company Information*/}
            <div class="flex flex-wrap justify-center text-center lg:text-left lg:block">
              <h3 class="text-white text-3xl font-semibold">Digital Purpose</h3>

              <div class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                <div class="badge hover:bg-theme transition-all duration-150 ease-linear">
                  Full Stack Developer
                </div>
              </div>

              <p class="text-secondary">
                March 2021 - March 2022
                <br />
                <br />
                Worked directly with clients and non-technical staff developing
                tech stacks for web applications. Developed front-end through
                direct collaboration with the design team and clients. Gained
                experience over several languages and frameworks, namely
                AngularJS, THREE.js, and TypeScript.
              </p>
            </div>
          </div>
        </div>

        <div class="space-y-12 my-16">
          <div class="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
            {/* Company Logo */}
            <div class="mb-6 lg:mb-0">
              <img
                src={require("../img/FutureNet-Logo-White.png")}
                class="w-fit"
                alt="Digital Purpose Logo (2022)"
              />
            </div>

            {/* Company Information*/}
            <div class="flex flex-wrap justify-center text-center lg:text-left lg:block">
              <h3 class="text-white text-3xl font-semibold">FutureNet</h3>

              <div class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                <div class="badge hover:bg-theme transition-all duration-150 ease-linear">
                  Undergraduate Software Engineer
                </div>
              </div>

              <p class="text-secondary">
                November 2020 - March 2021
                <br />
                <br />
                Worked with an international software development team
                developing predominantly with TypeScript and JavaScript.
                Established work environments and built progressive web
                applications for use on desktop and mobile operating systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
