import { useRoute } from "@react-navigation/native";
import React from "react";
import ArchievePage from "../Archieve/ArchievePage";
import { NavigationHeader } from "../navigation/NavigationHeader";
import { SafeAreaView } from "../navigation/SafeAreaView";

type ArchiveViewProps = {
  loggedId: string;
  archiveId: number;
  myRole: number;
  clubId: number;
};

const ArchiveView = () => {
  const route = useRoute<any>();
  const { loggedId, archiveId, myRole, clubId }: ArchiveViewProps =
    route.params;

  return (
    <SafeAreaView>
      <NavigationHeader Left={true} />
      <ArchievePage
        loggedId={loggedId}
        archiveId={archiveId}
        role={myRole}
        clubId={clubId}
      />
    </SafeAreaView>
  );
};

export default ArchiveView;
