import type { ReactElement } from 'react'

interface Properties {
	handleRemoveTask: (id: string) => void
}

export default function DeleteModal(properties: Properties): ReactElement {
	const { handleRemoveTask } = properties

	return (
		<div className='modal' id='delete-modal'>
			<div className='modal-box'>
				<h3 className='text-lg font-bold'>Are you sure?</h3>
				<p className='py-4'>This task will be deleted permanently.</p>
				<div className='modal-action'>
					<a href='#' className='btn btn-ghost'>
						Cancel
					</a>
					<a href='#' className='btn btn-error' onClick={handleRemoveTask}>
						Delete
					</a>
				</div>
			</div>
		</div>
	)
}
