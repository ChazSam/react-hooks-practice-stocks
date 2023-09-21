import React from "react";
import Stock from "./Stock";

function PortfolioContainer({addPortfolio, setAddPortfolio}) {

function  handleClick(e){
  const newData = [...addPortfolio]
  newData.splice(e, 1)
  setAddPortfolio(newData)
}

  return (
    <div>
      <h2>My Portfolio</h2>
      {/* //render your portfolio stocks here */}
    {addPortfolio.map((portfolio, index) => (
         <div key={index} onClick={() => handleClick(index)}>
         <div className="card">
           <div className="card-body">
             <h5 className="card-title">{portfolio.name}</h5>
             <p className="card-text">{portfolio.ticker}: {portfolio.price}</p>
           </div>
         </div>
       </div>
     ))}
    </div>
  );
}

export default PortfolioContainer;
