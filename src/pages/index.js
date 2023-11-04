import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'


export default function Home() {
  return (
    <main
    >

      <div class="h-screen bg-gray-50 flex flex-col justify-center items-center">

    <div class="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
        <Image src="/images/instagram.png" width="250" height="150"/>
        <form class="mt-8 w-64 flex flex-col">
            <input autofocus
                   class="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                   id="email" placeholder="Phone number, username, or email" type="text" />
            <input autofocus
                   class="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                   id="password" placeholder="Password" type="password" />
            
            <Link href="/dashboard" class=" text-sm text-center bg-blue-600 text-white py-1 rounded font-medium">Login </Link>
        </form>
        <div class="flex justify-evenly space-x-2 w-64 mt-4">
            <span class="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
            <span class="flex-none uppercase text-xs text-gray-400 font-semibold">or</span>
            <span class="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
        </div>
        <button class="mt-4 flex">
            <div class="bg-no-repeat facebook-logo mr-1"></div>
            <span class="text-xs text-blue-900 font-semibold">Log in with Facebook</span>
        </button>
        <a class="text-xs text-blue-900 mt-4 cursor-pointer -mb-4">Forgot password?</a>
    </div>
    <div class="bg-white border border-gray-300 text-center w-80 py-4">
        <span class="text-sm">Don't have an account? </span>

        <a class="text-blue-500 text-sm font-semibold">Sign up</a>

    </div>
    <div class="mt-3 text-center">
        <span class="text-xs">Get the app</span>
        <div class="flex mt-3 space-x-2">
            <div class="bg-no-repeat apple-store-logo"></div>
            <div class="bg-no-repeat google-store-logo"></div>
        </div>
    </div>
</div>
    </main>
  )
}
