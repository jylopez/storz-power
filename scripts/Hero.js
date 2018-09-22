class Hero extends React.Component {
  constructor(props){
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(){
    Calendly.showPopupWidget('https://calendly.com/storzpower'); 
    return false;
  }

  render() {
    return (
      <div className="hero">
        <Navbar />
        <img className="logo" src="images/Asset 9.png"/>

        <div className="call-to-action">
          <a onClick={this.clickHandler}>Schedule time with us</a>
        </div>
      </div>
    )
  }
}