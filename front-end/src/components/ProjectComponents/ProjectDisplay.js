import React, {useState, useEffect} from "react";
import axios from "axios";
import { ProjectTable } from "./ProjectTable";

  
export function ProjectDisplay() {

    const [project, setProject] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8082/jobs')
         .then(response => setProject(response.data) )

    },[0])

    const projects = project.map(item => {
            return (
                <ProjectTable 
                    key={item._id}
                    {...item}   
                />
            )
    })

    return (

        [projects]
    )

}
