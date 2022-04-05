import styled from "styled-components";


export const CommentWarpper = styled.div`


.textarea{
    width: 100%;
    height: 100px;
    border-color: rgb(230,230,230);
    outline: none;
    

}
.textarea-btn{
    height: 30px;
    line-height: 30px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    .btn-left{
        display: flex;
        flex-direction: row;
        font-size: 20px;
        width: 50px;
        justify-content: space-between;
        .btnclick{
        color: rgb(125,125,125);
        }
        .btnclick:hover{
            color:rgb(31,208,175);
        }
        
    }
    
    .commentclick{
        font-size: 12px;
        color: rgb(0,0,0);
        width: 60px;
        border-radius: 16px;
        border: 2px solid rgb(230,230,230);
    }
    .commentclick:hover{
        color:rgb(31,208,175);
    }
    
    
}


`