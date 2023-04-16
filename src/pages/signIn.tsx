import { type NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import React from "react";
import { useRouter } from "next/router";

const BG_IMAGE =
  "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const SignIn: NextPage = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (sessionData) {
      router.push("/");
    }
  }, [sessionData]);

  if (sessionData) {
    return null;
  }

  return (
    <div
      style={{
        backgroundImage: `url(${BG_IMAGE})`,
      }}
      className="hero min-h-screen"
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="card glass max-w-xl border-2 border-red-500">
          <div className="card-body ">
            <h1 className="mb-5 text-5xl font-bold">Get productive</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing hidd
            </p>
            <div className="card-actions mt-20 justify-center">
              <button
                className="btn-primary btn rounded-full"
                onClick={() => void signIn()}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <p className="text-center text-2xl text-white"></p>
      <button
        className="btn-primary btn rounded-full"
        onClick={() => void signIn()}
      >
        Sign in
      </button> */}
    </div>
  );
};

export default SignIn;
