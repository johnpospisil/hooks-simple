import React, { useState } from "react";
import ResourceList from "./ResourceList";

// this is now a functional component
const App = () => {
  // array destructuring below
  const [resource, setResource] = useState("posts");

  return (
    <div>
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>ToDos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
