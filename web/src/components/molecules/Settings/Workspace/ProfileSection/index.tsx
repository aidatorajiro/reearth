import React from "react";

import Field from "@reearth/components/molecules/Settings/Field";
import EditableItem from "@reearth/components/molecules/Settings/Project/EditableItem";
import Section from "@reearth/components/molecules/Settings/Section";
import { useT } from "@reearth/i18n";
import { styled } from "@reearth/theme";

export type Props = {
  currentWorkspace?: {
    id: string;
    name: string;
    // description: string;
    personal?: boolean;
  };
  updateWorkspaceName?: (name?: string) => void;
  updateProjectDescription?: (description: string) => void;
  owner?: boolean;
};

const ProfileSection: React.FC<Props> = ({
  currentWorkspace,
  updateWorkspaceName,
  //   updateProjectDescription,
  owner,
}) => {
  const t = useT();

  return (
    <Wrapper>
      <Section>
        {currentWorkspace?.personal || owner === false ? (
          <Field header={t("Workspace name")} body={currentWorkspace?.name} />
        ) : (
          <EditableItem
            title={t("Workspace name")}
            body={currentWorkspace?.name}
            onSubmit={updateWorkspaceName}
          />
          // {/* <EditableItem
          //   title={t("Description")}
          //   body={currentTeam?.description}
          //   multilineTextBox={true}
          //   onSubmit={updateTeamDescription}
          // /> */}
          // {/* <EditableItem
          //   title={t("Owner")}
          //   body={currentTeam?.owner}
          //   onSubmit={updateTeamName}
          // /> */}
        )}
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: ${props => props.theme.main.lighterBg};
`;

export default ProfileSection;
