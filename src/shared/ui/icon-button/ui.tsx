import type { ComponentProps, ReactElement } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

const button = cva(
	[
		'relative flex items-center justify-center overflow-hidden rounded-full text-on-surface-dim outline-none',
		'before:absolute before:z-10 before:h-full before:w-full',
		'after:absolute after:z-20 after:h-full after:w-full',
		'hover:before:bg-on-surface-dim/hovered focus-visible:before:bg-on-surface-dim/focused',
		'active:after:bg-on-surface-dim/pressed',
		'[&>svg]:z-30',
	],
	{
		variants: {
			size: {
				small: 'h-8 w-8 [&>svg]:h-4 [&>svg]:w-4',
				medium: 'h-10 w-10 [&>svg]:h-5 [&>svg]:w-5',
				large: 'h-12 w-12 [&>svg]:h-6 [&>svg]:w-6',
			},
			disabled: {
				false: '',
				true: 'pointer-events-none text-on-surface-dim/disabled-content',
			},
		},
		defaultVariants: {
			size: 'medium',
			disabled: false,
		},
	},
)

export interface IconButtonProps
	extends Omit<ComponentProps<'button'>, 'children'>,
	Omit<VariantProps<typeof button>, 'disabled'> {
	children: ReactElement
}

export function IconButton({
	size, children, type, disabled, ...props
}: IconButtonProps) {
	return (
		<button
			className={ button({ disabled, size }) }
			type={ type ?? 'button' }
			{ ...props }
		>
			{ children }
		</button>
	)
}
