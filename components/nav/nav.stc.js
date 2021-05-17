import styled from "styled-components";

 const NavBarStc = styled.section`

    .container 
    {
        @media (max-width: 476px)         
        {
            padding:0px !important;
        }
    }
    .sectionHeader
    {
        border-bottom:1px solid #f3f3f3;
        border-bottom: 1px solid #f3f3f3;
        background: #fff;
        height: 120px;
    }
    .afterHeader h1
    {
        color: #fff;
        font-weight: 100;
        span
        {
            font-weight:600;
        }

        @media (max-width: 767px)         
        {
            font-size:30px;
            text-align:center;
        }
    }
    .sectionHeader1
    {
        padding: 20px;
        background: #000;
    }
    .navbar
    {
        background: transparent !important;
        font-weight: 600px;
        font-family: 'Franklin Gothic Medium', 
                    'Arial Narrow', 
                    Arial, sans-serif;
        font-size: 16px;
        border-radius: 10px;
    }
    .navbar:hover
    {
        background: none !important;
        transition: 1s;
    }
    .navlink{
        color: #42210b;
        text-transform: uppercase;
        font-family: 'Verdana', 
                    'Arial Narrow', 
                    Arial, sans-serif;
        font-weight: 800px;
    }
    .navlink:hover {
        color: orange;
        transition: .4s;
    }
    .navlink::after{
        content:'';
        display: block;
        width: 0;
        height: 2px;
        background: red;
        transition: width .4s;
    }
    .navlink:hover::after {
        width: 100%;
        transition: width .8s;
    }
`;
export default NavBarStc;