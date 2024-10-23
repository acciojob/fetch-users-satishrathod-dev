import "regenerator-runtime/runtime";
import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import axios from "axios";
// import { get } from "cypress/types/lodash";

// const fetchURL = "https://reqres.in/api/user";

const App = () => {
  const [posts, setPost] = useState([]);

  // const getData = axios.get(fetchURL).then((response) => {
  //   setPost(response.data);
  //   console.log(response.data);
  // });
  const getData = async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users");
      setPost(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Blue Whales</h1>
      <button className="btn" onClick={getData}>
        Get User List
      </button>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {posts.length > 0 ? (
            posts.map((user) => (
              <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  <img
                    src={user.avatar}
                    alt={`${user.first_name} ${user.last_name}`}
                    width="50"
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No data found to display</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
