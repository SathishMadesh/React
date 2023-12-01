const Users = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      Axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
          console.log(response.data);
          setUsers(response.data);
        })
        .catch();
    }, []);
  
    return (
      <div>
        {users.length > 0 ? (
          <div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <h3>No Data</h3>
          </div>
        )}
      </div>
    );
  };
  
  export default Users;