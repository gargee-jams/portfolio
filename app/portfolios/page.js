// pages/contact.js
"use client";
import React, { useState } from 'react';
import Header from '/components/Header'
import GraphicDesignPortfolio from  '/components/GraphicDesignPortfolio'
import ArtPortfolio from '/components/ArtPortfolio';
const Portfolios = () => {
  

  return (
    <div className="container mx-auto p-6">
    <Header></Header>
     <GraphicDesignPortfolio></GraphicDesignPortfolio>
     <ArtPortfolio></ArtPortfolio>  
    </div>
  );
};

export default Portfolios;
