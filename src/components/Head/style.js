import styled from "styled-components";

export const Headwarpper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 99;
  right: 0;
  top: 0;
  height: 75px;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(77,161,173);
    .headright{
        margin-left: 20px;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .history{
            display: flex;
            align-items: center;
            height: 100%;
            i{
                font-size: 22px;
                margin-left: 18px;
            }
            
        }
        .ant-input-group-wrapper{
            margin-left: 20px;
            
            background-color: rgb(230,230,230);
            border-radius: 15px;
            .ant-input-wrapper{
                border-radius: 15px;
                background-color: rgb(230,230,230);
                position: relative;
                .ant-input-prefix {
                   margin-right: 4px;
                   background-color: rgb(230,230,230);
                   border-radius: 15px;
                }
                .ant-input-affix-wrapper{
                    margin-left: 32px;
                    border-radius: 15px;
                    border-top-left-radius: 0px;
                    border-bottom-left-radius: 0px;
                    background-color: rgb(230,230,230);
                    .ant-input{
                        border-radius: 10px;
                        background-color: rgb(230,230,230);

                    }
                }
            
                .ant-input-group-addon{
                    
                    position: absolute;
                    top:0px;
                    left:0px;
                    width: 0px;
                    border-radius: 15px;
                    border-top-right-radius: 0px;
                    border-bottom-right-radius: 0px;
                    background-color: rgb(230,230,230);
                    .ant-btn{
                        border-radius: 15px;
                        border-top-right-radius: 0px;
                        border-bottom-right-radius: 0px;
                        background-color: rgb(230,230,230);
                    
                        span{
                            border-radius: 15px;
                            background-color: rgb(230,230,230);
                            
                        }

                    }
                    

                }

            

            }
        }

    }
    .headleft{
        margin-right: 20px;
        display: flex;
        height: 100%;
        flex-direction: row;
        align-items: center;
        width: 250px;
        justify-content: space-between;
        span i a {
            flex-grow:1;
        }
    }




`