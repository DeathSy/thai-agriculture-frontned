import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  width: 100%;
  z-index: 1000;
  background-color: #ffff;
  position: fixed;
  color: #fff;
  box-shadow: 4px 4px 6px 2px rgba(0, 0, 0, 0.2);
  font-family: 'Signika', sans-serif;
`

export const ActionContainer = styled.div`
  width: 50%;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin: 0 2rem;
`
export const Action = styled.div`
  width: 200px;
  height: 50px;
  font-size: 20px;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  background-color: #10c18b;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  :hover {
    background-color: #00a472;
  }
`
