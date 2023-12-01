
const Dashboard = () => {
    return (
      <div className="min-h-screen bg-blue-50">
      <div className="grid gap-10 p-4 mt-8 lg:grid-cols-3 sm:grid-cols-2">
        {/*Grid starts here*/}
        <div className="flex items-center justify-between p-5 bg-white rounded shadow-sm">
          <div>
            <div className="text-sm text-gray-400 ">Check in Today</div>
            <div className="flex items-center pt-1">
              <div className="text-3xl font-medium text-gray-600 ">34</div>
            </div>
          </div>
          <div className="text-pink-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
       
        <div className="flex items-center justify-between p-5 bg-white rounded shadow-sm">
          <div>
            <div className="text-sm text-gray-400 ">Check Out Today</div>
            <div className="flex items-center pt-1">
              <div className="text-3xl font-medium text-gray-600 ">44</div>
            </div>
          </div>
          <div className="text-pink-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="flex items-center justify-between p-5 bg-white rounded shadow-sm">
          <div>
            <div className="text-sm text-gray-400 ">Total Properties</div>
            <div className="flex items-center pt-1">
              <div className="text-3xl font-medium text-gray-600 ">1000</div>
            </div>
          </div>
          <div className="text-pink-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </div>
        </div>
        {/* Grid ends here..*/}
      </div>
      <div className="grid gap-3 p-4 mt-5 lg:grid-cols-3 md:grid-cols-3">
        <div className="flex flex-col col-span-2 p-8 bg-white rounded shadow-sm">
          <b className="flex flex-row text-gray-500">Property Release for today</b>
          <canvas className="p-5" id="chartLine" />
        </div>
        <div className="flex flex-col p-5 bg-white rounded shadow-sm ">
          <b className="flex flex-row text-gray-500">Occupancy Percentage</b>
          <canvas className="p-5" id="chartRadar" />
        </div>
      </div>
      {/*Table*/}
      <div className="p-4 font-bold text-gray-600">Clients</div>
      <div className="grid gap-3 p-4 lg:grid-cols-1 md:grid-cols-1">
        <div className="flex items-center justify-between flex-auto col-span-2 p-5 bg-white rounded shadow-sm">
          <table className="min-w-full divide-y divide-gray-200 table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Role
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                      <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"  />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        Jane Cooper
                      </div>
                      <div className="text-sm text-gray-500">
                        jane.cooper@example.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  Admin
                </td>
                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                      <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"  />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        Jane Cooper
                      </div>
                      <div className="text-sm text-gray-500">
                        jane.cooper@example.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  Admin
                </td>
                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    );
  }
  export default Dashboard