import styled from "styled-components";


export const Songplaypagewarpper = styled.div`
display: flex;
width: 1200px;
margin: 0 auto;
flex-direction: row;
height: 600px;
margin-top: 100px;
.song-img{
    width: 400px;
    height: 400px;
    transform: translateY(100px);
    background-color: red;
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
}

`