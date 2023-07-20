import { useNavigation } from "@react-navigation/native";
import { CheckCircle } from "phosphor-react-native";
import React, { useContext } from "react";
import { Dimensions, ListRenderItemInfo, Text, View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { CustomButton } from "../../../../components/ui/CustomButton";
import { ActivityCard } from "../ActivityCard";
import { FinishActivityModal } from "../FinishActivityModal";
import { PauseActivityModal } from "../PauseActivityModal";
import { StartActivityModal } from "../StartActivityModal";

import { StatusLegend } from "../../../../components/StatusLegend";
import { OMContext } from "../../../../contexts/om-context";
import { OM } from "../../../../interfaces/om-context.interface";
import { Stage } from "../../../../services/POST/Stages/stages.interface";
import { formatMaintenanceOrderStatus } from "../../../../utils/formatMaintenanceOrderStatus";

interface SwipeableActivityCardListProps {
  activities: Stage.StagesList[];
  omId: number;
}

export const SwipeableActivityCardList = ({
  activities,
  omId,
}: SwipeableActivityCardListProps) => {
  const { navigate } = useNavigation();

  const { statusLegendInfo } = useContext(OMContext);

  const screenWidth = Dimensions.get("window").width;
  const halfScreenWidth = Number((screenWidth / 2).toFixed(0));

  const HandleStatus = ({ stage }: Stage.StagesListProps) => {
    switch (formatMaintenanceOrderStatus(stage.status)) {
      case "Finalizada":
        return (
          <View className="items-center justify-center">
            <CheckCircle size={56} color="#3a9b15" weight="bold" />
            <Text className="mt-2 font-poppinsMedium text-sm">
              Etapa Finalizada!
            </Text>
          </View>
        );
      case "Em andamento":
        return (
          <View className="flex flex-row">
            <PauseActivityModal omId={omId} activityId={stage.id} />
            <View className="w-4" />
            <FinishActivityModal
              isSwipeableTrigger
              omId={omId}
              activityId={stage.id}
            />
          </View>
        );
      default:
        return <StartActivityModal omId={omId} activityId={stage.id} />;
    }
  };

  const listHeaderComponent = () => (
    <>
      <Text className="font-poppinsBold text-lg">Etapas:</Text>
      <StatusLegend status={statusLegendInfo} />
    </>
  );

  const listFooterComponent = () => (
    <>
      <View className="mb-3 mt-5 space-y-2">
        <CustomButton
          variant="primary"
          onPress={() => navigate("RegisterNewActivity", { id: omId })}
        >
          Adicionar Etapa
        </CustomButton>
        <CustomButton
          variant="primary"
          onPress={() => navigate("RegisterNewSymptom", { id: omId })}
        >
          Adicionar Sintoma
        </CustomButton>
      </View>
      {activities.every(
        (activity) =>
          formatMaintenanceOrderStatus(activity.status) === "Finalizada"
      ) ? (
        <View className="mb-10">
          <CustomButton
            variant="finish"
            onPress={() => navigate("CloseMaintenanceOrder", { id: omId })}
          >
            Finalizar OM
          </CustomButton>
        </View>
      ) : null}
    </>
  );

  const renderItem = ({
    item,
  }: ListRenderItemInfo<Stage.StagesListProps["stage"]>): JSX.Element => {
    return <ActivityCard stage={item} />;
  };

  const renderHiddenItem = ({
    item,
  }: ListRenderItemInfo<Stage.StagesListProps["stage"]>): JSX.Element => (
    <View
      className={`flex-1 items-center justify-center`}
      style={{
        width: halfScreenWidth,
      }}
    >
      {HandleStatus({ stage: item })}
    </View>
  );

  return (
    <SwipeListView
      style={{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 12,
        marginBottom: 24,
      }}
      data={activities}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      leftOpenValue={halfScreenWidth}
      rightOpenValue={-halfScreenWidth}
      disableLeftSwipe={true}
      disableRightSwipe={false}
      swipeToOpenPercent={30}
      swipeToClosePercent={30}
      ListHeaderComponent={listHeaderComponent}
      ListFooterComponent={listFooterComponent}
      ItemSeparatorComponent={() => <View className="h-3" />}
      showsVerticalScrollIndicator={false}
    />
  );
};
