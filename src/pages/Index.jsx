import { useLoaderData } from 'react-router-dom';
import { Clients } from '../components/Clients';
import { getClientsFromApi } from '../api/Client';

export const loader = async () => {
  const clients = getClientsFromApi();

  return clients;
};

export const Index = () => {
  const clients = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Customers</h1>
      <p className="mt-3">Manage your Clients</p>

      {clients.length > 0 ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Clients</th>
              <th className="p-2">Contact</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <Clients key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No Clients</p>
      )}
    </>
  );
};
