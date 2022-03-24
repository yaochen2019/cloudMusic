import styled from "styled-components";

export const Headwarpper = styled.ul`
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 99;
  left: 17%;
  right: 0;
  top: 0;
  width: 83%;
  height: 50px;
  align-items: center;
  background-color: rgb(77,161,173);
  .forwardbackwarpper{
      height: 40px;
      display: flex;
      margin-left: 10px;
      flex-grow: 1.5;
    
      align-items: center;
      justify-content: center;
      i{
          margin-left: 10px;
          font-size: 20px;
          margin-right: 5px;
      }

      
  }
  .search{
    width: 200px;
    height: 32px;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-left: 0px;
    position: relative;
    flex-grow: 2;
    
    .searchinput{
        background-color: rgb(94,170,181);
        border-radius: 16px;
        input{
            background-color: rgb(94,170,181);
            &::placeholder{
                font-size: 10px;
            }
        }

    }
            
  }
  .topbarright{
      display: flex;
    
      margin-left: 300px;
      flex-grow: 4;
      align-items: center;
      justify-content: center;
      i,a,span{
          flex-grow: 1;
         
      }
      a{
          color: white;
      }
      span{
          margin-bottom: 5px;
          color: black;
      }
      
  }

`