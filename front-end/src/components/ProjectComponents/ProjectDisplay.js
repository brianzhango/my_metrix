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
      .get("/api/jobs", { headers: {
        'Authorization': 'Bearer ' + user.token
      }})
      .then((response) => setProject(response.data))
      .catch(function (error) {
        // handle error
        console.log(error);
      })
     }
    },[0]);

    console.log(project)

    
    const projects = Array.isArray(project) ? project.map((item) => {
      return <ProjectTable key={item._id} {...item} />;
    }) : [];

  return [projects];
}
