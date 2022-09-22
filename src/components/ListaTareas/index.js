import React from 'react'
import Tarea from '../Tarea'

const ListaTareas = (props) => {
	const{todasLasTareas} = props;
	return (
		<div>ListaTareas
     {
			todasLasTareas.map((info,posicion)=>{
				return <Tarea 
				key={posicion}
        {...info} //Spread operatos
				indice={posicion}
				eliminarTarea={props.eliminarTarea}
				/>
			})
		 }
		</div>
	);
};

export default ListaTareas