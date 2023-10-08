import { IconButton } from 'shared/ui/icon-button'
import { IoCubeOutline } from 'react-icons/io5'

export function MainPage() {
	return (
		<div className='flex flex-col gap-4 p-16'>
			<div className='flex gap-4'>
				<IconButton size='small'>
					<IoCubeOutline/>
				</IconButton>
				<IconButton
					disabled
					size='small'
				>
					<IoCubeOutline/>
				</IconButton>
			</div>
			<div className='flex gap-4'>
				<IconButton size='medium'>
					<IoCubeOutline/>
				</IconButton>
				<IconButton
					disabled
					size='medium'
				>
					<IoCubeOutline/>
				</IconButton>
			</div>
			<div className='flex gap-4'>
				<IconButton size='large'>
					<IoCubeOutline/>
				</IconButton>
				<IconButton
					disabled
					size='large'
				>
					<IoCubeOutline/>
				</IconButton>
			</div>
		</div>
	)
}
