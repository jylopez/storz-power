class Commercial extends React.Component {
  render() {
    return (
      <div className="commercial" id="commercial">
        <img src="images/Asset 1.jpg" />
        <img className="device" src="images/Asset 3.png" />
        <div className="title">
          <span className="bold">BUSINESS</span> <span>STORAGE</span>
        </div>
        <div className="description">Multiple 10kWh packs can be connected by <span className="bold">Storz Power</span> to expand the capacity. Seamlessly supports the small-medium size business all the way up to utility scale or demand response.</div>
      </div>
    )
  }
}