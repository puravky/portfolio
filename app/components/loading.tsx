import { LoaderCircle } from "lucide-react";
import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#121212]">
      <div className="text-4xl text-white animate-spin">
        <LoaderCircle />
      </div>
    </div>
  );
};

export default LoadingScreen;
