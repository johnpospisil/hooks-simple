import React, { useState, useEffect } from "react";
import axios from "axios";

const useResoources = resource => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async resource => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );

      setResources(response.data);
    })(resource);
  }, [resource]);
  return resources;
};

const ResourceList = ({ resource }) => {
  const resources = useResoources(resource);

  return (
    <div>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </div>
  );
};

export default ResourceList;
