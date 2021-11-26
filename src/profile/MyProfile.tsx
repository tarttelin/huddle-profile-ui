import React from "react";
import {useMyProfileQuery} from "../generated/graphql";

const MyProfile: React.FC = () => {
    const [result] = useMyProfileQuery();
    const { data, fetching, error } = result;
    return (
        <section>
            <p>Last name: {data?.me?.consultant?.fullName?.lastName}</p>
        </section>
    )

};

export default MyProfile;