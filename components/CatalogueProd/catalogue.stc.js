import styled from "styled-components";
import { Container } from 'reactstrap';

const ContainerStyle = styled(Container)`

    .ranger-un {
        display: flex;
    }

    .ranger-unArticle {
    width: 80%;
    height: auto;

    }
    .textDetails {
        color: green;
        font-size: 13px;
    }
    .prix {
        color: red;
    }
    .details {
        color: black;
    }
`;

export default ContainerStyle;