import type { ReactElement } from 'react'
import { useState } from 'react'
import {
	BsCheckCircle,
	BsCheckCircleFill,
	BsPencilFill,
	BsStar,
	BsStarFill,
	BsTrashFill
} from 'react-icons/bs'

interface Properties {
	taskId: string
	taskTitle: string
	taskDescription: string
	taskDate: string
	taskCompleted: boolean
	taskFavourite: boolean
	taskCategory: string
	taskImportant: boolean
	handleFavouriteTask: (id: string) => void
	handleCompleteTask: (id: string) => void
	handleRemoveTask: (id: string) => void
}

export default function TaskItem(properties: Properties): ReactElement {
	const {
		taskId,
		taskTitle,
		taskDescription,
		taskDate,
		taskCompleted,
		taskFavourite,
		taskCategory,
		taskImportant,
		handleFavouriteTask,
		handleCompleteTask,
		handleRemoveTask
	} = properties

	const [isFavourite, setFavourite] = useState(taskFavourite)
	const [isCompleted, setCompleted] = useState(taskCompleted)

	const handleClickFavouriteTask = id => {
		const newFavouriteValue = !isFavourite
		setFavourite(newFavouriteValue)
		if (newFavouriteValue !== taskFavourite) {
			handleFavouriteTask(id, newFavouriteValue)
		}
	}

	const handleClickCompleteTask = id => {
		const newCompletedValue = !isCompleted
		setCompleted(newCompletedValue)
		if (newCompletedValue !== taskCompleted) {
			handleCompleteTask(id, newCompletedValue)
		}
	}

	const handleClickRemoveTask = id => {
		handleRemoveTask(id)
	}

	return (
		<div className='flex flex-col rounded-lg bg-base-200 p-4 shadow-xl'>
			<h2
				className={`break-words text-lg font-bold ${
					taskCompleted ? 'line-through' : null
				}`}
			>
				{taskTitle}
			</h2>
			<p
				className={`${taskCompleted ? 'line-through' : null} mb-4 break-words`}
			>
				{taskDescription}
			</p>

			<div className='mx-auto mt-4 grid h-full w-full grid-cols-2 content-end'>
				{taskImportant ? (
					<div className='badge badge-error col-span-2'>important</div>
				) : null}
				<div className='badge badge-accent col-span-2'>{taskCategory}</div>
				<p
					className={`${
						taskCompleted ? 'line-through' : null
					} col-span-2 -mb-4`}
				>
					{taskDate}
				</p>
				<div className='divider col-span-2 -mb-0' />
				<div className='col-span-2 flex justify-between'>
					<button
						className='btn btn-ghost btn-square btn-sm'
						onClick={handleClickCompleteTask}
					>
						{isCompleted ? (
							<BsCheckCircleFill className='h-5 w-5' />
						) : (
							<BsCheckCircle className='h-5 w-5' />
						)}
					</button>
					<button
						className='btn btn-ghost btn-square btn-sm'
						onClick={handleClickFavouriteTask}
					>
						{isFavourite ? (
							<BsStarFill className='h-5 w-5' />
						) : (
							<BsStar className='h-5 w-5' />
						)}
					</button>
					<a
						href='#delete-modal'
						className='btn btn-ghost btn-square btn-sm'
						onClick={handleClickRemoveTask}
					>
						<BsTrashFill className='h-5 w-5' />
					</a>
					<button className='btn btn-ghost btn-square btn-sm'>
						<BsPencilFill className='h-5 w-5' />
					</button>
				</div>
			</div>
		</div>
	)
}
