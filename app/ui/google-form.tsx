import { signIn } from "@/auth";
import React from "react";

const GoogleForm = () => {
  return (
    <form className="flex self-center mt-3"
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button
        type="submit"
        className="bg-blue-400 hover:bg-blue-300 text-white px-5 py-2 font-semibold  rounded-lg text-center"
      >
        Sign in with Google
      </button>
    </form>
  );
};

export default GoogleForm;
