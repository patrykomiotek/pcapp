import type { ComponentProps } from "react";
import { cn } from "../utils/cn";

// type Props = {
//   children: string;
// };

type Props = ComponentProps<"h1">;

export const Header = ({ children, className, ...rest }: Props) => {
  return (
    <h1 className={cn("text-2xl font-semibold", className)} {...rest}>
      {children}
    </h1>
  );
};
