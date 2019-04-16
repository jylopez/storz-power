class NanoPrinted extends React.Component {
  render() {
    return (
      <div className="feature" id="nano-printed">
        <div className="background-image" style={{ backgroundImage: 'url("images/nano_printed.jpg")'}}></div>
        <div className="title">
          <span className="bold">NANO</span> <span>PRINTED</span>
        </div>
        <div className="blue-bar"></div>
        <div className="description">The hexagon shape in the <span className="bold">Storz Power</span> logo represents the Nano Printing of our batteries; each printed hexagonal dot is the size of a human cell. The small size allows for precise placement of our patented compounds, reducing resistance and heat. This means beter performance: using only 30% of the Lithium.</div>
      </div>
    )
  }
}