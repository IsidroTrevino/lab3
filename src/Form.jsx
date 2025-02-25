import { useState } from "react";
import "./Form.css";

export const Form = () => {
  const [formState, setFormState] = useState({
    matricula: "",
    nombre: "",
    apellido: "",
    edad: null,
    universidad: "",
    carrera: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const { matricula, nombre, apellido, edad, universidad, carrera } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h1 className="text-center mb-4">Registro</h1>
          <hr className="mb-4" />

          <div className="row g-3">
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="A00..."
                  name="matricula"
                  value={matricula}
                  onChange={onInputChange}
                  id="matriculaInput"
                  disabled={isSubmitted}
                />
                <label htmlFor="matriculaInput">Matrícula</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Isidro"
                  name="nombre"
                  value={nombre}
                  onChange={onInputChange}
                  id="nombreInput"
                  disabled={isSubmitted}
                />
                <label htmlFor="nombreInput">Nombre</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Treviño"
                  name="apellido"
                  value={apellido}
                  onChange={onInputChange}
                  id="apellidoInput"
                  disabled={isSubmitted}
                />
                <label htmlFor="apellidoInput">Apellido</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="number"
                  className="form-control"
                  placeholder="18"
                  name="edad"
                  value={edad}
                  onChange={onInputChange}
                  id="edadInput"
                  disabled={isSubmitted}
                />
                <label htmlFor="edadInput">Edad</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tec de Monterrey"
                  name="universidad"
                  value={universidad}
                  onChange={onInputChange}
                  id="universidadInput"
                  disabled={isSubmitted}
                />
                <label htmlFor="universidadInput">Universidad</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="ITC"
                  name="carrera"
                  value={carrera}
                  onChange={onInputChange}
                  id="carreraInput"
                  disabled={isSubmitted}
                />
                <label htmlFor="carreraInput">Carrera</label>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <button 
              className="btn btn-primary btn-lg px-5"
              type="submit"
              onClick={() => setIsSubmitted(true)}
            >
              Guardar
            </button>
          </div>

          {isSubmitted && (
            <div className="mt-5 p-4 bg-light rounded-3">
            <h2 className="text-primary mb-4">Tus datos son:</h2>
            <div className="row">
                <div className="col-md-6">
                    <p className="mb-3"><strong>Matrícula:</strong> {matricula}</p>
                    <p className="mb-3"><strong>Nombre:</strong> {nombre}</p>
                    <p className="mb-3"><strong>Apellido:</strong> {apellido}</p>
                </div>
                <div className="col-md-6">
                    <p className="mb-3"><strong>Edad:</strong> {edad}</p>
                    <p className="mb-3"><strong>Universidad:</strong> {universidad}</p>
                    <p className="mb-3"><strong>Carrera:</strong> {carrera}</p>
                </div>
            </div>
        </div>
          )}
        </div>
      </div>
    </div>
  );
};