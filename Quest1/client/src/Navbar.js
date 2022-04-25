import styled from 'styled-components'

const Nav = styled.div`
    background: grey;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
export default function Navbar(){
    return(
        <Nav>
            Logo
            <div style={{marginLeft: 'auto', marginRight:'10px' }}>
                <a style={{color: 'black'}} href='/logout'>Log out</a>
                <a style={{color: 'black'}} href='/cart'>
                    <i className="fa fa-shopping-cart fa-3x" aria-hidden="true"></i>
                </a>
            </div>
      </Nav>
    )
}