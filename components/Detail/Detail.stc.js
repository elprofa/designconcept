import {Row} from 'reactstrap'
import Styled from 'styled-components'

const DetailStc=Styled(Row)`
    .imagaAppercu div {
        width: 90%;
        height: 411px;
        margin: auto !important;
        display: block !important;
        position: relative !important;
        @media (max-width: 476px)         
          {
            height: 280px;
          }
    }
    .imagaAppercu1 div {
        width: 80% !important;
        height: 100px;
        margin: auto !important;
        cursor:pointer;
        @media (max-width: 476px)         
          {
            display:none !important;
          }
    }
`;
export default DetailStc;