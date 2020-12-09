import styled from 'styled-components'

// Start-Content
export const ContentDetail = styled.div``
export const TextTitle = styled.h2``
export const InputDevice = styled.input`
  width: 50%;
  margin: 10px 0;
  padding: 5px 10px;
  height: 20px;
  border: solid 3px black;
  outline: none;
  &:focus {
    border: 1px solid #0c1737;
  }
`
export const ContentMinMax = styled.div``
export const ContentSelect = {}
// export const customStyles = {
//   option: (provided, state) => ({
//     ...provided,
//     borderBottom: '2px #000',
//     color: state.isSelected ? 'red' : 'blue',
//     marginBottom: '5%',
//     paddingBottom: '20%',
//     fontSize: '30px'
//   }),
//   // css select
//   control: () => ({
//     // none of react-select's styles are passed to <Control />
//     width: 450,
//     fontSize: '20px'
//   })
//   // singleValue: (provided, state) => {
//   //   const opacity = state.isDisabled ? 0.5 : 1
//   //   const transition = 'opacity 300ms'

//   //   return { ...provided, opacity, transition }
//   // }
// }

// End-Content

// Start-Footer
export const FooterDevice = styled.div``
export const ButtonAdd = styled.button`
  display: flex;
`
// End-Footer
