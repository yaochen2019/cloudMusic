import styled from "styled-components";
 
export const RecommendWarpper = styled.div`
display: flex;
position: relative;
top:50px;
margin: 0 auto;
width:1200px;
flex-direction: column;
background-color: green;

padding-bottom: 100px;
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
  }
  .recommend-title{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .new-song{
        display: flex;
        flex-direction: row;
        text-align: center;
        .select-button{
          margin-left: 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          a{
            color: rgb(222,241,244);
            margin-left: 20px;
          }
          a:hover{
            color:rgb(31,208,175);
          }
        }
      }
      
      span{
        height: 100%;
        text-align:center;
      }
      .title{
        font-size: 30px;
      }
    }

}
  
`