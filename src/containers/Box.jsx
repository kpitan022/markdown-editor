import React from "react";

export const Box = ({ children }) => {
  return (
    <div
      className="card border-primary overflow-auto"
      style={{
        // padding: "2%",
        maxHeight: "90vh",
        height: "100%",
        marginBottom: "5%",
        borderRadius: 10,
      }}>
      {children}
    </div>
  );
};
