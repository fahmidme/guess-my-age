import { useFetcher } from "@remix-run/react";

export default function Play() {
    const agify = useFetcher();
    const { name, age, count } = agify.data || {};

    return (
        <div className="m-20">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Guess My Age</h3>
                    <p className="mt-1 text-sm text-gray-600">
                        After you submit your name, we'll guess your age. We use Agify API to do this.
                    </p>
                    </div>
                </div>
                <div className="mt-5 md:col-span-2 md:mt-0">
                    <agify.Form method="get" action="/play/fetch-agify">
                        <div className="shadow sm:overflow-hidden sm:rounded-md">
                            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-3 sm:col-span-2">
                                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                    Your Name
                                </label>
                                <div className="mt-1 flex rounded-md">
                                    <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:outline-none sm:text-sm"
                                    placeholder="Fahmid Uddin"
                                    />
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Guess My Age
                            </button>
                            </div>
                        </div>
                    </agify.Form>
                </div>
            </div>

            {agify.data && (
                agify.data.error ? (
                    <p>{agify.data.error}</p>
                ) : (
                    <div className="overflow-hidden bg-white shadow sm:rounded-lg mt-20">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">We guessed your age</h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">Don't freak out!</p>
                        </div>
                        <div className="border-t border-gray-200">
                            <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Name</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{name}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Age</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{age}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Count</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{count}</dd>
                            </div>
                            </dl>
                        </div>
                        </div>
                )
            )}
        </div>
    );
  }