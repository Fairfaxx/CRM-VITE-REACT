import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="space-y-8">
      <h1 className="text-center text-6xl font-extrabold mt-20 text-blue-900">
        CRM -- CLIENTS
      </h1>
      <p className="text-center">There was an error, sorry...</p>
      <p className="text-center">{error.statusText || error.message}</p>
    </div>
  );
};
