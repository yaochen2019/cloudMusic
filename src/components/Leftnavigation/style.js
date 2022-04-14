import styled from "styled-components";


export  const LeftnavigationWapper = styled.div`
display: flex;
width: 210px;
height: 100%;
position: fixed;
background-color: rgb(246,246,246);
border: 1px ;
flex-direction: column;
align-items: center;
.QQmusic{
  margin-top: 40px;
  display: block;
  width: 50%;
  height: 30px;
  background: url(${require('./QQmusic.png')}) no-repeat;
  background-size:90px 25px ;
  
}
.onlinemusic{

  font-size: 10px;
  margin-top: 30px;
  align-self: flex-start;
  margin-left: 40px;
}
`


export const OnlineMusicWapper = styled.ul`
  display: flex;
  width: 90%;
  height: 20%;
  margin-top: 7px;
  text-align: center;
  flex-direction: column;
  .selectitem{
    flex-grow: 1;
  }
  a{
    display: block;
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    border-radius: 10px;
    .iconcolor{
      margin-left: 25px;
      color: black;
    }
    span{
      margin-left: 10px;
    }

  }
  a:active{
    background-color: rgb(31,208,175);
  }
  
  a:hover{
    background-color: rgb(222,222,222);
  }


  
`
