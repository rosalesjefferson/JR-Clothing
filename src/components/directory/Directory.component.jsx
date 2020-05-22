import React from 'react'
import { connect } from 'react-redux'

import { selectDirectorySections } from '../../redux/directory/directory.selector'

import MenuItem from '../menu-item/Menu-item.component'

import './Directory.style.scss'

const Directory = ({ sections }) => (
	<div className='directory__container'>
		{
			sections.map(({ id, ...otherProps }) => (
				<MenuItem 
				key={ id } 
				{ ...otherProps }
				/>
			))
		}
	</div>
)

const mapStateToProps = (state) =>(
	{
		sections: selectDirectorySections(state)
	}
)

export default connect(mapStateToProps)(Directory)
