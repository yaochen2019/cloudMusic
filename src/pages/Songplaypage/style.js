import styled from "styled-components";


export const Songplaypagewarpper = styled.div`
display: flex;
width: 1200px;
margin: 0 auto;
flex-direction: row;
height: 600px;
margin-top: 100px;
background-color: rgb(255,255,255);
.song-img{
    width: 400px;
    height: 400px;
    border-radius: 16px;
    transform: translateY(100px);
}
.show-song{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 750px;
    align-items: center;
    .title{
        font-size: 30px;
        font-weight: 700;
    }
    .song-info{
        display: flex;
        width: 300px;
        margin-top: 30px;
        flex-direction: row;
        justify-content: space-between;
    }
    .song-words{
        display: flex;
        width: 100%;
        flex-direction: column;
        overflow-y: scroll;
        align-items: center;
        
        .song-word{
            margin-top: 20px;
        }
    
    }
    .song-words::-webkit-scrollbar {
      width: 7px;
      height: 10px;
      /**/
    }

    .song-words::-webkit-scrollbar-track {
      background: rgb(239, 239, 239);
      border-radius: 2px;
    }

    .song-words::-webkit-scrollbar-thumb {
      background: #bfbfbf;
      border-radius: 10px;
    }
    
}


`