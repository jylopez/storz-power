class Utility extends React.Component {
  render() {
    return (
      <div className="utility" id="utility" style={{ backgroundImage: "url(images/utility.png)"}}>
        <img className="device" src="images/utility_device.png" />
        <div className="title">
          <span className="bold">UTILITY</span> <span>SCALE</span>
        </div>
        <div className="description"><span className="bold">Storz Power</span> Nano Printed Lithium maximizes power density while reducing the physical footprint. This puts us at 30% of the size of the competition. <span className="bold">Storz Power</span> puts 10 MW into a 40-foot container and 4 MW into a 20-foot container.</div>
      </div>
    )
  }
}