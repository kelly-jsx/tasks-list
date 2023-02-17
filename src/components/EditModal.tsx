import type { ReactElement } from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface Properties {
	handleEditTask: () => void
	selectedTask: any
	taskTitle: string
	taskDescription: string
	taskCompleted: boolean
	taskCategory: string
	taskImportant: boolean
}

export default function EditModal(properties: Properties): ReactElement {
	const { handleEditTask, taskTitle, selectedTask } = properties

	const [task, setTask] = useState({
		title: selectedTask.title,
		description: '',
		category: '',
		important: false,
		completed: false
	})

	const date = new Date()
	const year = date.getFullYear()
	const month = (date.getMonth() + 1).toString().padStart(2, '0')
	const day = date.getDate().toString().padStart(2, '0')
	const hours = date.getHours().toString().padStart(2, '0')
	const minutes = date.getMinutes().toString().padStart(2, '0')
	const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`

	const handleClick = () => {
		const newTask = {
			id: uuidv4(),
			title: task.title,
			description: task.description,
			category: task.category || 'main',
			date: formattedDate,
			important: task.important,
			completed: task.completed
		}

		handleEditTask(newTask)
		setTask({
			id: '',
			title: '',
			description: '',
			category: '',
			date: '',
			important: false,
			completed: false
		})
	}

	const handleInputChange = e => {
		const { name, value } = e.target
		setTask(previousProperties => ({
			...previousProperties,
			[name]: value
		}))
	}

	return (
		<div className='modal' id='edit-modal'>
			<div className='modal-box'>
				<h3 className='text-lg font-bold'>Edit task</h3>
				<div className='mt-5 flex w-full flex-col items-center justify-center'>
					<input
						type='text'
						placeholder='Task title'
						className='input input-bordered w-full max-w-sm'
						name='title'
						value={selectedTask.title}
						onChange={handleInputChange}
					/>
					<textarea
						className='textarea textarea-bordered mt-2 w-full max-w-sm'
						placeholder='Description (optional)'
						name='description'
						value={task.description}
						onChange={handleInputChange}
					/>
					<div className='w-full max-w-sm'>
						<label className='label'>
							<span className='label-text'>Category</span>
						</label>
						<select
							className='select select-bordered w-full max-w-sm'
							name='category'
							value={task.category}
							onChange={handleInputChange}
						>
							<option value='main'>Main</option>
							{/* <option value='secondary'>Secondary</option> */}
						</select>
					</div>
					<label className='label mt-1 w-full max-w-sm cursor-pointer place-content-start gap-2'>
						<input
							type='checkbox'
							className='checkbox checkbox-primary m-0'
							name='important'
							value={task.important}
							onChange={() =>
								setTask(previousProperties => ({
									...previousProperties,
									important: !previousProperties.important
								}))
							}
						/>
						<span className='label-text'>Mark as important</span>
					</label>
					<label className='label w-full max-w-sm cursor-pointer place-content-start gap-2'>
						<input
							type='checkbox'
							className='checkbox checkbox-primary m-0'
							onChange={() =>
								setTask(previousProperties => ({
									...previousProperties,
									completed: !previousProperties.completed
								}))
							}
						/>
						<span className='label-text'>Mark as completed</span>
					</label>
				</div>
				<div className='modal-action'>
					<a href='#' className='btn btn-ghost'>
						Cancel
					</a>
					<a href='#' className='btn btn-primary' onClick={handleClick}>
						Edit Task
					</a>
				</div>
			</div>
		</div>
	)
}
