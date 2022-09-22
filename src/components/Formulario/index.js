import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import './styles.css';


const Formulario = (props) => {
	/*
	 Stateless
	 Statefull

	 Formularios controlados    --->>> estos pasos se realizan por cada input que tengamos
	 1.-Crear un estado (useState)
   2.-Vincular el input con el estado -> value
	 3.-Manejar el evento onChange
	  3.1.-Generamos una funcion que reciba el evento
	  3.2.- vincular el onChange del input 3.1
	  3.3.- Debemos actualizar el state accediendo al evento.target.value y usando la funcion que actualiza el estado
	 4.- Cuando tenemor controlados todos los inputs vamos a manejar el evento onSubmit del form
	  4.1.-Generamos una funcion que reciba el evento
		4.2.- vincular el onSubmit del form con el 4.1
		4.3.- Prevenir el comportamiento por defecto - evento.preventDefault()
	*/ 
	const [titulo,setTitulo] = useState("")//Paso #1
	const [descripcion,setDescripcion] = useState("");

	function manejaCambio(evento){                       //paso 3.1
    setTitulo(evento.target.value)
	}

	function manejaDescripcion(evento){
    setDescripcion(evento.target.value)
	}

  function enviarDatos(evento){
		evento.preventDefault();
		props.envioDeTarea({
			titulo:titulo,
			descripcion: descripcion,
			completada: false,
		})
		setTitulo("");
		setDescripcion("");
	}


	return (
		<form className='Formulario' onSubmit={enviarDatos}>
			<h2>Agrega tu tarea</h2>
			<input type="text" placeholder='Ingresa el Titulo' value={titulo} onChange={manejaCambio}/*paso #2*/ required />
			<input type="text" placeholder='Ingresa tu Descripcion' value={descripcion} onChange={manejaDescripcion}  required/>
			
			<Button variant="primary" type="submit">Agregar</Button>

		</form>
	);
};

export default Formulario;