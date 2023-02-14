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
	taskTitle: string
	taskDescription: string
	taskDate: string
	taskCompleted: boolean
	taskFavourite: boolean
	taskCategory: string
	handleRemoveTask: (id: string) => void
}

export default function TaskItem(properties: Properties): ReactElement {
	const {
		taskTitle,
		taskDescription,
		taskDate,
		taskCompleted,
		taskFavourite,
		taskCategory,
		handleRemoveTask
	} = properties

	const [isFavourite, setFavourite] = useState(taskFavourite)
	const [isCompleted, setCompleted] = useState(taskCompleted)

	const handleClickFavourite = () => {
		setFavourite(!isFavourite)
	}

	const handleClickCompleted = () => {
		setCompleted(!isCompleted)
	}

	const handleClickRemoveTask = id => {
		handleRemoveTask(id)
	}

	return (
		<div className='flex flex-col rounded-lg bg-base-100 p-4 shadow-xl'>
			<h2 className='card-title'>{taskTitle}</h2>
			<p>{taskDescription}</p>
			<div className='badge badge-accent mt-2'>{taskCategory}</div>
			<p>{taskDate}</p>

			<div className='mx-auto grid h-full grid-cols-4 content-end gap-4'>
				<div className='divider col-span-4 mb-0' />
				<button
					className='btn btn-ghost btn-square btn-sm'
					onClick={handleClickCompleted}
				>
					{isCompleted ? (
						<BsCheckCircleFill className='h-5 w-5' />
					) : (
						<BsCheckCircle className='h-5 w-5' />
					)}
				</button>
				<button
					className='btn btn-ghost btn-square btn-sm'
					onClick={handleClickFavourite}
				>
					{isFavourite ? (
						<BsStarFill className='h-5 w-5' />
					) : (
						<BsStar className='h-5 w-5' />
					)}
				</button>
				<button
					className='btn btn-ghost btn-square btn-sm'
					onClick={handleClickRemoveTask}
				>
					<BsTrashFill className='h-5 w-5' />
				</button>
				<button className='btn btn-ghost btn-square btn-sm'>
					<BsPencilFill className='h-5 w-5' />
				</button>
			</div>
		</div>
	)
}
