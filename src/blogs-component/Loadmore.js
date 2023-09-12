import React, { useState } from 'react';
import MyBlogs from './myblogs';

const CardList = ({ data }) => {
  const [cardsToShow, setCardsToShow] = useState(3); // Initial number of cards to show

  const loadMoreCards = () => {
    // Increase the number of cards to show when the "Load More" button is clicked
    setCardsToShow(cardsToShow + 3); // You can adjust this number as needed
  };

  return (
    <div className="card-list">
      {data.slice(0, cardsToShow).map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
        />
      ))}
      {cardsToShow < data.length && (
        <button onClick={loadMoreCards}>Load More</button>
      )}
    </div>
  );
};

export default CardList;
Use the CardList Component:
Import and use the CardList component in your main application or another component, passing the data as a prop.

jsx
Copy code
// App.js
import React from 'react';
import CardList from './CardList';

const App = () => {
  const data = [
    // Your data here
  ];

  return (
    <div className="app">
      <h1>Load More Cards in React</h1>
      <CardList data={data} />
    </div>
  );
};

export default App;
Styling:
Style your "Load More" button and cards using CSS or a styling library as needed.

This code will initially display a limited number of cards (in this example, 3 cards), and when the "Load More" button is clicked, it will increase the number of cards shown by 3 each time. You can adjust the number of cards to load by changing the value in the setCardsToShow function to suit your needs.





