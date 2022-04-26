/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddUser from "../AddUser";
import DeleteUser from "../DeleteUser";
import Header from "../Header";
import Skeleton from "../Skeleton";

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.users.fetchUsers();
  }, []);

  const { users, loading } = useSelector((state) => state.users);

  return (
    <>
      <Header />
      <div className="h-full container">
        <div className="flex items-center justify-between py-4">
          <h4 className="text-md text-purple-800">Users List</h4>
          <AddUser />
        </div>

        <div className="flex flex-col py-3">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b border-purple-800">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Website
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.length > 0 &&
                      users.map((user = {}, i) => (
                        <tr
                          key={user.id}
                          className="border-b border-purple-800"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {i + 1}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {user.name}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {user.email}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {user.website}
                          </td>
                          <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                            <DeleteUser user={user} />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>

                {loading && <Skeleton />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
