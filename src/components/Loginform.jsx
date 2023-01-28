import { useForm } from 'react-hook-form';

function LoginForm() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // send data to server, etc.
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg">
      <h2 className="text-lg font-medium mb-4">Login</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          name="email"
          ref={register({ required: true })}
          className={`border border-gray-400 p-2 rounded-lg w-full ${
            errors.email && 'border-red-500'
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs italic">Email is required</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Password</label>
        <input
          name="password"
          type="password"
          ref={register({ required: true })}
          className={`border border-gray-400 p-2 rounded-lg w-full ${
            errors.password && 'border-red-500'
          }`}
        />
        {errors.password && (
          <p className="text-red-500 text-xs italic">Password is required</p>
        )}
      </div>
      <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
