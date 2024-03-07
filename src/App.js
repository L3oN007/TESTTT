import React from 'react'
import './App.css'
import Header from './component/khang-components/Header'
import HomePageBody from './component/khang-components/HomePageBody'
import Footer from './component/khang-components/Footer'
import InteriorDesignApartment from './component/khang-components/InteriorDesignApartment'
import Hpthicong from './thi-cong/hp-thicong'
import { Routes, Route, Navigate } from 'react-router-dom'
import TownhouseInteriorDesign from './component/khang-components/TownhouseInteriorDesign'
import OfficeInteriorDesign from './component/khang-components/OfficeInteriorDesign'
import VillaInteriorDesign from './component/khang-components/VillaInteriorDesign'
import Blog from './component/quan-components/Blog'
import LoginForm from './component/dung-components/LoginForm'
import ProjectDone from './component/dung-components/ProjectDone'
import BaoGia from './component/quan-components/BaoGia'
import BlogApartment from './component/quan-components/BlogApartment'
import BlogHotel from './component/quan-components/BlogHotel'
import BlogOffice from './component/quan-components/BlogOffice'
import BlogVilla from './component/quan-components/BlogVilla'
import BlogTownHouse from './component/quan-components/BlogTownHouse'
import Staff from './component/quan-components/staff'
import Hpchungcu from './thi-cong/hp-chungcu'
import Hpnhapho from './thi-cong/hp-nhapho'
import Hpvanphong from './thi-cong/hp-vanphong'
import Hpbietthu from './thi-cong/hp-bietthu'
import Lienhe from './thi-cong/lienhe1'
import BaoGiaRequestCustomer from './component/quan-components/BaoGiaRequestCustomer'
import Admin from './thi-cong/admin'
import ConfirmBaoGiRequestCustomer from './component/khang-components/ConfirmBaoGiRequestCustomer'
import LayoutStaff from './shared/LayoutStaff'
import LayoutCustomer from './shared/LayoutCustomer'

function App() {

  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/' element={<HomePageBody />} />
        <Route path='/Blog' element={<Blog />} />
        <Route
          path='/Thiết_kế_nội_thất_chung_cư'
          element={<InteriorDesignApartment />}
        />
        <Route
          path='/Thiết_kế_nội_thất_nhà_phố'
          element={<TownhouseInteriorDesign />}
        />
        <Route
          path='/Thiết_kế_nội_thất_biệt_thự'
          element={<VillaInteriorDesign />}
        />
        <Route
          path='/Thiết_kế_nội_thất_văn_phòng'
          element={<OfficeInteriorDesign />}
        />
        <Route path='/Tổng_quan' element={<Hpthicong />} />
        <Route path='/Thi_Công_nội_thất_chung_cư' element={<Hpchungcu />} />
        <Route path='/Thi_Công_nội_thất_nhà_phố' element={<Hpnhapho />} />
        <Route path='/Thi_Công_nội_thất_văn_phòng' element={<Hpvanphong />} />
        <Route path='/Thi_Công_nội_thất_biệt_thự' element={<Hpbietthu />} />
        <Route path='/Liên_Hệ' element={<Lienhe />} />
        <Route path='/Đăng_nhập' element={<LoginForm />} />
        <Route path='/Dự_án_đã_thi_công' element={<ProjectDone />} />
        <Route path='/Báo_Giá' element={<BaoGia />} />{' '}
        <Route
          path='/Bao_Gia_Request_Customer'
          element={<BaoGiaRequestCustomer />}
        />
        <Route
          path='/Confirm_Bao_Gia_Request_Customer'
          element={<ConfirmBaoGiRequestCustomer />}
        />
        <Route path='/Blog_Chung_Cư' element={<BlogApartment />} />{' '}
        <Route path='/Blog_Văn_Phòng' element={<BlogOffice />} />{' '}
        <Route path='/Blog_Biệt_Thự' element={<BlogVilla />} />{' '}
        <Route path='/Blog_Khách_Sạn' element={<BlogHotel />} />{' '}
        <Route path='/Blog_Nhà_Phố' element={<BlogTownHouse />} />{' '}




        <Route path='/staff' element={<LayoutStaff />}>
          <Route path="" element={<Staff />} />
        </Route>


        {/* <Route path='/staff' element={<LayoutAdmin />}>
          <Route path="" element={<Admin />} />
          <Route path="test" element={<TestPage />} />
        </Route> */}



      </Routes>

      <Footer />
    </div>
  )
}
export default App
