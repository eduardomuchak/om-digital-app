import { Pause } from 'phosphor-react-native';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { CustomButton } from '../../../../components/ui/CustomButton';
import { CustomModal } from '../../../../components/ui/Modal';

export function PauseActivityModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      {/* Modal Trigger */}
      <View className="gap-1 items-center">
        <TouchableOpacity
          className="bg-status-red rounded-lg w-11 h-11 flex items-center justify-center"
          onPress={() => setIsModalVisible(true)}
          activeOpacity={0.7}
        >
          <Pause size={30} color="#FFFFFF" weight="bold" />
        </TouchableOpacity>
        <Text className="font-poppinsMedium text-sm">Pausar</Text>
      </View>

      {/* Modal */}
      <CustomModal isOpen={isModalVisible} onClose={setIsModalVisible}>
        <Text className="font-poppinsRegular text-base">Você deseja pausar a atividade?</Text>
        <View className="flex flex-row justify-between mt-16">
          <View className="w-[48%]">
            <CustomButton variant="cancel" onPress={() => setIsModalVisible(false)}>
              Cancelar
            </CustomButton>
          </View>
          <View className="w-[48%]">
            <CustomButton variant="primary" onPress={() => {}}>
              Confirmar
            </CustomButton>
          </View>
        </View>
      </CustomModal>
    </>
  );
}