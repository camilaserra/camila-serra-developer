import React from 'react'

type Props = {
  children: React.ReactNode
  variant:
  | 'primaryOcean'
  color?: string
  disabled?: boolean
  onClick?: any
  type?: 'button' | 'submit' | 'reset'
  full?: boolean
}

export function Button({
  children,
  variant = 'primaryOcean',
  disabled = false,
  onClick,
  type = 'button',
  full = false,
}: Props) {
  const primaryOcean = 'bg-brand-blue-50 text-white rounded-full'

  return (
    <button
      className={`mt-3 flex items-center justify-center gap-2 font-medium px-4 py-2 transition-all hover:opacity-75 disabled:opacity-50
        ${variant === 'primaryOcean' && primaryOcean}
        ${full ? 'w-full' : 'w-fit'}
      `}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}
