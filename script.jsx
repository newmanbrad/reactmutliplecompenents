
// Example button compenent 
// use this.props to access methods passed in.

var Button = React.createClass({
  localHandleClick: function () {
    this.props.localHandleClick(this.props.increment);
  },
  render: function () {
    return (
        <button onClick={this.localHandleClick}>+{this.props.increment}</button>
      )
  }
});

var Result = React.createClass({ 
  render: function() {
    return (
      <div>Brad Rocks: {this.props.localCounter}</div>  
    )
  }
});

// Group compenents here
var Main = React.createClass({
  
  getInitialState: function () {
    return {counter: 0};
  },
  
  /**
  * Increment button value on click
  **/
  
  handleClick: function (increment) {
    this.setState({counter: this.state.counter+increment});
  },
  
  render: function() {
    return(
      <div>
        <Button localHandleClick={this.handleClick} increment={1}/>
        <Button localHandleClick={this.handleClick} increment={5}/>
        <Button localHandleClick={this.handleClick} increment={10}/>
        <Button localHandleClick={this.handleClick} increment={20}/>
        <Result localCounter={this.state.counter}/>
      </div>
    )
  }
});

React.render(<Main />, document.getElementById('example'));