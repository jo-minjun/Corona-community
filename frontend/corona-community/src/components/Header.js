import React from 'react';
import { Navbar, NavDropdown, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { isLogined } from '../auth/AuthUtil';
import { doLogout } from '../auth/AuthApi';

const Header = () => {
  const getUsername = () => {
    const email = localStorage.getItem('email');
    return email.split('@')[0];
  };

  return (
    <Navbar bg="light" variant="light" className="header">
      <div></div>
      {isLogined() ? (
        <div className="toggle">
          <NavDropdown title={getUsername()} id="basic-nav-dropdown">
            <NavDropdown.Item href="/post/new">글쓰기</NavDropdown.Item>
            <NavDropdown.Item href="/profile">프로필</NavDropdown.Item>
            <NavDropdown.Item href="/my_posts">내가 쓴 글</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/" onClick={doLogout}>
              로그아웃
            </NavDropdown.Item>
          </NavDropdown>
          <span>
            {/* <Image src="./avatar.png" roundedCircle className="header_avatar" /> */}
            <i
              className="fas fa-user-circle"
              style={{ fontSize: 'xx-large', color: '#007bff' }}
            ></i>
          </span>
        </div>
      ) : (
        <div className="login_button">
          <Link to="/login" className="link">
            <Button variant="primary">로그인</Button>
          </Link>
        </div>
      )}
    </Navbar>
  );
};

export default Header;
