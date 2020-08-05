import React, { useState, useEffect } from "react";
import ResourceManager from "../Modules/ResourceManager";
import "./ResourceForm.css";
import { Form, Button } from "react-bootstrap";



const ResourceEditForm = (props) => {
  const [resource, setResource] = useState({
    title: "",
    subjectId: parseInt(sessionStorage.resourceSubjectId),
    synopsis: "",
    url:"",
    date: "",
    user: sessionStorage.activeUser,
    userId: parseInt(sessionStorage.activeUserId)

   
  });
//   const [notes, setNote] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...resource };
    stateToChange[evt.target.id] = evt.target.value;
    setResource(stateToChange);
  };

  const updateExistingResource = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedResource = {
      id: props.match.params.resourceId,
      title: resource.title,
      subjectId: parseInt(resource.subjectId),
      synopsis: resource.synopsis,
      url: resource.url,
      date: resource.date,
      user: sessionStorage.activeUser,
      userId: parseInt(sessionStorage.activeUserId)
      
    };
    

    ResourceManager.Update("resources", editedResource).then(() =>
      props.history.push("/resources")
    );
  };

  useEffect(() => {
    ResourceManager.get("resources", props.match.params.resourceId)
      .then(resource => {
        setResource(resource)
        setIsLoading(false)
    })
  }, [])

    

  return (
    <>
      <form>
        <fieldset>
          <div className="form-grid">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="title"
              value={resource.title}
            />
            <label htmlFor="subject">Subject</label>
            <select
              required
              className="form-control"
              onChange={handleFieldChange}
              id="subjectId"
              value={parseInt(resource.subjectId)}
            >
              <option value="1">Java</option>
              <option value="2">Javascript</option>
              <option value="3">PHP</option>
              <option value="4">C#</option>
              <option value="5">Ruby</option>
              <option value="6">REACT</option>
              <option value="7">CRUD</option>
            </select>

            <label htmlFor="synopsis">Synopsis</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="synopsis"
              value={resource.synopsis}
            />
            <label htmlFor="Url">url</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="url"
              value={resource.url}
            />
            <label htmlFor="date">Date</label>
            <input
              type="date"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="date"
              value={resource.date}
            />
            {/* <label htmlFor="note"> ADD Note</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="note"
              value={note.resourceId}
            /> */}
          </div>

          {/* <select
            className="form-control"
            id="noteId"
            value={notes.noteId}
            onChange={handleFieldChange}
          >
            {notes.map((note) => (
              <option key={note.id} value={note.id}>
                {notes.id}
              </option>
            ))}
          </select>
          <label htmlFor="noteId">Note</label> */}
          <div className="alignRight">
            <Button
              type="button"
              disabled={isLoading}
              onClick={updateExistingResource}
              className="btn btn-primary"
            >
              Submit
            </Button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default ResourceEditForm;
