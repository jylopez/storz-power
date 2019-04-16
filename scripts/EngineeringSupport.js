class EngineeringSupport extends React.Component {
  render() {
    return (
      <div className="feature" id="engineering-support">
        <div className="background-image" style={{ backgroundImage: 'url("images/Background_Hex.png")' }}></div>
        <div className="title">
          <span className="bold">ENGINEERING</span> <span>SUPPORT</span>
        </div>
        <img className="engineering-support-1" src="images/engineering_support_1.png" />
        <img className="engineering-support-2" src="images/engineering_support_2.png" />
        <img className="watthub" src="images/watthub.png"/>
        <div className="blue-bar"></div>
        <div className="description">When it comes to battery storage, engineering may be challenging. <span className="bold">Storz Power</span> support program is available to you via <span className="bold">Storz Power</span> in-house engineering department. No project is too large or small. With 40+ years of combined experience in this space, the executive team has you covered.</div>
      </div>
    )
  }
}