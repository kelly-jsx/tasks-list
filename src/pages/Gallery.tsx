import Head from 'components/Head'
import Navigation from 'components/Navigation'
import TaskModal from 'components/TaskModal'
import type { ReactElement } from 'react'

export default function GalleryPage(): ReactElement {
	return (
		<>
			<Head title='Task App' />
			<Navigation>siema</Navigation>
			<TaskModal />
		</>
	)
}
