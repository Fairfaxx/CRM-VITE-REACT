import { useNavigate } from 'react-router-dom';

export const Clients = ({ client }) => {
  const navigate = useNavigate();
  return (
    <>
      <tr className="border-b">
        <td className="p-6 space-y-2">
          <b>{client.name}</b>
        </td>
        <td className="p-6">
          <p className="text-gray-600">
            <span className="text-gray-800 uppercase font-bold">Email: </span>
            {client.email}
          </p>
          <p className="text-gray-600">
            <span className="text-gray-800 uppercase font-bold">Phone: </span>
            {client.phone}
          </p>
          <p className="text-gray-600">
            <span className="text-gray-800 uppercase font-bold">Company: </span>
            {client.company}
          </p>
        </td>
        <td className="p-6 flex gap-3">
          <button
            type="button"
            className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
            onClick={() => navigate(`/clients/${client.id}/edit`)}
          >
            Edit
          </button>
          <button
            type="button"
            className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};
