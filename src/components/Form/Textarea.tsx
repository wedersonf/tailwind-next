import { ComponentProps } from 'react'

export type TextareaProps = ComponentProps<'textarea'>

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      className="shadow-s min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
      {...props}
    />
  )
}
