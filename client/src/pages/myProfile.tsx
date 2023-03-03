import { useGetIdentity, useOne, useList } from "@pankod/refine-core";

import { Profile } from "components";

const MyProfile = () => {
  const { data, isLoading, isError } = useList({ resource: "users" });

  const myProfile = data?.data ?? [];

    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>error...</div>;

    return (
        <Profile
            type="My"
            name={myProfile[0].name}
            email={myProfile[0].email}
            avatar={myProfile[0].avatar}
            properties={myProfile[0].allProperties}
        />
    );
};

export default MyProfile;