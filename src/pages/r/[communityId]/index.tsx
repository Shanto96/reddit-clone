import { firestore } from "@/firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import { Community } from "../../../atoms/CommunityAtom";
import React from "react";
import safeJsonStringify from "safe-json-stringify";
import NotFound from "./NotFound";

type CommunityPageProps = {
  communityData: Community;
};

const CommunityPage: React.FC<CommunityPageProps> = ({ communityData }) => {
  console.log("community", communityData);

  if (!communityData) {
    return <NotFound />;
  }
  return <div>Wellcome to community {communityData?.id}</div>;
};
export default CommunityPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const communityDocRef = doc(
      firestore,
      "communities",
      context.query.communityId as string
    );

    const communityDoc = await getDoc(communityDocRef);

    return {
      props: {
        communityData: communityDoc.exists()
          ? JSON.parse(
              safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() })
            )
          : "",
      },
    };
  } catch (error) {
    console.log("getServer side props error", error);
  }
}
