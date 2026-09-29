import type { ComponentProps } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'principal'

export type ButtonProps = ComponentProps<'button'> & {
  variant?: ButtonVariant
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      data-variant={variant}
      className={`
      inline-flex items-center justify-center font-medium rounded-4xl transition-all px-4 py-2 focus-visible:outline-2 disabled:opacity-50 disabled:pointer-events-none gap-2  drop-shadow-2xl shadow-brand-primary

      /* Button Primary */
      data-[variant=primary]:bg-brand-primary
      data-[variant=primary]:text-brand-secondary
      data-[variant=primary]:hover:bg-brand-primary-hover
      data-[variant=primary]:active:bg-brand-primary

      /* Button Secondary */
      data-[variant=secondary]:bg-brand-secondary
      data-[variant=secondary]:text-brand-primary
      data-[variant=secondary]:hover:bg-brand-secondary-hover-hover
      data-[variant=secondary]:active:bg-brand-secondary

      /* GetInToutch*/
      data-[variant=principal]:bg-brand-secondary
      data-[variant=principal]:text-brand-primary
      data-[variant=principal]:hover:bg-brand-secondary-hover
      data-[variant=principal]:px-8
      data-[variant=principal]:py-3.5
      data-[variant=principal]:font-bold
      data-[variant=principal]:w-full

      &{className}

      `}
      {...props}
    >
      {children}
    </button>
  )
}
