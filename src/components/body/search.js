import React from 'react';
import deleteicon from '../images/delete.svg';
import "./search.css";
import Select from "react-select";
const Search = ({ search, data, handleChange, DeleteUsers,AddUsers }) => (
  <div className="search">
  <h2>Customer Success Managers</h2>
    <form name="add_users" onSubmit={AddUsers}>
    <input
      type="text"
      name="Name"
      placeholder="Search..."
      value={search}
      onChange={(e) => handleChange(e)}
      className="search-input"
    />
    <button className="search-add-button">Add CSM</button>
    <Select myFontSize="20px" options ={data &&
      data.map((item, index) => {
          return (
            <div
              key={item.Id}
            >
              {" "}
              {item.Name}{" "}
            </div>
          );
        })}/>
    </form>
    <div className="search-result">
      {data &&
      data.map((item, index) => {
          return (
            <div
              key={item.Id} 
              style={{border: "1px solid #ccc", padding: "10px", margin: "10px"}}
            >
              {" "}
              {item.Name}{"\n"}
              <div>{item.email}</div>
              
              {"\n"}
              {item.Designation}
              <button id={item.Id} onClick={() => DeleteUsers(item.Id)} className="list-delete-button">
              <img src={deleteicon} alt="delete-icon" className="delete-user"/>
              </button>
            </div>
          );
        })}
        </div>
   
  </div>
);

export default Search;