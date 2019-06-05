import Layout from "../components/Layout";

const RegistrationView = () => {
  return (
    <Layout>
      <form>
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
