import React from "react";

const MONK_IMG =
  "https://images.unsplash.com/photo-1569668723493-80d82b05bad7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

const RUN_IMG =
  "https://images.unsplash.com/photo-1559166631-ef208440c75a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

export enum ChallengeMode {
  Easy,
  Hard,
}

interface ChallengeCardProps {
  mode: ChallengeMode;
}

const ChallengeCard = ({ mode }: ChallengeCardProps) => {
  return (
    <div
      className={`indicator card card-side relative mb-14 h-56 w-full ${
        mode === ChallengeMode.Easy ? "bg-base-100" : "bg-warning bg-opacity-40"
      } shadow-2xl duration-75 ease-in-out hover:scale-105`}
    >
      {/* <div className="absolute right-0 z-50 -translate-y-4">ADAD</div> */}

      {mode === ChallengeMode.Hard && (
        <div className="indicator-center badge-warning badge indicator-item overflow-auto p-4">
          <div className="h-full w-full animate-ping border-2 border-red-600 bg-warning"></div>
          Premium
        </div>
      )}

      <div className="card-body">
        <div className="mb-2 flex">
          <div className="badge-primary badge mr-2">100 joined</div>
          <div className="badge-info badge mr-2">75% completion</div>
          <div className="badge-error badge mr-2">21 days</div>
        </div>
        <h2 className="card-title">Challenge Title Here</h2>
        <p>Click the button to join the challenge now.</p>
        <div className="card-actions justify-start">
          <button
            className={`${
              mode === ChallengeMode.Easy ? "btn-primary" : "btn-warning"
            } btn`}
          >
            Join Now
          </button>
        </div>
      </div>
      <figure className="w-72">
        <div className="hero-overlay"></div>
        <img
          src={mode === ChallengeMode.Easy ? RUN_IMG : MONK_IMG}
          alt="Movie"
          className="brightness-90"
        />
      </figure>
    </div>
  );
};

export default ChallengeCard;
