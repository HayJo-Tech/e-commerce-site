import React from "react";

export default function Title({ title }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 mt-2 text-title">
        <div className="text-capitalized font-weight-bold">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
}
