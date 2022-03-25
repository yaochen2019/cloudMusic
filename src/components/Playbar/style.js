import styled from "styled-components";



export const Bottomwarpper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 99;
  left: 17%;
  right: 0;
  bottom: 0;
  height: 80px;
  background-position: 0 0;
  background-repeat: repeat;
  overflow: visible;
.ant-slider{
    
    z-index: 999;
    position: relative;
    left: -6px;
    top: 10px;
}
`
export const PlaybarWarpper = styled.div`
height: 52px;
position: relative;
top: 0;
display: flex;
flex-direction: row;
background-color: rgb(77,161,173);
font-size: 5px;
.img{
    margin-left: 30px;
   background-color: red;
    flex-grow: 0.4;
}
.songinfowarpper{
    display: flex;
    align-items: center;
    flex-direction: column;  
    flex-grow: 0.25;
    .songinfo{
        margin-left: -15px;
        flex-grow: 1;    
    }
    .smallicon{
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        li{
           
            padding-left: 10px;
        }
    }
}
.playbutton{
    height: 100%;
    display: flex;
    font-size: 20px;
    position: relative;
    flex-direction: row;
    align-items: center;
    flex-grow: 3;
    margin-left: 270px;
    li{
        
        padding: 5px;  
        
    }
}
`