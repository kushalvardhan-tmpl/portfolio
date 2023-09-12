function Cards({ item }) {
  return (
    <div className="cate-Container">
      {item.map((val) => (
        <div key={val.id} className="card">
          <div className="card-image">
            <img src={val.image} />
          </div>
          <div className="card-body">
            <div className="card-title">{val.title}</div>
            <div className="card-text">{val.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
