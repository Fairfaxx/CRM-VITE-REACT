export const getClientsFromApi = async () => {
  const resp = await fetch(import.meta.env.VITE_API_URL);
  const result = await resp.json();
  const clients = result;
  return clients;
};
