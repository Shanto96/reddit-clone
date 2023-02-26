import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";
import Community from "./../Components/Navbar/Directory/Community";

export interface Community {
  id: string;
  creatorId: string;
  numberOfMembers: number;
  privacyType: "public" | "restricted" | "private";
  createdAt?: Timestamp;
  imageURL: string;
}

interface CommunitySnippet {
  CommunityId: string;
  isModerator?: boolean;
  imageURL?: string;
}

interface CommunityState {
  mySnippets: CommunitySnippet[];
}

const defaultCommunityState: CommunityState = {
  mySnippets: [],
};

export const communityState = atom<CommunityState>({
  key: "communitiesState",
  default: defaultCommunityState,
});
