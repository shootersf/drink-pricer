import React, { Component } from 'react';
import GetCategory from './components/GetCategory';
import CheckMultiPack from './components/CheckMultiPack';
import GetQuantity from './components/GetQuantity';
import GetProductSize from './components/GetProductSize';
import GetServingSize from './components/GetServingSize';
import GetProductCost from './components/GetProductCost';

class App extends Component {

  static defaultProps = {
    items : 
    [
      {
        category : "KEG",
        multiPack : false,
        singlePack : true,
        sizesText : ["50L", "30L"],
        sizes : [50000, 30000],
        servingsText : ["Pint", "Half-Pint"],
        servings : [568, 284]
      },
      {
        category : "SPIRIT",
        multiPack : true,
        singlePack : true,
        sizesText : ["700ml", "1L", "1.5L"],
        sizes : [700, 1000, 1500],
        servingsText : ["35.5ml", "50ml", "71ml"],
        servings : [35.5, 50, 71]
      }
    ]
  }

  constructor(props) {
    super(props);

    this.state = {
      stages : [
        {component : GetCategory, isNull : "category"},
        {component : CheckMultiPack, isNull : "isSingle"},
        {component : GetQuantity, isNull : "qty"},
        {component : GetProductSize, isNull : "size"},
        {component : GetServingSize, isNull : "servingSize"},
        {component : GetProductCost, isNull : "cost"}
      ]
      ,
      final : {
        category : null,
        isSingle : null,
        qty : null,
        size : null,
        servingSize : null,
        cost : null
      }
    }
  }

  getItems() {
    return this.props.items;
  }

  //Uses the category to grab the item it belongs to along with all it's properties.
  getItem(category) {
    return this.props.items.find( item => item.category === category);
  }

  updateFinal(updates) {
    this.setState({final : {...this.state.final , ...updates}}, () => {console.log(this.state.final)})
  }

  getCompenentForStage()  {
    //find the first null element in the final state and assign it's component to the variable component
    let Component = null;
    for (let i = 0; i < this.state.stages.length; i++)
    {
      const elementToCheck = this.state.stages[i].isNull;
      if (this.state.final[elementToCheck] === null)
      {
        Component = this.state.stages[i].component;
        break;
      }
    }

    if (Component)
    {
      return <Component currentFinal={this.state.final} updateFinal={this.updateFinal.bind(this)} getItems={this.getItems.bind(this)} getItem={this.getItem.bind(this)} />;
    }
  }

  render() {
    const componentToDisplay = this.getCompenentForStage();
    return (
      <div className="App center-align container">
        {componentToDisplay}
      </div>
    );
  }
}

export default App;
