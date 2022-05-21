import React from "react";
import './App.css';
import Header from './components/header/header.js';
import Search from './components/body/search.js';
import { useState } from "react";
import Userdata from "./user.json";

export default function App() {
  const [data, setData] = useState(Userdata.Users);
  const [search, setsearch] = useState("");

 // sorting the users data
  data.sort((a, b) => a.Name.localeCompare(b.Name));

  /* filter the result when input change */
  const handleChange = (e) => {
    e.preventDefault();
    const searchKeyword = e.target.value;

    if (searchKeyword !== "") {
      const results = data.filter((name) => {
        return name.Name.toLowerCase().startsWith(search.toLowerCase()) || name.email.toLowerCase().startsWith(search.toLowerCase());
      });
      setData(results);
    } else {
      setData(Userdata.Users);
    }
    setsearch(searchKeyword);
  };

  /* add new user  */
  const AddUsers = (e) => {
    e.preventDefault();
    const lastId = data.length - 1;
    const { Name } = e.target.elements;
    const newUsers = {
      Id: lastId + 1,
      Name: Name.value,
    };
    setData([...data, newUsers]);
  };

  /* delete user  */
  const DeleteUsers = (Id) => {
    const RemainingUsers = data.filter((task) => Id !== task.Id);
    setData(RemainingUsers);
  };

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Search
          data={data}
          handleChange={handleChange}
          search={search}
          DeleteUsers={DeleteUsers}
          AddUsers={AddUsers} 
        />
      </div>
    </div>
  );
}