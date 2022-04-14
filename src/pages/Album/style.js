import styled from "styled-components";

export const AlbumWarpper = styled.div`
display: flex;
position: relative;
top:75px;
margin: 0 auto;
width:1200px;
flex-direction: column;
padding-top: 40px;
padding-bottom: 100px;
.album-head{
    display: flex;
    flex-direction: row;
    .album-img{
        height: 200px;
        width: 200px;
        border-radius: 10px;
    }
    .album-detial{
        position: relative;
        margin-left: 40px;
        font-size: 12px;
        .album-title{
            font-size: 26px;
            font-weight: 700;
            margin-bottom: 10px;

        }
        .description{
            width: 600px;
        }
        .album-creator{
            display: flex;
            flex-direction: row;
            margin-bottom: 10px;
            line-height: 30px;
            .creator{
                margin-left: 10px;
                
            }
            .label{
                margin-left: 40px;

            }
            .creator-img{
                width: 30px;
                height: 30px;
                border-radius: 50%;
            }

        }
        .select-button{
            display: flex;
            position: absolute;
            left: 0;
            bottom: 0;
            .play-all{
                cursor: pointer;
                width: 80px;
                height: 30px;
                line-height: 30px;
                border-radius: 16px;
                text-align: center;
                background-color: rgb(31,208,175);
            }
            .collect{
                cursor: pointer;
                width: 80px;
                height: 30px;
                line-height: 30px;
                border-radius: 16px;
                text-align: center;
                margin-left: 10px;
                background-color: rgb(240,240,240);
            }
            .more{
                height: 30px;
                width: 30px;
                text-align: center;
                line-height: 17px;
                font-size: 18px;
                border-radius: 100%;
                margin-left: 10px;
                background-color: rgb(240,240,240);
            }
        }

    }

}
.Navigate{
    width: 250px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    

    

}


`