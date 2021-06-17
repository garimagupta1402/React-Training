import React, { useEffect, useRef, useState } from "react";
import Search from "./Search";
import SideNav from "react-simple-sidenav";
<SideNav
  title="Simple Sidenav"
  items={["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]}
/>; 

const Form = (props) => {
  console.log("PROPS FORM");
  console.log(props);

  const [input, setinput] = useState("");
  const [input2, setinput2] = useState("");
  const [input3, setinput3] = useState("");
  const [input4, setinput4] = useState("");
  const [input5, setinput5] = useState("");

  const inputRef = useRef(null)
  
  useEffect(() => {
    inputRef.current.focus()
  })
  

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("handle submit in  form");

    props.onSubmit({
      id: Date.now(),
      text: input,
      value2: input2,
      value3: input3,
      value4: input4,
      value5: input5,
    });

    setinput("");
    setinput2("");
    setinput3("");
    setinput4("");
    setinput5("");
  };

  const handleChange = (e) => {
    setinput(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setinput2(e.target.value);
  };
  const handleChange3 = (e) => {
    setinput3(e.target.value);
  };
  const handleChange4 = (e) => {
    setinput4(e.target.value);
  };
  const handleChange5 = (e) => {
    setinput5(e.target.value);
  };

  return (
    <div>
      {props.isEdit ? (
        <h3 className="Edit">Edit Here </h3>
      ) : (
        <Search user={props.user} />
      )}

      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input1"
          type="text"
          onChange={handleChange}
          placeholder={props.isEdit ? props.edit.value : "Add First Name"}
          value={input}
          name="text"
          ref={inputRef}
        />

        <input
          className="input2"
          type="text"
          onChange={handleChangeNumber}
          placeholder={props.isEdit ? props.edit.value : "Add Last Name"}
          value={input2}
          name="value2"
       
        />

        <input
          className="input1"
          type="date"
          onChange={handleChange3}
          placeholder={props.isEdit ? props.edit.value : "Add DOB"}
          value={input3}
          name="value3"
       
        />
        <input
          className="input1"
          type="text"
          onChange={handleChange4}
          placeholder={props.isEdit ? props.edit.value : "Add Address"}
          value={input4}
          name="value4"
       
        />
        <input
          className="input1"
          type="email"
          onChange={handleChange5}
          placeholder={props.isEdit ? props.edit.value : "Add email"}
          value={input5}
          name="value5"
       
        />
       <button className="btn  btn-warning mt-2 mb-2  none_btn" >Add User</button>
      </form>
    </div>
  );
};

export default Form;
