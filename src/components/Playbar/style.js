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
        .showplaylist{
            margin-left: 20px;
        }
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
.playlistwarpper{
    position: fixed     ;
    display: none;
    right: 0;
    bottom:0;
    height: 934px;
    border: 1px solid rgb(230,230,230);
    width: 200px;
    flex-direction: column;
    overflow: visible;
    overflow-y: scroll;
    
    align-items: center;
    box-shadow: -6px 0 16px -8px rgb(0 0 0 / 8%), -9px 0 28px 0 rgb(0 0 0 / 5%), -12px 0 48px 16px rgb(0 0 0 / 3%);
::-webkit-scrollbar {
      width: 7px;
      height: 10px;
      /**/
    }

::-webkit-scrollbar-track {
      background: rgb(239, 239, 239);
      border-radius: 2px;
    }

::-webkit-scrollbar-thumb {
      background: #bfbfbf;
      border-radius: 10px;
    }
    .item-song{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius:10px ;
        width: 80%;
        height: 70px;
        .songinfo{
            .song-name{
                font-size: 10px;
            }
            .singer-name{
                font-size: 10px;
                margin-top: 5px;
            }
        }
        .delete{
            font-size: 16px;
            cursor: pointer;
        }
    }
    .item-song:hover{
        background-color: rgb(230,230,230);
    }
    
}

`
