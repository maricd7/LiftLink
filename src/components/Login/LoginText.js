import React from "react";
import { Heading,Paragraph } from "../common";
import '../../assets/css/Landing/LandingMain.css'

export const LoginText = () => {
  return (
    <div className="text-container-landing">
      <Heading text="Unlock Your Fitness Potential with LiftLink" />
      <Paragraph text="Connecting Personal Trainers and Clients for Tailored Fitness Journeys. Our platform bridges the gap between personal trainers and clients, creating an immersive fitness experience tailored just for you." />
    </div>
  );
};
