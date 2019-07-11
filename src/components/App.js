import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

// this is now a functional component
const App = () => {
  // array destructuring below
  const [resource, setResource] = useState("posts");

  return (
    <div>
      <h2>UserList:</h2>
      <UserList />
      <hr />
      <div>
        <h4>Select a Resource:</h4>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>ToDos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
