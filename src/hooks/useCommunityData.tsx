import {
  Community,
  communityState,
  CommunitySnippet,
} from "@/atoms/CommunityAtom";
import { authModalState } from "@/atoms/AuthModalAtom";
import {
  collection,
  doc,
  getDocs,
  increment,
  writeBatch,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { auth, firestore } from "@/firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";

const useCommunityData = () => {
  const [communityStateValue, setCommunityStateValue] =
    useRecoilState(communityState);
  const setAuthModelState = useSetRecoilState(authModalState);
  const user = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const onJoinOrLeaveCommunity = (
    communityData: Community,
    isJoined: boolean
  ) => {
    if (!user[0]) {
      setAuthModelState({ open: true, view: "login" });
      return;
    }

    if (isJoined) {
      leaveCommunity(communityData.id);
      return;
    }
    joinCommunity(communityData);
  };

  //getting community Snippets
  //user && console.log("user id from community", user[0].uid, user);
  const getSnippets = async () => {
    setLoading(true);
    try {
      const snippetDocs = await getDocs(
        collection(firestore, `users/${user[0].uid}/communitySnippets`)
      );
      const snippets = snippetDocs.docs.map((doc) => ({ ...doc.data() }));
      console.log("here is snippets", snippets);
      setCommunityStateValue((prev) => ({
        ...prev,
        mySnippets: snippets as CommunitySnippet[],
      }));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if (!user) return;
  //   getSnippets();
  // }, []);

  useEffect(() => {
    if (!user[0] || !!communityStateValue.mySnippets.length) return;
    else getSnippets();
  }, [user[0]]);

  const leaveCommunity = (communityId: string) => {
    setLoading(true);
    try {
      const batch = writeBatch(firestore);

      batch.delete(
        doc(firestore, `users/${user[0].uid}/communitySnippets`, communityId)
      );

      batch.update(doc(firestore, "communities", communityId), {
        numberOfMembers: increment(-1),
      });
      batch.commit();
      setCommunityStateValue((prev) => ({
        ...prev,
        mySnippets: prev.mySnippets.filter(
          (item) => item.CommunityId != communityId
        ),
      }));
    } catch (error: any) {
      console.log("community created error", error);
      setError(error?.message);
    }
    setLoading(false);
  };

  const joinCommunity = (communityData: Community) => {
    setLoading(true);
    try {
      const batch = writeBatch(firestore);
      const newSnippet: CommunitySnippet = {
        CommunityId: communityData.id,
        imageURL: communityData.imageURL || "",
      };

      batch.set(
        doc(
          firestore,
          `users/${user[0].uid}/communitySnippets`,
          communityData.id
        ),
        newSnippet
      );

      batch.update(doc(firestore, "communities", communityData.id), {
        numberOfMembers: increment(1),
      });
      batch.commit();
      setCommunityStateValue((prev) => ({
        ...prev,
        mySnippets: [...prev.mySnippets, newSnippet],
      }));
    } catch (error: any) {
      console.log("community created error", error);
      setError(error?.message);
    }
    setLoading(false);
  };

  return {
    communityStateValue,
    onJoinOrLeaveCommunity,
    loading,
  };
};
export default useCommunityData;
