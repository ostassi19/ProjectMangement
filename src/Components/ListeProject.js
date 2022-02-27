import {Component, useEffect} from "react";
import {Button, Container, Navbar, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import httpClient from "../http/http-client";
import projectReducer from "./reducer";
import {setProjects} from "./action";
import AddProject from "./addProject";
import './project.css'
import {deconnexion} from "../pages/action";
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();

    const onDeconnexion = () => {
        localStorage.removeItem('token');
        dispatch(deconnexion());
        navigate('/');
    }
 {
        return(
            <div>
                <div className="button">
                    <Button onClick={() => onDeconnexion()}>Logout</Button>
                </div>
                <div className="button">
                    <AddProject/>
                </div>
                <Table className="app-container">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        projects.map(project=>(
                            <tr key={project.id} >
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