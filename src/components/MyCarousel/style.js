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
    bottom: -30px;
    li{
        margin-left: 10px;
        height: 10px;
        border-radius:50%;
        width: 10px !important;
        background-color: black;
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