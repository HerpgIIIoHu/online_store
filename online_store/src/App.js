import React from 'react';
import Card from './components/Card/Card'
import Header from './components/Header'
import Drawer from './components/Drawer';


const sneakers = [
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imgUrl: "img/sneakers/nike1.jpg", key: ''},
  {name: 'Мужские Кроссовки Nike Air Max 270', price: 12999, imgUrl: "img/sneakers/2.jpg", key: ''},
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imgUrl: "img/sneakers/3.jpg", key: ''},
  {name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imgUrl: "img/sneakers/4.jpg", key: ''},
  // {name: 'Мужские Кроссовки Under Armour Curry 8', price: 15199, imgUrl: "img/sneakers/5.jpg"},
  // {name: 'Мужские Кроссовки Nike Kyrie 7', price: 11299, imgUrl: "img/sneakers/6.jpg"},
  // {name: 'Мужские Кроссовки Jordan Air Jordan 11', price: 10799, imgUrl: "img/sneakers/7.jpg"},
  // {name: 'Мужские Кроссовки Nike LeBron XVIII', price: 16499, imgUrl: "img/sneakers/8.jpg"}
]




function App() {
  const [cartO, setCart] = React.useState(false);
  
  

  return (
    <div className="wrapper clear">
      
      {cartO ? <Drawer onClickClose={() => setCart(false)}/> : null}
      <Header onClickCart={() => setCart(true)}/>
      

      <div className="content p-40 ">
        <div className="d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="search d-flex">
            <img src="img/search.svg"/>
            <input placeholder="Поиск..."></input>
          </div>
        </div>
        
        <div className="d-flex justify-between">

        {sneakers.map((obj, index) =>
            <Card title={obj.name} price={obj.price}
            imgUrl={obj.imgUrl} key={index} 
            onClickPlus={() => console.log(obj)}
            onFavorite={() => console.log("Добавленно в закладки", obj)}/>
        )}

        </div>
      </div>
      
    </div>
  );
}

export default App;
