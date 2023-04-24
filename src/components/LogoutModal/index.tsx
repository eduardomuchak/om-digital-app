import { Text, View } from 'react-native';
import { CustomModal } from '../ui/Modal';
import { SignOut } from 'phosphor-react-native';
import { CustomButton } from '../ui/CustomButton';
import { useState } from 'react';

export function LogoutModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      {/* Modal Trigger */}
      <CustomButton variant="ghost" onPress={() => setIsModalVisible(true)} activeOpacity={0.7}>
        <SignOut size={24} color="#FFFFFF" weight="bold" />
      </CustomButton>

      {/* Modal */}
      <CustomModal isOpen={isModalVisible} onClose={setIsModalVisible}>
        <Text className="font-poppinsRegular text-md">Você deseja sair da sua conta?</Text>
        <View className="flex flex-row justify-between mt-16">
          <View className="w-[48%]">
            <CustomButton variant="ghost" onPress={() => setIsModalVisible(false)}>
              Cancelar
            </CustomButton>
          </View>
          <View className="w-[48%]">
            <CustomButton variant="cancel" onPress={() => {}}>
              Confirmar
            </CustomButton>
          </View>
        </View>
      </CustomModal>
    </>
  );
}