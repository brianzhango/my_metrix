import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProjectTable } from "./ProjectTable";
import { useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

export function ProjectDisplay() {
  const [project, setProject] = useState([]);

  const navigate = useNavigate()

  const {user} = useSelector((state) => state.auth)

  useEffect(() => {if(user == null)
    {
      navigate('/login')
    }
    else {
    
    axios
      .get("http://localhost:8082/jobs", { headers: {
        'Authorization': 'Bearer ' + user.token
      }})
      .then((response) => setProject(response.data))
     }
    }, [0]);

 
  const projects = project.map((item) => {
    return <ProjectTable key={item._id} {...item} />;
  });

  return [projects];
}
