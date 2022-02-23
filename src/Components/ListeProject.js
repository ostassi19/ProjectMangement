import {Component, useEffect} from "react";
import {Button, Table} from "react-bootstrap";
import Example from "./addProject";
import {useDispatch, useSelector} from "react-redux";
import httpClient from "../http/http-client";
import projectReducer from "./reducer";
import {setProjects} from "./action";

const ListeProject=() =>{

    const dispatch= useDispatch();
    const getProjects=()=>{
        httpClient.get('/cards').then(
            response =>{
                dispatch(setProjects(response.data))
            }
        )
    }

    useEffect(()=> getProjects(), [])
    const projects= useSelector(state=> state.projectReducer.projects)
    console.log(projects);
 {
        return(
            <div>
                <Example/>
                <Table striped>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        projects.map(project=>(
                            <tr key={project.id} >
                                <td>{project.id}</td>
                                <td>{project.title}</td>
                                <td>{project.content}</td>
                            </tr>

                        ))
                    }
                    </tbody>
                </Table>
            </div>

        )
    }
}
export default ListeProject;