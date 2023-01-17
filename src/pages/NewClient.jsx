import { useNavigate, Form } from 'react-router-dom';
import UserForm from '../components/UserForm';

export const action = async ({ request }) => {
  const formData = await request.formData();

  // A way to extract the form data
  // const data = Object.fromEntries(formData);
  // console.log(data);
};

export const NewClient = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">New Customer</h1>
      <p className="mt-3">Fill all the fields to add a new client</p>

      <div className="flex justify-end">
        <button
          onClick={() => navigate('/')}
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase hover:bg-blue-400"
        >
          Go Back
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        <Form method="post">
          <UserForm />
          <input
            type="submit"
            className="bg-blue-800 text-white mt-5 w-full p-3 uppercase text-lg"
            value="Register new account"
          />
        </Form>
      </div>
    </>
  );
};
