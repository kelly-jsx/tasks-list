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
							taskCategory={task.category}
							taskCompleted={task.completed}
						/>
					))}
				</TasksGrid>
			</Navigation>
			<TaskModal handleAddTask={handleAddTask} />
		</>
	)
}
