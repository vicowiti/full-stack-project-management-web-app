import React from "react";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { FaPlus, FaUser } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { GET_CLIENTS } from "../queries/clientQueries";
import { GET_PROJECTS } from "../queries/projectQueries";
import Spinnerr from "./Spinner";
import { ADD_PROJECT } from "../mutations/projectMutations";

const NewProjectModal = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [clientId, setClientId] = useState("");
  const [status, setStatus] = useState("new");

  const [addProject] = useMutation(ADD_PROJECT, {
    variables: {
      name,
      description,
      status,
      clientId,
    },
    update(cache, { data: { addProject } }) {
      const { projects } = cache.readQuery({ query: GET_PROJECTS });
      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: [...clients, addProject] },
      });
    },
  });

  //Get clients for select
  const { loading, error, data } = useQuery(GET_CLIENTS);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, description, status, clientId);
    if (name === "" || description === "" || status === "") {
      return window.alert("Please fill in all the fields");
    }

    addProject(name, description, clientId, status);

    setDescription("");
    setName("");
    setStatus("new");
    setClientId("");
  };

  if (loading) return <Spinnerr />;
  if (error) return <p className="text-danger">Something went wrong!</p>;

  const { clients } = data;

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="d-flex align-items-center gap-2"
      >
        Add new Project <FaPlus />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                id="description"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Project Status</Form.Label>
              <Form.Select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="new">Not Started</option>
                <option value="progress">In Progress</option>
                <option value="completed">Completed</option>
              </Form.Select>
            </Form.Group>

            <Form.Group>
              <Form.Label>Client</Form.Label>
              <Form.Select
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
              >
                {clients.map((client) => (
                  <option key={client.id} value={client.id}>
                    {client.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mt-3">
              <Button variant="primary" type="submit" onClick={handleClose}>
                Add New Project
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
// };

export default NewProjectModal;
