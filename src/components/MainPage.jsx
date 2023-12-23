/* eslint-disable react/prop-types */
import React from "react";

export default function MainPage({ productData, loadingData, error }) {
  console.log("the props in MainPage:", productData, loadingData, error);
  return (
    <>
      <h1>This is the main page area, where youll be having some products</h1>
    </>
  );
}
