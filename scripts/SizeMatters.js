class SizeMatters extends React.Component {
  render() {
    return (
      <div className="feature" id="size-matters">
        <div className="background-image" style={{ backgroundImage: 'url("images/Background_Hex.png")' }}></div>
        <div className="title">
          <span className="bold">SIZE</span> <span>MATTERS</span>
        </div>
        <img className="size-matters" src="images/size_matters.png" />
        <div className="size-matters-text">
          <div>At 40-50% the Weight</div>
          <div>At 39-47% the Size</div>
        </div>
        <div className="blue-bar"></div>
        <div className="description">
          <div>Bigger isn't always better when it comes to storage.</div>
          <div>Our Nano Printed Lithium has a higher power density, with a smaller footprint, than any other competitor in the market.</div>
          <div>Less space means more performance and more area for other supporting equipment.</div>
        </div>
      </div>
    )
  }
}