interface Props extends React.ComponentPropsWithoutRef<"input"> {
  type: "checkbox";
}

export const Input = ({ type, ...restProps }: Props) => {
  return <input type={type} {...restProps} />;
};
