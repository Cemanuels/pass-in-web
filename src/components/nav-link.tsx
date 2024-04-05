import { ComponentProps } from "react"

interface NavLinkProps extends ComponentProps<'a'> {
  href: string
}


export function NavLink(props: NavLinkProps) {
  return (
    <a {...props} href={props.href} className="font-medium text-sm text-zinc-400">{props.children}</a>
  )
}