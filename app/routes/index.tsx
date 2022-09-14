import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Let Us Guess Your Age</span>
          <span className="block text-indigo-600">Warning: You may be mindblown.</span>
          <span className="text-sm text-gray-500">Created by Fahmid: <a href="https://github.com/fahmidme/" target="_blank">https://github.com/fahmidme/</a></span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              to="/play"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
            >
              Play Game
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
