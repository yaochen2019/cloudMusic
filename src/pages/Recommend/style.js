import styled from "styled-components";
 
export const RecommendWarpper = styled.div`
display: flex;
position: relative;
top:50px;
margin: 0 auto;
width:1200px;
flex-direction: column;
background-color: green;
.recommend{
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 100%;
  .recommend-list{
    
    width: 100%;
    display: flex !important;
    justify-content: space-between;
    flex-direction: row;
    content: normal;
  }
  .recommend-title{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      h2{
        font-size: 25px;
      }
    }

}
  
`