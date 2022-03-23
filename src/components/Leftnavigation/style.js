import styled from "styled-components";


export  const LeftnavigationWapper = styled.div`
display: flex;
width: 17%;
height: 100%;
position: fixed;
background-color: rgb(85,185,198);
border: 1px ;
flex-direction: column;
align-items: center;
.onlinemusic{
  font-size: 10px;
  margin-top: 40px;
  
}

`



export const SymblWapper = styled.div`
  display: flex;
  width: 80px;
  height: 40px;
  position: relative;
  margin-top: 4px;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  i{
    font-size: 80px;
  }
  
  
  

`

export const OnlineMusicWapper = styled.ul`
  display: flex;
 
  width: 100%;
  height: 30%;
  margin-top: 20px;
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
    text-align: center;
    align-items: center;
    justify-content: center;



  }
  
  a:hover{
    

    background-color: rgb(122,199,209);
  }

  
`
