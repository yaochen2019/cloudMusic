import styled from "styled-components";
 
export const SearchWarpper = styled.div`
display: flex;
position: relative;
top:75px;
margin: 0 auto;
width:1200px;
flex-direction: column;
margin-bottom: 200px;
.title{
    font-size: 32px;
    font-weight: 900;
    margin: 20px 0;
}
.category{
    padding: 5px 0;
    color: #000;
    display: flex;
    flex-direction: row;
    li{
        border-bottom: solid white;
        margin-right: 40px;
        a{
            border-bottom: solid white;
            color:black;
            text-decoration: dashed;
        }
    }
    li:hover,a:hover{
        color: rgb(31,208,175);
        border-bottom: solid rgb(31, 207, 161);


    }
    
}
.buttonlist{
    display: flex;
    .playall,.download,.addlist{
        font-size: 12px;
        text-align: center;
        width: 110px;
        height: 30px;
        line-height: 30px;
        border-radius: 17px;
        margin-right: 12px;
        span{
            color: #000;
        }
    }
    .playall{
        cursor: pointer;
        background-color: rgb(31,208,175);
    }
    .download,.addlist{
        cursor: pointer;
        background-color:rgb(230,230,230);
    }

    
    
}


`