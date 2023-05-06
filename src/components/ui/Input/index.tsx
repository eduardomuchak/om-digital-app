import { Text, TextInput, View } from 'react-native';
import { InputProps } from './interface';

export function Input({ label, required, ...rest }: InputProps) {
  return (
    <>
      <View className="flex flex-row gap-1">
        {required ? (
          <Text className="font-poppinsBold text-sm leading-4 text-status-red">*</Text>
        ) : null}
        <Text className="font-poppinsBold text-sm leading-4 text-neutral-900">
          {label.toLocaleUpperCase()}
        </Text>
      </View>
      <TextInput
        className="bg-neutral-100 px-5 py-2 rounded-lg h-14 m-0 font-poppinsSemibold"
        placeholder="Digite"
        {...rest}
      />
    </>
  );
}
