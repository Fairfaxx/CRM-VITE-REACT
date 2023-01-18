export const getClientsFromApi = async () => {
  const resp = await fetch(import.meta.env.VITE_API_URL);
  const result = await resp.json();
  const clients = result;
  return clients;
};

export const getClientFromApi = async (id) => {
  const resp = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
  const result = await resp.json();
  const clients = result;
  return clients;
};

export const addNewClient = async (data) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}`, {
      method: 'POST',
      //con el body y stringify convierto lo que viene en objeto a json
      body: JSON.stringify(data),
      // con headers content-type definimos la peticion en modo json
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const EditExistingClient = async (id, client) => {
  console.log(client);
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(client),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const deleteExistingClient = async (id) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'DELETE',
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
};
