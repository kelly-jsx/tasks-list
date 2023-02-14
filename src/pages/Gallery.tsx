import Head from 'components/Head'
import Navigation from 'components/Navigation'
import TaskItem from 'components/TaskItem'
import TaskModal from 'components/TaskModal'
import TasksGrid from 'components/TasksGrid'
import type { ReactElement } from 'react'

export default function GalleryPage(): ReactElement {
	return (
		<>
			<Head title='Task App' />
			<Navigation>
				<TasksGrid>
					<TaskItem
						taskTitle='test'
						taskDescription='description'
						taskCategory='test category'
						taskFavourite
					/>
					<TaskItem />
					<TaskItem />
					<TaskItem />
					<TaskItem />
					<TaskItem />
				</TasksGrid>
			</Navigation>
			<TaskModal />
		</>
	)
}
