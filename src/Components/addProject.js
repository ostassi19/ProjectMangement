import {useState} from "react";
import {Button, Modal, ModalBody, ModalFooter} from "react-bootstrap";
import {useDispatch} from "react-redux";
import httpClient from "../http/http-client";
import {addProject} from "./action";
import ModalHeader from "react-bootstrap/ModalHeader";

function AddProject() {

    const [show, setShow] = useState(false);
    const handleClose = (
    ) => setShow(false);
    const handleShow = () => setShow(true);
    const[title, setTitle]= useState('');
    const[content, setContent]= useState('');
    const dispatch= useDispatch();
    const add=()=>{
        httpClient.post('/cards', {title: title, content: content}).then(
            response=>{
                dispatch(addProject(response.data))
            }
        )
        handleClose()
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow} Style={{marginLeft: '200px'}}>
                Add
            </Button>

            <Modal show={show} onHide={handleClose}>
                <ModalHeader closeButton>
                    <Modal.Title>Ajouter projet</Modal.Title>
                </ModalHeader>
                <ModalBody>
                    <div className = "form-group">
                        <label>Title</label>
                        <input type="text" className = "form-control"  name = "title" value={title}
                               onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <input type="text" className = "form-control"  name = "description" value={content}
                               onChange={(e) => setContent(e.target.value)}/>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button variant="secondary" onClick={handleClose} Style={{
                        width: '50px'
                    }}>
                        fermer
                    </Button>
                    <Button variant="primary" onClick={add} Style={{
                        width: '176px'
                    }}>
                        sauvegarder
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}
export default AddProject;