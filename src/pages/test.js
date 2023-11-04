import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function Test() {
  return (
    <main
    >

      <div class="insta-clone">
    
       <div class="flex bg-red-900 text-gray-300">
  <aside class="flex h-screen w-20 flex-col items-center border-r border-gray-200 bg-white">
    <div class="flex h-[4.5rem] w-full items-center justify-center border-b border-gray-200 p-2">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsapwuIZ2JPUVRaWSoX_xoEIOHWxneY7EupS8gsFriA&s" />
    </div>
    <nav class="flex flex-1 flex-col gap-y-4 pt-10">
      <a href="#" class="group relative rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50">
        <svg class="h-6 w-6 stroke-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 9V15M9 12H15H9Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <div class="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
          <div class="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
            <div class="absolute inset-0 -left-1 flex items-center">
              <div class="h-2 w-2 rotate-45 bg-white"></div>
            </div>
            Layouts <span class="text-gray-400">(Y)</span>
          </div>
        </div>
      </a>
      <a href="#" class="text-gary-400 group relative rounded-xl p-2 hover:bg-gray-50">
        <svg width="24" height="24" class="h-6 w-6 stroke-current group-hover:text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 10.8181 3.23279 9.64778 3.68508 8.55585C4.13738 7.46392 4.80031 6.47177 5.63604 5.63604C6.47177 4.80031 7.46392 4.13738 8.55585 3.68508C9.64778 3.23279 10.8181 3 12 3C14.3869 3 16.6761 3.84285 18.364 5.34315C20.0518 6.84344 21 8.87827 21 11C21 12.0609 20.5259 13.0783 19.682 13.8284C18.8381 14.5786 17.6935 15 16.5 15H14C13.5539 14.9928 13.1181 15.135 12.7621 15.404C12.4061 15.673 12.1503 16.0533 12.0353 16.4844C11.9203 16.9155 11.9528 17.3727 12.1276 17.7833C12.3025 18.1938 12.6095 18.5341 13 18.75C13.1997 18.9342 13.3366 19.1764 13.3915 19.4425C13.4465 19.7085 13.4167 19.9851 13.3064 20.2334C13.196 20.4816 13.0107 20.6891 12.7764 20.8266C12.5421 20.9641 12.2705 21.0247 12 21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M7.5 11C7.77614 11 8 10.7761 8 10.5C8 10.2239 7.77614 10 7.5 10C7.22386 10 7 10.2239 7 10.5C7 10.7761 7.22386 11 7.5 11Z" fill="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 8C12.2761 8 12.5 7.77614 12.5 7.5C12.5 7.22386 12.2761 7 12 7C11.7239 7 11.5 7.22386 11.5 7.5C11.5 7.77614 11.7239 8 12 8Z" fill="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M16.5 11C16.7761 11 17 10.7761 17 10.5C17 10.2239 16.7761 10 16.5 10C16.2239 10 16 10.2239 16 10.5C16 10.7761 16.2239 11 16.5 11Z" fill="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <div class="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
          <div class="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
            <div class="absolute inset-0 -left-1 flex items-center">
              <div class="h-2 w-2 rotate-45 bg-white"></div>
            </div>
            Color Scheme <span class="text-gray-400">(Y)</span>
          </div>
        </div>
      </a>
    </nav>

    <div class="flex flex-col items-center gap-y-4 py-10">
      <button class="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100">
        <svg width="24" height="24" class="h-6 w-6 stroke-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 16H12.01M12 8V12V8Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

      <button class="mt-2 rounded-full bg-gray-100">
        <img class="h-10 w-10 rounded-full" src="https://avatars.githubusercontent.com/u/35387401?v=4" alt="" />
      </button>
    </div>
  </aside>
  <div className='flex flex-col'>
  <div className='flex flex-row columns-4 items-center justify-evenly'>

 

   <div class="relative flex sm:3 h-20 p-8 m-8 !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#535353] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
      <div class="ml-[18px] flex  w-auto flex-row items-center">
      <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
          <span class="flex items-center text-brand-500 dark:text-white">
          <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="h-7 w-7"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
          </svg>
          </span>
      </div>
      </div>
      <div class="h-50 ml-4 flex w-auto flex-col justify-center">
      <p class="font-dm text-sm font-medium text-gray-600">Sales</p>
      <h4 class="text-xl font-bold text-navy-700 dark:text-white">$574.34</h4>
      </div>
  </div>
  <div class="relative flex sm:3 h-20 p-8 m-8 !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#535353] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
      <div class="ml-[18px] flex  w-auto flex-row items-center">
      <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
          <span class="flex items-center text-brand-500 dark:text-white">
          <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="h-7 w-7"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
          </svg>
          </span>
      </div>
      </div>
      <div class="h-50 ml-4 flex w-auto flex-col justify-center">
      <p class="font-dm text-sm font-medium text-gray-600">Sales</p>
      <h4 class="text-xl font-bold text-navy-700 dark:text-white">$574.34</h4>
      </div>
  </div>
  <div class="relative flex sm:3 h-20 p-8 m-8 !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#535353] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
      <div class="ml-[18px] flex  w-auto flex-row items-center">
      <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
          <span class="flex items-center text-brand-500 dark:text-white">
          <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="h-7 w-7"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
          </svg>
          </span>
      </div>
      </div>
      <div class="h-50 ml-4 flex w-auto flex-col justify-center">
      <p class="font-dm text-sm font-medium text-gray-600">Sales</p>
      <h4 class="text-xl font-bold text-navy-700 dark:text-white">$574.34</h4>
      </div>
  </div>
  <div class="relative flex sm:3 md:3 h-20 p-8 m-8 !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#535353] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
      <div class="ml-[18px] flex  w-auto flex-row items-center">
      <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
          <span class="flex items-center text-brand-500 dark:text-white">
          <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="h-7 w-7"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
          </svg>
          </span>
      </div>
      </div>
      <div class="h-50 ml-4 flex w-auto flex-col justify-center">
      <p class="font-dm text-sm font-medium text-gray-600">Sales</p>
      <h4 class="text-xl font-bold text-navy-700 dark:text-white">$574.34</h4>
      </div>
  </div>
  </div>
  <br/>

  <div class="flex columns-2 items-center justify-evenly p-8">
    <div class=" flex-1 bg-white p-8">
    <div class="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
  <h4 class="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    Sign Up
  </h4>
  <p class="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
    Enter your details to register.
  </p>
  <form class="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
    <div class="mb-4 flex flex-col gap-6">
      <div class="relative h-11 w-full min-w-[200px]">
        <input
          class="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeHolder=" "
        />
        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Name
        </label>
      </div>
      <div class="relative h-11 w-full min-w-[200px]">
        <input
          class="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeHolder=" "
        />
        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Email
        </label>
      </div>
      <div class="relative h-11 w-full min-w-[200px]">
        <input
          type="password"
          class="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeHolder=" "
        />
        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Password
        </label>
      </div>
    </div>
    <div class="inline-flex items-center">
      <label
        class="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
        for="checkbox"
        data-ripple-dark="true"
      >
        <input
          type="checkbox"
          class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
          id="checkbox"
        />
        <span class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
      <label
        class="mt-px cursor-pointer select-none font-light text-gray-700"
        for="checkbox"
      >
        <p class="flex items-center font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
          I agree the
          <a
            class="font-semibold transition-colors hover:text-pink-500"
            href="#"
          >
            &nbsp;Terms and Conditions
          </a>
        </p>
      </label>
    </div>
    <button
      class="mt-6 block w-full select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      Register
    </button>
    <p class="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      Already have an account?
      <a
        class="font-semibold text-pink-500 transition-colors hover:text-blue-700"
        href="#"
      >
        Sign In
      </a>
    </p>
  </form>
</div>

<div class="w-full pt-5 px-4 mb-8 mx-auto ">
    <div class="text-sm text-gray-700 py-1">
        Made with <a class="text-gray-700 font-semibold" href="https://www.material-tailwind.com/docs/html/form?ref=tailwindcomponents" target="_blank">Material Tailwind</a> by <a href="https://www.creative-tim.com?ref=tailwindcomponents" class="text-gray-700 font-semibold" target="_blank"> Creative Tim</a>.
    </div>
</div>



    </div>
    <div class="w-80 bg-red-300">
      jdhfhd
    </div>
    
  </div>

  
       </div>      
</div>

  </div>
    </main>
  )
}
