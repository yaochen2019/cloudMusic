import styled from "styled-components";


export const SonglistWarpper = styled.div`
position: relative;
width: ${props => props.width};
height: ${props => props.height};
.cover-top{
    margin-top: 15px;
    position: relative;
    width: 200px;
    height: 200px;
    transition: all 0.3s;
    .playbutton{
        display: none;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        color: white;
        .buttonicon{
            font-size: 60px;           
        }

    }
    .playbutton:hover{
        color: rgb(31,207,161);

    }

    .palycount{
        position: absolute;
        right: 2px;
        bottom: 0px;
        border-radius: 5px;
        i{
            color: white;
        }

    }
}
img{ 
    width: 200px;
    height: 200px;
    border-radius: 15px;
}
.mask{
    display: none;
    overflow: visible;
    position: absolute;
    top: 0px;
    width: 200px;
    height: 200px;
    border-radius: 15px;
    background-color:rgba(0,0,0,0.3);
}
.cover-top:hover .mask,.mask:hover{
    display: block;
    cursor: pointer;
}
.cover-top:hover{
    transform: translateY(-15px);

}
.cover-top:hover .playbutton{
    display: block;

}
.cover-bottom{
    width: 200px;
    position: absolute;
    bottom: 10px;

}
.cover-bottom:hover{
    color: rgb(31,208,175);

}
`