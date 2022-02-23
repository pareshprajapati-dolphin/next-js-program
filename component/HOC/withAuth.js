import React from "react";
import { useRouter } from "next/router";

const withAuth = (WrappedComponent) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const router = useRouter();
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        router.replace("/login");
        return null;
      }

      return <WrappedComponent {...props} accessToken={accessToken} />;
    }
    return null;
  };
};

export default withAuth;
