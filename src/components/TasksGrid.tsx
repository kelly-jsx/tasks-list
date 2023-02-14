import type { ReactElement } from 'react'

export default function TasksGrid(properties): ReactElement {
	return (
		<div className='grid grid-cols-2 gap-4 p-4 lg:grid-cols-4 2xl:grid-cols-5'>
			{properties.children}
		</div>
	)
}
