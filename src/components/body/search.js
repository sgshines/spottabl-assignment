import React from 'react';
import deleteicon from '../images/delete.svg';
import "./search.css";
import Select from "react-select";
import options from "../../user.json";


export default function Search ({ search, data, handleChange, DeleteUsers,AddUsers }){
  





  return(
  <div className="search">
  <h2>Customer Success Managers</h2>
  <form name="add_users" onSubmit={AddUsers}>
  <Select 
        name="accounts"
        options={options.Users}
        type="text"
        
        getOptionLabel={(option) => option.Name}
        getOptionValue={(option) => option.Id}
        isMulti="true"
        
  />
    </form>
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
}