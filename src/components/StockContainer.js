import React from "react";
import Stock from "./Stock";

function StockContainer({addPortfolio, setAddPortfolio, stocks}) {

  function addToPortfolio(){
    console.log(setAddPortfolio, "click")
  }

  return (
    <div>
      <h2 >Stocks</h2>
      {/* render stock list here*/}
        {stocks.map((stock) => (
          <Stock key={stock.id} ticker={stock.ticker} name={stock.name} type={stock.type} price={stock.price} onClick={addToPortfolio} addPortfolio = {addPortfolio} setAddPortfolio = {setAddPortfolio}/>
      ))}
    </div>
  );
}

export default StockContainer;
