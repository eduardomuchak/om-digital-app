import { TouchableOpacityProps, TouchableOpacity, Text } from "react-native";
import clsx from "clsx";

interface Props extends TouchableOpacityProps {
  children: string | JSX.Element;
  variant: "primary" | "outline" | "ghost" | "cancel" | "finish";
}

export function CustomButton({ variant, children, ...rest }: Props) {
  return (
    <TouchableOpacity
      className={clsx("flex h-14 items-center justify-center rounded-lg", {
        ["bg-primary-500"]: variant === "primary",
        ["border-2 border-primary-500"]: variant === "outline",
        ["bg-transparent"]: variant === "ghost",
        ["bg-status-red"]: variant === "cancel",
        ["bg-status-green"]: variant === "finish",
      })}
      {...rest}
      activeOpacity={0.7}
    >
      <Text
        className={clsx(
          "px-4 text-center font-poppinsBold text-base leading-5",
          {
            ["text-white "]:
              variant === "primary" ||
              variant === "cancel" ||
              variant === "finish",
            ["text-primary-500"]: variant === "outline" || variant === "ghost",
          }
        )}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}
