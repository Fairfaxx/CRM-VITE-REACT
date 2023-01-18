export const getClientsFromApi = async () => {
  const resp = await fetch(import.meta.env.VITE_API_URL);
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
