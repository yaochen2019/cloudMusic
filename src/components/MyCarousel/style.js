import styled from "styled-components";


export const MyCarouselWarpper = styled.div`
margin-top: 50px;
position: relative;
width: 100%;
.content{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
        .MyCarouselplay{
          width: 576px;  
          border-radius: 15px;
          color:#fff;
          text-Align:center;
        }
}
.slick-dots{
    height: 10px;
    position: absolute;
    bottom: -25px;
    li{
        height: 10px;
        border-radius:50%;
        width: 10px !important;
        button{
          height: 10px;
          border-radius:50%;
          width: 10px !important;
        }
    }
    li:hover button:hover{
        background-color: rgb(85,217,183);
    }
   
}
`