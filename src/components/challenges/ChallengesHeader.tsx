import Image from "next/image";
import React from "react";

const ChallengesHeader = () => {
  return (
    <div
      className="hero h-96"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1572190006810-a55bd7077c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`,
      }}
    >
      <div className="hero-overlay "></div>
      <div className="hero-content flex-col px-20 text-neutral-content lg:flex-row-reverse ">
        <img
          src="https://media.istockphoto.com/id/1422275164/photo/teenage-girl-in-orange-hoody-balancing-high-on-wooden-pile.jpg?s=612x612&w=0&k=20&c=-jL6JyDR2Sokk-iEA0KXQfYVFUkjnWAUUYX7g121io8="
          className="max-w-xs rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Challenges</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn-primary btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default ChallengesHeader;
