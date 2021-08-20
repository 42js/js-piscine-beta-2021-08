import { css} from '@emotion/react'

const reset = css`
    * {
        box-sizing: border-box;
        font-family: Apple SD Gothic Neo, Malgun Gothic, san-serif;
    }
    .App {
        display: block;
        @media (min-width: 420px) {
            display: flex;
        }
    }
    .menu {
        background:gray;
        width: 100%;
        @media (min-width: 420px) {
            width: 15%;
        }
        padding:1em;
    }
    .page_body {
        width:100%;
        margin-left:0rem;
        @media (min-width: 420px) {
            width: 85%;
            margin-left:1rem;
        }
        flex-direction:row;
    }
    .header {
        color: hotpink;
        background-color: gray;
    }
    .maincontent {
        background-color: gray;
    }
`;

export default reset;