import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavbarComponent from './components/Navbar';
import Formulario from './components/Formulario';
import ListaTareas from './components/ListaTareas';

function App() {

	const todasLasTareasIniciales = [
		{titulo:"Hacer que funcione el Tudu",
	   descripcion: "Estamos aprendiendo React",
		 completada: false,
	  },
		{titulo:"Aprender rutas React",
		descripcion: "Estamos aprendiendo React",
		completada: false,
	  },
		{titulo:"Subir nuestros proyectos",
		descripcion: "Para tener una url",
		completada: false,
	  }
	];

	const[todasLasTareas,setTodasLasTareas] = useState(todasLasTareasIniciales);

	const eliminarTarea = (posicion) => {
		
		/**
		 * 1a.-Crea la copia
		 * 2a.-Usamos el metodo SPLICE para eliminar a partir de una posicion
		 * 3a.-Actualizamos el estado con el nuevo arreglo
		 */
	  const nuevoArreglo = [...todasLasTareas]     //1a.-
		nuevoArreglo.splice(posicion,1)  //2a.-
		setTodasLasTareas(nuevoArreglo) //3a.-
	}

	const envioDeTarea = (nuevaTarea) => {
			/*
			 *Como actualizar un arrego con nuevos datos??
			 *  1.- Crea la copia con el spreadOperator para arreglos [...abc]
			 *              NUNCA SE USA PUSH
			 *  2.-Agregar el nuevo objeto al arreglo copia
			 *  3.-Actualizar el estado con el nuevo arreglo
			 */
                                 //1.-         //2.-
 			 const nuevoArreglo = [...todasLasTareas,nuevaTarea]
			 setTodasLasTareas(nuevoArreglo); //3.-
	};

  return (
    <div className="App">
			<NavbarComponent todasLasTareas={todasLasTareas}/>
			<Container>
      <Row>
        <Col>
				 <Formulario envioDeTarea={envioDeTarea}/>
				</Col>

				<Col>
				 <ListaTareas todasLasTareas={todasLasTareas} eliminarTarea={eliminarTarea}/>
				</Col>
			</Row>
    </Container>
		</div>
  );
};

export default App;
