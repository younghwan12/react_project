import React from 'react'
import Header from '../include/Header'

const Musicplayer = () => {
  return (
    <>
      <Header />
      <main id="main" class="musicplayer_inside">
        <section id="contents" class="musicplayer_inside">
          <div class="outer_album_art">
            <img src="assets/img/test_album.png" alt="" />
          </div>
          <div class="search">
            <label htmlFor="searchInput ir">
              <div class="glass"></div>
            </label>
            <input
              type="text"
              id="searchInput"
              class="input__search"
              placeholder="Please Insert Here"
              title="검색"
            />
          </div>
          <div class="music__player__subcont">
            <div class="music__player">
              <div class="music_player_ctrl">
                <img src="#" alt="" />
                <div class="volumeCont">
                  <input
                    type="range"
                    id="volume-control"
                    min="0"
                    max="10"
                    value="5"
                    step="0.1"
                  />
                </div>
                <h2>
                  Now <strong>Playing.</strong>
                </h2>
                <div class="inner_album_art">
                  <img src="assets/img/test_album.png" alt="" />
                  <div class="greencircle"></div>
                  <div class="musicpoint"></div>
                </div>
                <p>Joss Stone</p>
                <p class="music__tit">Merry Christmas Love</p>
                <div class="progress">
                  <div class="bar">
                    <audio id="main-audio" src="#"></audio>
                  </div>
                  <div class="timer">
                    <span class="current">0:00</span>
                    <span class="duration">4:00</span>
                  </div>
                </div>
                <div class="control">
                  <i title="전체 반복" class="repeat" id="control-repeat"></i>
                  <i title="이전곡 재생" class="prev" id="control-prev"></i>
                  <i title="재생" class="play" id="control-play"></i>
                  <i title="정지" class="stop" id="control-play"></i>
                  <i title="다음곡 재생" class="next" id="control-next"></i>
                  <i title="재생 목록" class="list" id="control-list"></i>
                </div>
              </div>
              <div class="music_player_lyric">
                <h3>Lyric</h3>
                <div class="lyric_inner">
                  "Have Yourself A Merry Little Christmas"(originally by Judy
                  Garland)
                  <br />
                  <br />
                  Have yourself a merry little Christmas
                  <br />
                  <br />
                  Let your heart be light
                  <br />
                  <br />
                  From now on our troubles will be out of sight
                  <br />
                  <br />
                  Have yourself a merry little Christmas
                  <br />
                  <br />
                  Make the Yuletide gay
                  <br />
                  <br />
                  From now on our troubles will be miles away
                  <br />
                  <br />
                  Here we are as in olden days
                  <br />
                  <br />
                  Happy golden days of yore
                  <br />
                  <br />
                  Faithful friends who are dear to us
                  <br />
                  <br />
                  Gather near to us once more
                  <br />
                  <br />
                  Through the years we all will be together
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Musicplayer
