import DeleteModal from 'components/DeleteModal'
import EditModal from 'components/EditModal'
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

	const [selectedTask, setSelectedTask] = useState('')

	const handleAddTask = newTask => {
		setExistingTasks(previousTasks => [...previousTasks, newTask])
		localStorage.setItem('tasks', JSON.stringify([...existingTasks, newTask]))
	}

	const handleRemoveTask = id => {
		const updatedTasks = existingTasks.filter(task => task.id !== id)
		setExistingTasks(updatedTasks)
		localStorage.setItem('tasks', JSON.stringify(updatedTasks))
		setSelectedTask('')
	}

	const handleSelectTask = id => {
		existingTasks.map(task => {
			if (task.id === id) {
				setSelectedTask(task)
			}
			return task
		})
	}

	const handleUnselectTask = () => {
		setSelectedTask('')
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

	const handleEditTask = id => {
		const updatedTasks = existingTasks.map(task => {
			if (task.id === id) {
				setSelectedTask(task)
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
							taskId={task.id}
							taskTitle={task.title}
							taskDescription={task.description}
							taskDate={task.date}
							taskCategory={task.category}
							taskCompleted={task.completed}
							taskFavourite={task.isFavourite}
							taskImportant={task.important}
							handleSelectTask={() => handleSelectTask(task.id)}
							handleFavouriteTask={() => handleFavouriteTask(task.id)}
							handleCompleteTask={() => handleCompleteTask(task.id)}
						/>
					))}
				</TasksGrid>
			</Navigation>
			<TaskModal handleAddTask={handleAddTask} />
			<DeleteModal
				handleUnselectTask={handleUnselectTask}
				handleRemoveTask={() => handleRemoveTask(selectedTask.id)}
			/>
			<EditModal
				selectedTask={selectedTask}
				taskTitle={selectedTask.title}
				handleUnselectTask={handleUnselectTask}
			/>
		</>
	)
}
