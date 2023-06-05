"use client";

import { Toaster } from "react-hot-toast";

function ClientProvider() {
  return (
    <>
      <Toaster position="top-right" />
      {/* can add more client library here*/}
    </>
  );
}

export default ClientProvider;
