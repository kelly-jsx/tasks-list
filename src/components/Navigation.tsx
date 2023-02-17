import type { ReactElement } from 'react'
import ThemeSwitcher from './ThemeSwitcher'

interface Properties {
	showModal: (showModal: boolean) => void
}

export default function Navigation(properties: Properties): ReactElement {
	return (
		<div className='drawer-mobile drawer'>
			<input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content flex flex-col'>
				<div className='navbar w-full bg-base-300'>
					<div className='flex-none lg:hidden'>
						<label htmlFor='my-drawer-3' className='btn btn-ghost btn-square'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								className='inline-block h-6 w-6 stroke-current'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						</label>
					</div>
					<div className='mx-2 flex-1 px-2'>
						<input
							type='text'
							placeholder='Search...'
							className='input max-w-xs'
						/>
					</div>
					<div className='hidden flex-none lg:block'>
						<ul className='px-2'>
							<li>
								<a href='#task-modal' className='btn btn-primary'>
									Add Task
								</a>
							</li>
						</ul>
					</div>
				</div>
				{properties.children}
			</div>
			<div className='drawer-side'>
				<label htmlFor='my-drawer-3' className='drawer-overlay' />
				<div className='menu flex w-80 flex-col content-center gap-4 bg-base-100 p-4'>
					<h1 className='mt-4 text-center text-2xl font-bold'>Task List</h1>
					<ThemeSwitcher />
					<a href='#task-modal' className='btn btn-primary mx-auto w-3/4'>
						Add Task
					</a>
					<div className='mx-auto w-full'>
						<ul className='menu rounded-box bg-base-200'>
							<li className='bordered'>
								<a>All tasks</a>
							</li>
							<li>
								<a>Important</a>
							</li>
							<li>
								<a>Completed</a>
							</li>
							<li>
								<a>Uncompleted</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

// LoadingOrError.defaultProps = {
// 	error: undefined
// }
