import styled from "styled-components";

 const NavBarStc = styled.section`
    .sectionHeader
    {
        border-bottom:1px solid #f3f3f3;
        border-bottom: 1px solid #f3f3f3;
        background: #e6e6e6;
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
`;
export default NavBarStc;