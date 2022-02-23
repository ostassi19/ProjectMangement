const setProjects= (projects)=>{
    return{
        type: "SET_PROJECTS",
        payload: projects
    }
}
const addProject= (project)=>{
    return{
        type: "ADD_PROJECTS",
        payload: project
    }
}

export {setProjects, addProject}