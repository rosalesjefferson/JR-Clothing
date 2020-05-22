import React from 'react'
import { Link } from 'react-router-dom'

import './Custom-link.style.scss'

const Customlink = ({ children, ...otherProps }) => (
	<Link className={`
		${ otherProps.lightbackground ? 'light-background' : null } 
		${ otherProps.redhover ? 'red-hover' : null } btn`} { ...otherProps }>
		{ children }
	</Link>
)

export default Customlink