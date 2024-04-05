import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconButtonProps extends ComponentProps<'button'> {
  transparent?: boolean
}

// remove a propriedade transparent das props e deixa o restante
export function IconButton({ transparent, ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        'border border-white/10 rounded-md p-1.5 hover:bg-white/30',
        transparent ? 'bg-black/20' : 'bg-white/5',
        props.disabled ? 'opacity-50' : null
      )}
    />
  )
}
