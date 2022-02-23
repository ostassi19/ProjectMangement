import {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {render} from "react-dom";
import {useDispatch} from "react-redux";
import httpClient from "../http/http-client";
import {addProject} from "./action";

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = (

    ) => setShow(false);
    const handleShow = () => setShow(true);
    const [modalOpen, setModalOpen] = useState(false);
    const[title, setTitle]= useState('');
    const[content, setContent]= useState('');
    const dispatch= useDispatch();
    const add=()=>{
        httpClient.post('/cards', {title: title, content: content}).then(
            response=>{
                dispatch(addProject(response.data))
            }
        )
        setModalOpen(!modalOpen)
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Ajouter  projet
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter projet</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        fermer
                    </Button>
                    <Button variant="primary" onClick={add}>
                        sauvegarder
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Example;