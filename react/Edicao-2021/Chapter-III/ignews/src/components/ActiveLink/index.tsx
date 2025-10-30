import { type ReactElement } from "react";
import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProps extends LinkProps{
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({ children, activeClassName, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter();

  const className  = asPath == rest.href ? activeClassName : '';

  return <Link className={className} {...rest}>{children}</Link>;
}
