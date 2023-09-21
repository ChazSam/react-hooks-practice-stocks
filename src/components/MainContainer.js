import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

const [addPortfolio, setAddPortfolio] = useState([])
const [stocks, setStocks] = useState([])

useEffect(()=>{
  fetch("http://localhost:3001/stocks")
  .then((r)=>r.json())
  .then((item)=> setStocks(item))
})
 
const [selectSort, setSelectSort] = useState("none")
const [selectFilter, setSelectFilter] = useState("Tech")


function handleSelection(e){
  const selectedValue = (e.target.value)
  setSelectSort(selectedValue)

}

function handleFilter(e){
const selectedValue = e.target.value

  setSelectFilter(selectedValue)

}

const filteredStocks = stocks.filter((stock) => (stock.type === selectFilter))

let sortedStocks=[...filteredStocks].sort((a,b)=> {
  if (selectSort==="Price") {return a.price - b.price}
  if(selectSort==="Alphabetically") {
    const nameA = a.name.toUpperCase(); 
    const nameB = b.name.toUpperCase(); 
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  return 0;
  }
})

  return (
    <div>
      <SearchBar stocks={stocks} setStocks={setStocks} handleFilter={handleFilter} handleSelection={handleSelection}  />
      <div className="row">
        <div className="col-8">
          <StockContainer addPortfolio={addPortfolio} setAddPortfolio={setAddPortfolio} stocks={sortedStocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer addPortfolio={addPortfolio} setAddPortfolio={setAddPortfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
