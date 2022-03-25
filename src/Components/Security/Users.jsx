import Layout from "../../pages/Layout";

function UsersContent() {
  return(
    <h1>Users</h1>
  );
}

export default function Users(){
  return (
    <Layout component={<UsersContent/>} />
  );
}