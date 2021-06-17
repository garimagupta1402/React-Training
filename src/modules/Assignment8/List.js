import React, { useEffect, useState } from "react";
import UserForm from "./UserForm";

import "./User.css";

import "bootstrap/dist/css/bootstrap.min.css";

const UserList = () => {
  const [user, setuser] = useState([]);

  const [edit, setEdit] = useState({
    id: null,
    value: "",
    quantity: "",
    value3: "",
    value4: "",
    value5: "",
  });

  const addUser = (User) => {
    console.log(User);

    console.log("ADD User ");

    if (
      User.text.length <= 0 ||
      User.quantity == "" ||
      User.value3.length <= 0 ||
      User.value4.length <= 0 ||
      User.value5.length <= 0
    )
      return;

    const newuser = [User, ...user];

    setuser(newuser);
    console.log(...user);
  };

  const removeUser = (id) => {
    const removeArr = [...user].filter((User) => User.id !== id);
    setuser(removeArr);

    console.log("Remove called");
  };

  const updateUser = (id, newValue) => {
    if (
      newValue.text.length > 0 &&
      newValue.quantity != "" &&
      newValue.value3.length > 0 &&
      newValue.value4.length > 0 &&
      newValue.value5.length > 0
    )
      setuser((prev) => prev.map((item) => (item.id === id ? newValue : item)));
    else return;
  };

  const submitUpdate = (value) => {
    console.log("submitUpdate in UserList.js");
    updateUser(edit.id, value);
    setEdit({
      id: null,
      value: "",
      quantity: "",
      value3: "",
      value4: "",
      value5: "",
    });
  };

  if (edit.id) {
    return (
      <div>
        <UserForm edit={edit} isEdit={true} onSubmit={submitUpdate} />
      </div>
    );
  }

  return (
    <div className="Top-div">
      <UserForm onSubmit={addUser} user={user} />

      <div>
        <ul>
          {user.map((item) => {
            return (
              <div key={item.id} className="list-items">
                <li key={item.id} className="li-items">
                  {"First Name : " + item.text + "   "}
                  {" , Last Name: " + item.quantity + "   "}
                  {" , DOB: " + item.value3 + "   "}
                  {" , Address : " + item.value4 + "   "}
                  {" , email : " + item.value5}

                  <button
                    className="btn  btn-warning mt-2 mb-2"
                    onClick={() =>
                      setEdit({
                        id: item.id,
                        value: item.text,
                        quantity: item.quantity,
                        value3: item.value3,
                        value4: item.value4,
                        value5: item.value5,
                      })
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="btn  btn-dark mt-2 mb-2"
                    onClick={() => removeUser(item.id)}
                  >
                    Delete
                  </button>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
