export const Clients = ({ client }) => {
  return (
    <>
      <tr className="border-b">
        <td className="p-6 space-y-2">
          <b>{client.name.title}</b>
          <p className="text-2xl text-gray-800">
            {client.name.first} {client.name.last}
          </p>
          <img src={client.picture.thumbnail} />
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
            <span className="text-gray-800 uppercase font-bold">State: </span>
            {client.location.state}
          </p>
        </td>
        <td className="p-6 flex gap-3">
          <button
            type="button"
            className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
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
