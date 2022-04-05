import styled from "styled-components";


export const Songwarpper = styled.div`
padding: 8px 0px;
display: flex;
flex-direction: row;
font-size: 14px;
.songfirst{
    display: flex;
    width: 390px;
    justify-content: space-between;
    .selectbutton{
        display: flex;
        i{
            display: none;
            margin-right: 20px;
        }
        i:hover{
            color: rgb(31,208,175);
        }
    }
    .songnamewarpper{
        display: flex;
        width: 270px;
        margin-left: 7px;
        .songname{
            width: 270px;
            margin-left: 10px;
            overflow: hidden;
        }
        i:hover,span:hover{
            color: rgb(31,208,175);
        }
        
    }
    
}
.singer{
    width: 204px;
    
        
    }
.album{
    width: 296px;
        
    }
.time{
        

    }
:hover{
    background-color: rgb(230,230,230);

}
:hover>.songfirst>.selectbutton>i{
    display: flex;
}

`