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

     a 
    {
        text-transform:uppercase !important;
        font-family: -webkit-pictograph;
        font-weight: 700;
    }
    .mx-1
    {
        margin-right:20px !important;
    }
`;
export default NavBarStc;