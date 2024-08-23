import React from "react";

const Footer = () => {
  return (
    <footer className="mt-16 w-full  max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full text-2xl  text-center text-white max-md:mt-10">
            <a
              href="#"
              class="flex items-center space-x-2 text-white hover:underline mb-10"
            >
              <span>About</span>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path
                  d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"
                  fill="#ffffff"
                />
              </svg>
            </a>

            <a
              href="#"
              class="flex items-center space-x-2 text-white hover:underline"
            >
              <span>Support this Project</span>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path
                  d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"
                  fill="#ffffff"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto w-full text-2xl text-center text-white max-md:mt-10">
            <a
              href="https://forms.gle/aoovJD42E3KNEj1s7"
              class="flex items-center space-x-2 text-white hover:underline mb-10"
            >
              <span>Add a Resource</span>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path
                  d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"
                  fill="#ffffff"
                />
              </svg>
            </a>

            <a
              href="#"
              class="flex items-center space-x-2 text-white hover:underline"
            >
              <span>Contribute on Github</span>
              <svg
                width="24"
                height="24"
                xmlns="https://github.com/Sujith-Srikar/unseen_mini_project"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path
                  d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"
                  fill="#ffffff"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-1.5 w-full text-2xl text-center text-white max-md:mt-10">
            <a
              href="#"
              class="flex items-center space-x-2 text-white hover:underline mb-10"
            >
              <span>Submit FeedBack</span>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path
                  d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"
                  fill="#ffffff"
                />
              </svg>
            </a>

            <a
              href="#"
              class="flex items-center space-x-2 text-white hover:underline"
            >
              <span>Legal</span>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path
                  d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"
                  fill="#ffffff"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;