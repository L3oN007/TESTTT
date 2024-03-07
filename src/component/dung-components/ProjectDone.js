// import React, { useState } from 'react'
// import sloganBackgeound from '../../assets/images/CropSlogan BackgroundWithSlogan.jpg'
// import CarouselComponent from '../khang-components/CarouselComponent'
// import HomePageBodySecondHalf from '../khang-components/HomePageBodySecondHalf'
// import { Project } from '../../shared/ListOfProject'
// export default function ProjectDone({ projectDone }) {
//   const listOfProjectDone1 = Project.filter(
//     ProjectDonetItem => ProjectDonetItem.id >= 1 && ProjectDonetItem.id <= 4
//   )
//   const listOfProjectDone2 = Project.filter(
//     ProjectDoneItem => ProjectDoneItem.id >= 5 && ProjectDoneItem.id <= 8
//   )
//   // const [project, setProject] = useState([])
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const handleClosePopup = () => {
//     setIsPopupOpen(false);
//   };
//   return (
//     <div className='container-fluid homePagesLogan' id='homePagesLogan'>
//       <div></div>
//       <div className='HomepageBody-container'>
//         <div className='HomepageBody-title'>Dự án đã thực hiện</div>
//         <div className='container-fluid'>
//           <div className='row row-cols-4 row-cols-md-4 g-4 my-2'>
//             {listOfProjectDone1.map(ProjectDoneItem => (
//               <div className='col mt-0'>
//                 <a
//                   href='#'
//                   title='buzz hover text'
//                   className='homePageBody-link'
//                 >
//                   <div className='homePageBody-hover '>
//                     <div className='HPB'>
//                       <img
//                         src={ProjectDoneItem.img}
//                         className='card-img homePageBody-hover card-img-bg homePageBody-link'
//                       />
//                       <div className='HPB-layer'>
//                         <h3 className='HPB-text'>{ProjectDoneItem.title}</h3>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               </div>
//             ))}
//           </div>
//           <div className='row row-cols-4 row-cols-md-4 g-4 my-2 mt-3'>
//             {listOfProjectDone2.map(productItem => (
//               <div className='col mt-0'>
//                 <a
//                   href='#popup1'
//                   title='buzz hover text'
//                   className='homePageBody-link'
//                   // id='BASE'
//                   onClick={() => {
//                     setProject(productItem); // Giả sử productItem là dự án đã chọn
//                     setIsPopupOpen(true);
//                   }}
//                 // onClick={() => {
//                 //   setProject(projectDone)
//                 // }}
//                 >
//                   <div className='homePageBody-hover '>
//                     <div className='HPB'>
//                       <img
//                         src={productItem.img}
//                         className='card-img homePageBody-hover card-img-bg homePageBody-link'
//                       />
//                       <div className='HPB-layer'>
//                         <h3 className='HPB-text'>{productItem.title}</h3>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               </div>
//             ))}



//             {isPopupOpen && (
//               <div id='popup1' className='overlay w-100 mt-0'>
//                 <div className='popup'>
//                   {/* Thêm nội dung cho popup */}
//                   <img src={project.img} alt={project.title} />
//                   <h2>{project.title}</h2>
//                   <a className='close' href='#' onClick={handleClosePopup}>
//                     &times;
//                   </a>
//                   <div className='content'>{/* Nội dung cho popup */}</div>
//                 </div>
//               </div>
            



//             {/* <div id='popup1' className='overlay w-100 mt-0'>
//               <div className='popup'>
//                 <img src='assets/articleIMG/IDA1.jpeg' />
//                 <h2>TEST</h2>
//                 <a
//                   className='close'
//                   href='#BASE'
//                 >
//                   &times;
//                 </a>
//                 <div className='content'>This is a TEST</div>
//               </div>
//             </div>
//             </div> */}


//             <div className='HomepageBody-btn'>
//               <a href='#' className='btn btn-scheme-dark btn-scheme-hover-light'>
//                 Xem Thêm
//               </a>
//             </div>


//           </div>
//         </div>
//       </div>
//         )}















import React, { useState } from 'react'
import sloganBackgeound from '../../assets/images/CropSlogan BackgroundWithSlogan.jpg'
import CarouselComponent from '../khang-components/CarouselComponent'
import HomePageBodySecondHalf from '../khang-components/HomePageBodySecondHalf'
import { Project } from '../../shared/ListOfProject'

export default function ProjectDone({ projectDone }) {
  const listOfProjectDone1 = Project.filter(
    (ProjectDoneItem) => ProjectDoneItem.id >= 1 && ProjectDoneItem.id <= 4
  );
  const listOfProjectDone2 = Project.filter(
    (ProjectDoneItem) => ProjectDoneItem.id >= 5 && ProjectDoneItem.id <= 8
  );
  const [project, setProject] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className='container-fluid homePagesLogan' id='homePagesLogan'>
      <div></div>
      <div className='HomepageBody-container'>
        <div className='HomepageBody-title'>Dự án đã thực hiện</div>
        <div className='container-fluid'>
          <div className='row row-cols-4 row-cols-md-4 g-4 my-2'>
            {listOfProjectDone1.map((projectItem) => (
              <div className='col mt-0' key={projectItem.id}>
                <a
                  href='#popup1'
                  title='buzz hover text'
                  className='homePageBody-link'
                  onClick={() => {
                    setProject(projectItem);
                    setIsPopupOpen(true);
                  }}
                >
                  <div className='homePageBody-hover '>
                    <div className='HPB'>
                      <img
                        src={projectItem.img}
                        className='card-img homePageBody-hover card-img-bg homePageBody-link'
                      />
                      <div className='HPB-layer'>
                        <h3 className='HPB-text'>{projectItem.title}</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className='row row-cols-4 row-cols-md-4 g-4 my-2 mt-3'>
            {listOfProjectDone2.map((projectItem) => (
              <div className='col mt-0' key={projectItem.id}>
                <a
                  href='#popup1'
                  title='buzz hover text'
                  className='homePageBody-link'
                  onClick={() => {
                    setProject(projectItem);
                    setIsPopupOpen(true);
                  }}
                >
                  <div className='homePageBody-hover '>
                    <div className='HPB'>
                      <img
                        src={projectItem.img}
                        className='card-img homePageBody-hover card-img-bg homePageBody-link'
                      />
                      <div className='HPB-layer'>
                        <h3 className='HPB-text'>{projectItem.title}</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {isPopupOpen && (
            <div id='popup1' className='overlay w-100 mt-0'>
              <div className='popup'>
                <img src={project.img} alt={project.title} />


                <div>
                <h2>{project.title}</h2>
                <div className='content'>{project.description}</div>
                </div>


                <a className='close' href='#' onClick={handleClosePopup}>
                  &times;
                </a>


              </div>
              
            </div>
          )}

          <div className='HomepageBody-btn'>
            <a href='#' className='btn btn-scheme-dark btn-scheme-hover-light'>
              Xem Thêm
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
