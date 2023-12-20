import React from "react";

const InfoBlock = ({ title, description, gifUrl }) => {
  return (
    <div className="info-block">
      <h2 style={{ display: "none" }}>{title}</h2>
      <p style={{ display: "none" }}>{description}</p>
      {gifUrl && (
        <img src={gifUrl} width={350} height={250} alt="Info" className="m-1" />
      )}
    </div>
  );
};

export default InfoBlock;


