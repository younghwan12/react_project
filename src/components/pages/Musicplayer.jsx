// import React, { useEffect, useState } from 'react'
// import { fetchAPI } from '../../utils/fetchAPI'
// import Header from '../include/Header'
// import { useParams } from 'react-router-dom'
// import Loader from '../Loader'

// function MusicText({ musicDetail }) {
//   return (
//     <div class="music__player__subcont">
//       <div class="music__player">
//         <div class="music_player_ctrl">
//           <h2>
//             Now <strong>Playing.</strong>
//           </h2>
//           <div class="inner_album_art">
//             <img src={musicDetail.images.coverart} alt="" />
//             <div class="greencircle"></div>
//             <div class="musicpoint"></div>
//           </div>
//           <p>{musicDetail.subtitle}</p>
//           <p class="music__tit">{musicDetail.title.slice(0, 20)}</p>
//           <audio
//             className="audiobox"
//             src={`${musicDetail.hub.actions[1].uri}`}
//             type="audio/m4a"
//             controls
//             // autoPlay
//           >
//             <source
//               src={`${musicDetail.hub.actions[1].uri}`}
//               type="audio/m4a"
//             />
//           </audio>
//         </div>
//         <div class="music_player_lyric">
//           <h3>Lyric</h3>
//           <div class="lyric_inner">
//             "Have Yourself A Merry Little Christmas"(originally by Judy Garland)
//             <br />
//             <br />
//             Have yourself a merry little Christmas
//             <br />
//             <br />
//             Let your heart be light
//             <br />
//             <br />
//             From now on our troubles will be out of sight
//             <br />
//             <br />
//             Have yourself a merry little Christmas
//             <br />
//             <br />
//             Make the Yuletide gay
//             <br />
//             <br />
//             From now on our troubles will be miles away
//             <br />
//             <br />
//             Here we are as in olden days
//             <br />
//             <br />
//             Happy golden days of yore
//             <br />
//             <br />
//             Faithful friends who are dear to us
//             <br />
//             <br />
//             Gather near to us once more
//             <br />
//             <br />
//             Through the years we all will be together
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// const Musicplayer = () => {
//   const [musicDetail, setMusicDetail] = useState(null)

//   const { key } = useParams()

//   useEffect(() => {
//     fetchAPI(`songs/get-details?key=${key}&locale=ko-KR`).then((data) =>
//       setMusicDetail(data)
//     )
//   }, [])

//   // if (!musicDetail?.length) return <Loader />
//   return (
//     <>
//       <Header />
//       <main id="main" class="musicplayer_inside">
//         <section id="contents" class="musicplayer_inside">
//           <div class="outer_album_art">
//             <img src="assets/img/test_album.png" alt="" />
//           </div>
//           <div class="search">
//             <label htmlFor="searchInput ir">
//               <div class="glass"></div>
//             </label>
//             <input
//               type="text"
//               id="searchInput"
//               class="input__search"
//               placeholder="Please Insert Here"
//               title="검색"
//             />
//           </div>
//           <MusicText musicDetail={musicDetail} />
//         </section>
//       </main>
//     </>
//   )
// }

// export default Musicplayer
