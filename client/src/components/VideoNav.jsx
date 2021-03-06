import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem, Button } from 'reactstrap';
import { FaRegPaperPlane, FaRegHeart, FaPlus } from 'react-icons/fa';
import ReactPlayer from 'react-player';

export default class VideoNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scroll: 0,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  handleScroll() {
    this.setState({
      scroll: window.scrollY,
    });
  }

  render() {
    const { scroll } = this.state;
    const { url, title } = this.props;
    return (
      <div>
        {(scroll > 484) &&
        <Nav id="video-nav" color="black">
          <NavItem>
            <ReactPlayer
              className="mini-vid"
              width="140px"
              height="95px"
              url={url}
            />
          </NavItem>
          <NavItem className="item">
            <Button color="primary">
              <FaRegHeart />
              {' Like'}
            </Button>
          </NavItem>
          <NavItem className="item">
            <Button color="primary">
              <FaPlus />
              {' Follow'}
            </Button>
          </NavItem>
          <NavItem className="item">
            <Button color="primary">
              <FaRegPaperPlane />
              {' Share'}
            </Button>
          </NavItem>
          <h5 className="nav-title">{title}</h5>
        </Nav>
        }
      </div>
    );
  }
}

VideoNav.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
