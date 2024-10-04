import styled from 'styled-components'

export const AppWrap = styled.div`
    width: 100vw;
`

export const MainWrap = styled.div`
    padding: 20px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1080px;

    h1 {
        width: 100%;
        text-align: center;
        font-size: 2.5rem;
        color: #ddd;
        margin-bottom: 20px;
    }
`

export const ProjectButton = styled.button`
    width: 350px;

    &:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
        h3 {
            color: #646cffaa;
        }
    }

    h3 {
        transition: .3s;
        margin-bottom: 50px;
        position: relative;

        &::after {
            content: '';
            display: block;
            width: 10px;
            height: 10px;
            background: white;
            position: absolute;
            border-radius: 50%;
            left: 0;
            top: 7px;
        }
    }
`
