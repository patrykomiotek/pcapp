"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { cn } from "../utils/cn";

// type Props = LinkProps;
type Props = ComponentProps<typeof Link>;

export const NavLink = ({ href, children, ...rest }: Props) => {
  const currentPath = usePathname();
  const isActive = currentPath === href;
  return (
    <Link
      href={href}
      {...rest}
      className={cn("hover:text-blue-400 hover:underline", {
        "text-red-500": isActive,
        "text-blue-500": !isActive,
      })}
    >
      {children}
    </Link>
  );
};
