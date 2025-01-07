import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/hello")
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div>
      <h1>React and Spring connect</h1>
      <h2>React: Hello Spring...!</h2>
      <h2>{message ? message : `Error ${error}`}</h2>
    </div>
  );
};
export default App;
