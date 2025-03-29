import Agent from "@/components/Agent";
import { GetCurrentUser } from "@/lib/actions/auth.action";
import React from "react";

const page = async () => {
  const user = await GetCurrentUser();
  return (
    <>
      <h3>Interview Generation</h3>

      <Agent
        userName={user?.name || "Guest"}
        userId={user?.id}
        type="generate"
      />
    </>
  );
};

export default page;
