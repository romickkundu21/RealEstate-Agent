import { useOne, useList } from "@pankod/refine-core";
import { useParams } from "@pankod/refine-react-router-v6";

import { Profile } from "components";

const AgentProfile = () => {
  const { data, isLoading, isError } = useList({ resource: "users" });

  const myProfile = data?.data ?? [];

    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>error...</div>;

    return (
        <Profile
            type="Agent"
            name={myProfile[1].name}
            email={myProfile[1].email}
            avatar={myProfile[1].avatar}
            properties={myProfile[1].allProperties}
        />
    );
};

export default AgentProfile;