import Layout from "../components/Layout";

const RegistrationView = () => {
  return (
    <Layout>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label>User Name</label>
        <input />
        <label>Password</label>
        <input />
        <label>Confirm Password</label>
        <input />
        <input type="submit" />
      </form>
    </Layout>
  );
};

export default RegistrationView;
