// import React, { useEffect, useState } from "react";

// const VideoSection = () => {
//   const openModal = () => {
//     const modal = document.getElementById("videoModal");
//     if (modal) {
//       window.jQuery(modal).modal("show");
//     }
//   };
//   const [video, setVideo] = useState({});

//   useEffect(() => {
//     fetch(`http://localhost:5000/video-section/`)
//       .then((res) => res.json())
//       .then((info) => setVideo(info[0]));
//   }, []);

//   return (
//     <>
//       <section className="intro-area intro-area-v1">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div
//                 className="play-content bg_cover text-center wow fadeInUp"
//                 style={{
//                   backgroundImage: "url({video.image})",
//                 }}
//               >
//                 <button
//                   onClick={openModal}
//                   className="video-popup btn btn-primary"
//                   data-toggle="modal"
//                   data-target="#videoModal"
//                 >
//                   <i className="fas fa-play" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Bootstrap Modal */}
//       <div
//         className="modal fade"
//         id="videoModal"
//         tabIndex="-1"
//         role="dialog"
//         aria-labelledby="videoModalLabel"
//         aria-hidden="true"
//       >
//         <div
//           className="modal-dialog modal-dialog-centered modal-lg"
//           role="document"
//         >
//           <div className="modal-content">
//             <div className="modal-header">
//               <button
//                 type="button"
//                 className="close"
//                 data-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <span aria-hidden="true">
//                   <i class="far fa-times"></i>
//                 </span>
//               </button>
//             </div>
//             <div className="modal-body">
//               <div className="embed-responsive embed-responsive-16by9">
//                 <iframe
//                   title="YouTube Video"
//                   className="embed-responsive-item"
//                   src={video.youtube}
//                   allowFullScreen
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default VideoSection;

import React, { useEffect, useState } from "react";

const VideoSection = () => {
  const openModal = () => {
    const modal = document.getElementById("videoModal");
    if (modal) {
      window.jQuery(modal).modal("show");
    }
  };

  const [videoId, setVideoId] = useState('');
  const [videoImage, setVideoImage] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/video-section/`)
      .then((res) => res.json())
      .then((info) => {
        if(info && info[0] && info[0].youtube && info[0].image) {
          const urlParts = info[0].youtube.split('/');
          const id = urlParts[urlParts.length - 1];
          setVideoId(id);
          setVideoImage(info[0].image);
        }
      });
  }, []);

  return (
    <>
      <section className="intro-area intro-area-v1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="play-content bg_cover text-center wow fadeInUp"
                style={{
                  backgroundImage: `url(${videoImage})`,
                }}
              >
                <button
                  onClick={openModal}
                  className="video-popup btn btn-primary"
                  data-toggle="modal"
                  data-target="#videoModal"
                >
                  <i className="fas fa-play" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="videoModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="videoModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="far fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="embed-responsive embed-responsive-16by9">
                {videoId && (
                  <iframe
                    title="YouTube Video"
                    className="embed-responsive-item"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
