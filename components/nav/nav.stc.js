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
        height: 140px;
    }
    .afterHeader h1
    {
        font-size: 4.5rem;
        color: #fff;
        font-weight: 100;
        font-family: system-ui;
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
        padding-bottom: 10px;
    }
    .navbar
    {
        background: transparent !important;
        font-weight: 600px;
        font-family: 'Franklin Gothic Medium', 
                    'Arial Narrow', 
                    Arial, sans-serif;
        font-size: 18px;
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
        font-family: system-ui;
        font-weight: 600;
    }
    .mx-1
    {
        margin-right:20px !important;
    }
    .afterHeader.row img
    {
        @media (max-width: 963px)         
        {
            height: 25px !important;
        }
        
    }

    .afterHeader.row div {
        width: 50% !important;
        @media (max-width: 963px)         
        {
            width: 200px !important;
        }
       
    }
`;
export default NavBarStc;