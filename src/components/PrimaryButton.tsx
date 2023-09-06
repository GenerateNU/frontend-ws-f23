import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary";
}

export default function PrimaryButton(props: Props) {
  const { variant, children, ...rest } = props;

  return <button className={variant === "primary" ? "bg-black text-white p-2 hover:bg-gray-500" : "text-black p-2"} {...rest}>{children}</button>;
}
