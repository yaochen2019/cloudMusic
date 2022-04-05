import styled from "styled-components";



export const Bottomwarpper = styled.div`
  position: fixed;
  flex-direction: column;
  z-index: 99;
  left: 210px;
  right: 0;
  bottom: 0;
  height: 80px;
  overflow: visible;
  background-color: rgb(249,249,249);
.ant-slider{
    position: relative;
    width: 100%;
    padding: 0;
    margin: 0;
    left: 0;
    width: 99.5%;
    top: 0;
    .ant-slider-rail {
          
          background-color: rgb(230,230,230);
        }

        .ant-slider-track {
         
          background-color: rgb(31,208,175);
        }

        .ant-slider-handle {
          margin-top: -2px;
          height: 8px;
          width: 8px;
          border-radius: 100%;
          display: none;
          background: rgb(31,208,175);
        }
}
.ant-slider:hover .ant-slider-handle{
    display: block;
}

.control{
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    height: 68px;
    align-items: center;
    .left{
        display: flex;
        width: 300px;
        justify-content: center;
        text-align: center;

        .image{
            img{
                width: 45px;
                height: 45px;
            }
        }
        .song{
            margin-left: 10px;
            .songinfo{
                .song-name{
                    color: black;
                    font-size: 13px;

                }
                .singer-name{
                    color: black;
                    font-size: 13px;
                    margin-left: 10px;
                }
                .singer-name:hover,.song-name:hover{
                    color: rgb(31,208,175);
                }

            }
            .icons{
                display: flex;
                justify-content: space-between;
                i{
                    font-size: 17px;

                }
                a{
                    color: #000;
                }
                a:hover{
                    color: rgb(31,208,175)
                }
            }
        }

        

    }
    .center{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 160px;
        height: 68px;
        .pre,.next,.order,.vloum{
            cursor: pointer;
            font-size: 18px;
        }
        .pre:hover,.next:hover,.order:hover,.vloum:hover{
            color: rgb(31,208,175);
        }
        .play{
            cursor: pointer;
            font-size:32px;
            color: rgb(31,208,175);
        }

        
    }
    .right{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 68px;
        .song-words{
            cursor: pointer;
            margin-left: 20px;
        }
        .divide{
            margin-left: 5px;
        }   
        .now-time{
            cursor: pointer;
        }
        .totla-time{
            cursor: pointer;
            margin-left: 5px;
        }
        .song-words:hover,.totla-time:hover,.now-time:hover{
            color: rgb(31,208,175);
        }
   

    }
}

`
