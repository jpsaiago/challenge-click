import { useContext } from "react";
import { ProfileInfo } from "../../components/ProfileInfo";
import { UserContext } from "../../contexts/userContext";
import { ProfileView, RepoContainer } from "./styles";

export function Profile() {
  const { profile } = useContext(UserContext);

  if (!profile) {
    return <></>;
  }

  return (
    <ProfileView>
      <ProfileInfo profile={profile} />
      <RepoContainer />
    </ProfileView>
  );
}
