import React, { Component } from 'react';
import { Nav, NavItem, Button} from 'reactstrap';
import { FaRegPaperPlane, FaRegHeart, FaPlus} from 'react-icons/fa';
import ReactPlayer from 'react-player';


export default class VideoNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scroll: 0,
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(e) {
    e.preventDefault();
    this.setState({
      scroll: window.scrollY
    });
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }


  render() {
    const { scroll } = this.state;
    return (
      <div>
        {(scroll > 484) &&
        <Nav classID="navbar" color="black">
          <NavItem>
            <ReactPlayer className="mini-vid" width="140px" height="95px" url="https://vimeo.com/299541287"/>
          </NavItem>
          <NavItem className="item">
            <Button color="primary"> <FaRegHeart/> Like </Button>
          </NavItem>
          <NavItem className="item" >
            <Button color="primary"> <FaPlus/> Follow </Button>
          </NavItem>
          <NavItem className="item">
            <Button color="primary"> <FaRegPaperPlane/> Share </Button>
          </NavItem>
        </Nav> }
      </div>
    )
  }
}
