import type { ReactElement } from 'react'
import { useState } from 'react'

export default function TaskModal(): ReactElement {
	const [task, setTask] = useState({
		taskName: '',
		description: '',
		category: ''
	})

	const handleInputChange = e => {
		const { name, value } = e.target
		setTask(previousProperties => ({
			...previousProperties,
			[name]: value
		}))
	}

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault()
		console.log('test')
	}

	return (
		<div className='modal' id='my-modal-2'>
			<div className='modal-box'>
				<h3 className='text-lg font-bold'>Add new task</h3>
				<div className='mt-5 flex w-full flex-col items-center justify-center'>
					<input
						type='text'
						placeholder='Task title'
						className='input input-bordered w-full max-w-sm'
					/>
					<textarea
						className='textarea textarea-bordered mt-2 w-full max-w-sm'
						placeholder='Description (optional)'
					/>
					<div className='w-full max-w-sm'>
						<label className='label'>
							<span className='label-text'>Category</span>
						</label>
						<select className='select select-bordered w-full max-w-sm'>
							<option>Main</option>
						</select>
					</div>
					<label className='label mt-1 w-full max-w-sm cursor-pointer place-content-start gap-2'>
						<input type='checkbox' className='checkbox checkbox-primary m-0' />
						<span className='label-text'>Mark as important</span>
					</label>
					<label className='label w-full max-w-sm cursor-pointer place-content-start gap-2'>
						<input type='checkbox' className='checkbox checkbox-primary m-0' />
						<span className='label-text'>Mark as completed</span>
					</label>
				</div>
				<div className='modal-action'>
					<a href='#' className='btn btn-ghost'>
						Cancel
					</a>
					<a href='#' className='btn btn-primary'>
						Add Task
					</a>
				</div>
			</div>
		</div>

		// <>
		// 	<input type='checkbox' id='task-modal' className='modal-toggle' />
		// 	<div className='modal'>
		// 		<div className='modal-box'>
		// 			<form action='#' onSubmit={handleSubmit}>
		// 				<h3 className='text-lg font-bold'>Add new task</h3>
		// 				<div className='flex flex-col'>
		// 					<input type='text' />
		// 				</div>

		// 				<div className='modal-action mt-4'>
		// 					<label htmlFor='task-modal' className='btn btn-ghost'>
		// 						Cancel
		// 					</label>
		// 					<button
		// 						type='submit'
		// 						className='btn btn-primary'
		// 						htmlFor='task-modal'
		// 					>
		// 						Add
		// 					</button>
		// 					<label
		// 						htmlFor='task-modal'
		// 						className='btn btn-primary'
		// 						type='submit'
		// 					>
		// 						Add Task
		// 					</label>
		// 				</div>
		// 			</form>
		// 		</div>
		// 	</div>
		// </>
	)
}
