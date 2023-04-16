import { NextPage } from "next";
import React from "react";
import ChallengeCard from "~/components/challenges/ChallengeCard";
import ChallengesHeader from "~/components/challenges/ChallengesHeader";
import { ChallengeMode } from "~/components/challenges/ChallengeCard";

const challenges: NextPage = () => {
  return (
    <div className="flex translate-y-0 flex-col items-center">
      <ChallengesHeader />
      <div className="z-50 mt-24 w-full max-w-5xl">
        <ChallengeCard mode={ChallengeMode.Hard} />
        <ChallengeCard mode={ChallengeMode.Easy} />
      </div>
    </div>
  );
};

export default challenges;
