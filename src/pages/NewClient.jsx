import { useNavigate, Form, useActionData } from 'react-router-dom';
import { Errors } from '../components/Errors';
import UserForm from '../components/UserForm';

export const action = async ({ request }) => {
  const formData = await request.formData();

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
};

export const NewClient = () => {
  const navigate = useNavigate();
  const errors = useActionData();

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
        {errors?.length && errors.map((e, i) => <Errors key={i}>{e}</Errors>)}
        <Form method="post" noValidate>
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
