import styled from 'styled-components'

export const Layout = styled.div`
display: flex;
flex: 1;
flex-direction: row;
flex-wrap: wrap;
height:100vh;
`

export const Column = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: 0px;
  padding: 16px;	  padding: 16px;
  display: flex;	  display: flex;
  justify-content: center;	  justify-content: center;
  align-items: center;	  align-items: center;
  flex: 1;	  flex: 1;
  flex-direction: column;	  flex-direction: column;
  box-sizing:border-box;	  box-sizing:border-box;
  max-height: 90vh;	  color: white;
  max-height: 100vh;
  background-color: #2a2b30;
`