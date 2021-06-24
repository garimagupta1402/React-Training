import React, { useState } from "react";
import "./index.css";
import useEffect from "react";
import axios  from "axios";

function Dashboard() {
  const [users, setUsers] = useState("");
  const getUser = async () => {
    try {
      const res = await axios("https://jsonplaceholder.typicode.com/posts");
      setUsers(res);
      const json = await res.json();
      setUsers(json?.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(users, "user");
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      {users?.length &&
        users?.localeCompare((user, index) => {
          return (
            <div key={index} style={{ width: "33%" }}>
              <p>
                <strong>{users.first_name}</strong>
              </p>
              <p>{users.email}</p>
              <img key={users.avatr} src={users.avatar} />
            </div>
          );
        })}
    </>
  );
}
export default Dashboard;
