import styled from "styled-components";


export const AlbumSonglistwarpper = styled.div`
display: flex;
flex-direction: column;

.songlabel{
    display: flex;
    flex-direction: row;
    margin-top: 30px;

    .songname{
        color: rgb(125,125,125);

    }
    
    .singer{
        color: rgb(125,125,125);
        margin-left: 360px;
    }
    .album{
        color: rgb(125,125,125);
        margin-left: 175px;
    }
    .time{
        color: rgb(125,125,125);
        margin-left: 270px;

    }
}

`