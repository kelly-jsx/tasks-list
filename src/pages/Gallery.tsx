import Head from 'components/Head'
import Navigation from 'components/Navigation'
import TaskItem from 'components/TaskItem'
import TaskModal from 'components/TaskModal'
import TasksGrid from 'components/TasksGrid'
import type { ReactElement } from 'react'
import { useState } from 'react'

export default function GalleryPage(): ReactElement {
	const [existingTasks, setExistingTasks] = useState(
		JSON.parse(localStorage.getItem('tasks')) || []
	)

	const handleAddTask = newTask => {
		setExistingTasks(previousTasks => [...previousTasks, newTask])
		localStorage.setItem('tasks', JSON.stringify([...existingTasks, newTask]))
	}

	const handleRemoveTask = id => {
		const updatedTasks = existingTasks.filter(task => task.id !== id)
		setExistingTasks(updatedTasks)
		localStorage.setItem('tasks', JSON.stringify(updatedTasks))
	}

	const handleFavouriteTask = id => {
		const updatedTasks = existingTasks.map(task => {
			if (task.id === id) {
				task.isFavourite = !task.isFavourite
			}
			return task
		})
		setExistingTasks(updatedTasks)
		localStorage.setItem('tasks', JSON.stringify(updatedTasks))
	}

	const handleCompleteTask = id => {
		const updatedTasks = existingTasks.map(task => {
			if (task.id === id) {
				task.completed = !task.completed
			}
			return task
		})
		setExistingTasks(updatedTasks)
		localStorage.setItem('tasks', JSON.stringify(updatedTasks))
	}

	return (
		<>
			<Head title='Task App' />
			<Navigation>
				<TasksGrid>
					{existingTasks.map(task => (
						<TaskItem
							key={task.id}
							taskTitle={task.taskName}
							taskDescription={task.description}
							taskDate={task.date}
							taskCategory={task.category}
							taskCompleted={task.completed}
							taskFavourite={task.isFavourite}
							handleRemoveTask={() => handleRemoveTask(task.id)}
							handleFavouriteTask={() => handleFavouriteTask(task.id)}
							handleCompleteTask={() => handleCompleteTask(task.id)}
						/>
					))}
				</TasksGrid>
			</Navigation>
			<TaskModal handleAddTask={handleAddTask} />
		</>
	)
}
