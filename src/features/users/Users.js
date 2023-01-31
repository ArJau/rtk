import { useState } from "react";
import { useCreateUserMutation, useGetUsersQuery, useGetUniqUsersQuery } from "../api/apiSlice";

const Users = () => {
  const [inputValue, setInputValue] = useState("");

  const { data : allUsers} = useGetUsersQuery();
  const users =  allUsers ?? [];

  const [createUser] = useCreateUserMutation();

  const { data : uniqUser } = useGetUniqUsersQuery(inputValue);
  const user = uniqUser ?? [];

  const addUser = () => {
    createUser(inputValue);
    setInputValue("");
  };
  const getUser = () =>{
    setInputValue("");
  };
  console.log("data", users);

  return (
    <div>
      <div>Total: {users.length}</div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addUser}>Add user</button>
        <button onClick={getUser}>Search user</button>
        <div>
        {user.map((user, index) => (
          <div key={index}>{user.name}</div>
        ))}
      </div>
      </div>
      <div>
        {users.map((user, index) => (
          <div key={index}>{user.name}</div>
        ))}
      </div>
    </div>
  );
};
export default Users;
