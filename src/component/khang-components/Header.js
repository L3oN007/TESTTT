import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.jpg'
import { AutoCompleteSearch } from '../auto-complete-search/AutoCompleteSearch'
import { useAuth } from '../dung-components/AuthContext'
import bootstrap from 'bootstrap'

export default function Header() {
  const { isLogin, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };



  return (
    <nav class='position-relative navbar navbar-expand-lg bg-light '>
      <div class='container-fluid home-page-header'>
        <div className='Logo'>
          <Link to='/' className='navbar-brand'>
            <img src={logo} alt='logo' />
          </Link>
          {/* <a class="navbar-brand" href="#"><img src={logo}/></a> */}
        </div>

        <div
          class='collapse navbar-collapse justify-content-between'
          id='navbarSupportedContent'
        >
          <ul class='navbar-nav mb-2 mb-lg-0 flex-wrap'>
            <li class='nav-item mx-3'>
              <Link to='/' className='nav-link active Header-text'>
                Trang chủ
              </Link>
              {/* <a class="nav-link active Header-text " aria-current="page" href="#">Trang chủ</a> */}
            </li>
            <li class='nav-item dropdown mx-3'>
              <a
                class='nav-link dropdown-toggle Header-text'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Thiết kế nội thất
              </a>
              <ul class='dropdown-menu'>
                <li>
                  <Link
                    to='/Thiết_kế_nội_thất_chung_cư'
                    className='dropdown-item Header-text'
                  >
                    Thiết kế nội thất chung cư
                  </Link>
                </li>
                <li>
                  <Link
                    to='/Thiết_kế_nội_thất_nhà_phố'
                    className='dropdown-item Header-text'
                  >
                    Thiết kế nội thất nhà phố
                  </Link>
                </li>
                <li>
                  <Link
                    to='/Thiết_kế_nội_thất_biệt_thự'
                    className='dropdown-item Header-text'
                  >
                    Thiết kế nội thất biệt thự
                  </Link>
                </li>
                <li>
                  <Link
                    to='/Thiết_kế_nội_thất_văn_phòng'
                    className='dropdown-item Header-text'
                  >
                    Thiết kế nội thất văn phòng
                  </Link>
                </li>
                {/* <li><a class="dropdown-item Header-text" href="#">Thiết kế nội thất nhà phố</a></li>
            <li><a class="dropdown-item Header-text" href="#">Thiết kế nội thất biệt thự</a></li>
            <li><a class="dropdown-item Header-text" href="#">Thiết kế nội thất văn phòng</a></li> */}
              </ul>
            </li>
            <li class='nav-item dropdown mx-3'>
              <a
                class='nav-link dropdown-toggle Header-text'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Thi Công Nội Thất
              </a>
              {/* <Link to="/thi-cong-noi-that" className="nav-link dropdown-toggle Header-text" role="button" data-bs-toggle="dropdown" aria-expanded="false">Thi Công Nội Thất</Link> */}
              <ul class='dropdown-menu'>
                <li>
                  <Link
                    to='/Tổng_quan'
                    className='dropdown-item Header-text'
                    href='#'
                  >
                    Tổng quan
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item Header-text' to={'/Thi_Công_nội_thất_chung_cư'}>
                    Chung Cư
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item Header-text' to={'/Thi_Công_nội_thất_nhà_phố'}>
                    Nhà Phố
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item Header-text' to={'/Thi_Công_nội_thất_văn_phòng'}>
                    Văn Phòng
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item Header-text' to={'/Thi_Công_nội_thất_biệt_thự'}>
                    Biệt Thự
                  </Link>
                </li>
              </ul>
            </li>
            <li class='nav-item mx-3'>
              <Link
                to='/Dự_án_đã_thi_công'
                class='nav-link active Header-text'
                href='#'
              >
                Dự án đã thi công
              </Link>
            </li>
            <li class='nav-item mx-3'>
              <Link to='/Blog' class='nav-link active Header-text' href='#'>
                Blog
              </Link>
            </li>
            <li class='nav-item dropdown mx-3'>
              <a
                class='nav-link dropdown-toggle Header-text'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Liên hệ
              </a>
              <ul class='dropdown-menu'>
                <li>
                  <Link
                    to='/Liên_Hệ'
                    className='dropdown-item Header-text'
                  >
                    Liên Hệ
                  </Link>
                </li>
                <li>
                  <Link
                    to='/Báo_Giá'
                    className='dropdown-item Header-text'
                  >
                    Báo Giá
                  </Link>
                </li>
                <li>
                  <Link
                    to='/Bao_Gia_Request_Customer'
                    className='dropdown-item Header-text'
                  >
                    Báo Giá Customer
                  </Link>
                </li>
                <li>
                  <Link
                    to='/staff'
                    className='dropdown-item Header-text'
                  >
                    Staff
                  </Link>
                </li>
                {/* <li><a class="dropdown-item Header-text" href="#">Thiết kế nội thất nhà phố</a></li>
            <li><a class="dropdown-item Header-text" href="#">Thiết kế nội thất biệt thự</a></li>
            <li><a class="dropdown-item Header-text" href="#">Thiết kế nội thất văn phòng</a></li> */}
              </ul>
            </li>
            <li class='nav-item mx-3'>
              {isLogin ? (
                <button class='nav-link active Header-logout' onClick={handleLogout}>Đăng xuất</button>
              ) : (
                <Link
                  to='/Đăng_nhập'
                  class='nav-link active Header-text'
                  href='#'
                >
                  Đăng nhập
                </Link>
              )}
            </li>
          </ul>
        </div>
        <div className='search'>
          <AutoCompleteSearch />


        </div>
      </div>
    </nav>
  )
}
