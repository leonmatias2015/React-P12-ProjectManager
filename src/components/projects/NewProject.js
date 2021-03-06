import React, {Fragment, useContext, useState} from "react";

import ProjectContext from './../../context/projects/ProjectContext';

const NewProject = () => {

    // get state form
    const projectsContext = useContext(ProjectContext);
    const {form, errorForm, showForm, addProject, showError} = projectsContext;


    const [project, saveProject] = useState({
        name: ''
    });

    const {name} = project;

    const onChangeProject = e => {
        saveProject({
            ...project,
            [e.target.name]: e.target.value
        })
    };

    const onSubmitProject = e => {
        e.preventDefault();

        // valid project
        if (name === '') {
            showError();
            return
        }

        // add to state
        addProject(project);

        // reload the form
        saveProject({
            name: ''
        })

    };

    return (
        <Fragment>

            <button
                className="btn btn-block btn-primario"
                onClick={() => showForm()}
            >Nuevo proyecto
            </button>
            {form ? (
                <form action="" className="formulario-nuevo-proyecto" onSubmit={onSubmitProject}>
                    <input type="text"
                           className="input-text"
                           placeholder="Nombre proyecto"
                           name="name"
                           value={name}
                           onChange={onChangeProject}
                    />
                    <input type="submit"
                           className="btn btn-primario btn-block"
                           value="Agregar Proyecto"
                    />

                </form>
            ) : null}
            {errorForm ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null}

        </Fragment>
    )
};

export default NewProject;
