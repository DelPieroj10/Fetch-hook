import { useFetch } from "../Hook/useFetch";

export const UsersComponents = () => {

  const { data, isLoading, errors } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  console.log(data);
  
  return (
    <>
      <h1>Users list</h1>
      {
        isLoading 
        ? (
          <h4>loading...</h4>
        ) : errors 
        ? (
          <p>Has been an error: {errors} </p>
        ) : (
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Website</th>
              </tr>
            </thead>
            <tbody>
              {data.map(user => {
                return (
                  <tr key={user.id}>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.website}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
    </>
  );
};
