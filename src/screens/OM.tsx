import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { CardContainer } from '../components/ui/CardContainer';
import { OMCard } from '../components/ui/OMCard';
import { OMMock } from '../components/ui/OMCard/OMMock';
import { Header } from '../components/Header';
import { AddNewActivityButton } from '../components/AddNewActivityButton';
import { FooterModal } from '../components/FooterModal';
import { useNavigation } from '@react-navigation/core';

export function OM() {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView className="flex flex-col flex-1 bg-white">
      <Header isHomeScreen title={'Olá, Alan José'} />
      <CardContainer>
        {OMMock.map((item) => (
          <OMCard
            isFinishOrCancel={
              item.status === 'Cancelada' || item.status === 'Concluída' ? true : false
            }
            key={item.id}
            {...item}
          />
        ))}
      </CardContainer>
      <TouchableOpacity
        onPress={() => navigate('RegisteredActivities')}
        className="w-full h-10 bg-red-500 flex items-center justify-center"
      >
        <Text className="text-white font-poppinsBold text-xl">Atividades Lançadas</Text>
      </TouchableOpacity>
      <FooterModal />
      {/* <AddNewActivityButton /> */}
    </SafeAreaView>
  );
}