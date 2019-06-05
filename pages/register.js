import Button from "../components/Button";

const Field = ({ label, placeholder, id, type = "text" }) => {
  let autocomplete = "";

  if (type === "new-password") {
    autocomplete = "new-password";
    type = "password";
  }

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type={type}
        autocomplete={autocomplete}
        placeholder={placeholder}
      />
    </div>
  );
};

const RegistrationView = () => {
  return (
    <>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <Field label="Username" placeholder="Username" id="username" />
        <Field
          label="Password"
          placeholder="Password"
          id="password"
          type="new-password"
        />
        <Field
          label="Confirm Password"
          placeholder="Password"
          id="confirmPassword"
          type="new-password"
        />
        <Button>Submit</Button>
      </form>
    </>
  );
};

export default RegistrationView;
