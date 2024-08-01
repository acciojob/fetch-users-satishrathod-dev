import "regenerator-runtime/runtime";
import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import axios from "axios";

const fetchURL = "https://reqres.in/api/users";

const App = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    // const getData = axios.get(fetchURL).then((response) => {
    //   setPost(response.data);
    //   console.log(response.data);
    // });
    const getData = async () => {
      try {
        const response = await axios.get(fetchURL);
        setPost(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);
  // const getData = async () => {
  //   const response = await axios.get("https://reqres.in/api/users");
  //   console.log(response);
  // };

  // if (!post)
  return (
    <div>
      <pre>{post ? JSON.stringify(post, null, 2) : "Loading..."}</pre>
    </div>
  );
};

export default App;
