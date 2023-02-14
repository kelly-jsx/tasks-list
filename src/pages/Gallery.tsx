import Head from 'components/Head'
import Navigation from 'components/Navigation'
import TaskModal from 'components/TaskModal'
import TasksGrid from 'components/TasksGrid'
import type { ReactElement } from 'react'

export default function GalleryPage(): ReactElement {
	return (
		<>
			<Head title='Task App' />
			<Navigation>
				<TasksGrid>
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
					<div>6</div>
				</TasksGrid>
			</Navigation>
			<TaskModal />
		</>
	)
}
