import type { ComponentProps } from "react";

// type Props = {
//   children: string;
// };

type Props = ComponentProps<"h1">;

export const Header = ({ children, ...rest }: Props) => {
  return (
    <h1 className="text-2xl font-semibold" {...rest}>
      {children}
    </h1>
  );
};
