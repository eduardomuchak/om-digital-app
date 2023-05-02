import { Text, View, TouchableOpacity } from 'react-native';
import { Funnel } from 'phosphor-react-native';

interface StatusFilterProps {
  openFilterModal: () => void;
  filterTitle: string;
}

export function StatusFilter({ openFilterModal, filterTitle }: StatusFilterProps) {
  return (
    <TouchableOpacity
      className="flex-row items-center justify-center mt-4 mb-5 relative"
      onPress={openFilterModal}
    >
      <Text className="font-poppinsBold text-lg text-center text-neutral">{filterTitle}</Text>
      <View className="absolute right-8 top-0">
        <Funnel size={26} color="#1D2F99" weight="fill" />
      </View>
    </TouchableOpacity>
  );
}