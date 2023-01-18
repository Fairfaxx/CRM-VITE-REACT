import { getClientFromApi, EditExistingClient } from '../api/Client';
import UserForm from '../components/UserForm';
import {
  Form,
  useLoaderData,
  useNavigate,
  redirect,
  useActionData,
} from 'react-router-dom';
import { Errors } from '../components/Errors';

export async function loader({ params }) {
  const client = await getClientFromApi(params.clientId);

  if (Object.values(client).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'No client found',
    });
  }
  return client;
}

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const client = await getClientFromApi(params.clientId);
  console.log(client);

  // A way to extract the form data
  const data = Object.fromEntries(formData);

  const email = formData.get('email');
  //Validate
  const errors = [];

  if (Object.values(data).includes('')) {
    errors.push('All fields are required');
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (!regex.test(email)) {
    errors.push('The email address is not a valid email address');
  }
  // Return errors if there are any
  if (Object.keys(errors).length) return errors;
  console.log(data);

  await EditExistingClient(params.clientId, data);
  return redirect('/');
};

export const EditClient = () => {
  const client = useLoaderData();
  const navigate = useNavigate();
  const errors = useActionData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Edit Customer</h1>
      <p className="mt-3">Fill all the fields to edit this client</p>

      <div className="flex justify-end">
        <button
          onClick={() => navigate('/')}
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase hover:bg-blue-400"
        >
          Go Back
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        {errors?.length && errors.map((e, i) => <Errors key={i}>{e}</Errors>)}
        <Form method="put" noValidate>
          <UserForm client={client} />
          <input
            type="submit"
            className="bg-blue-800 text-white mt-5 w-full p-3 uppercase text-lg"
            value="Edit account"
          />
        </Form>
      </div>
    </>
  );
};
