import styled,  { css } from 'styled-components';


// creamos las características que tendrá el boton utilizando las comillas (``)
const StyledButton = styled.button
`background-color:lightslategrey;

/*color: salmon;lo sustituimos por */
color:${props =>props.colorTexto === 'dark'? 'salmon':'white'};

font-size: 25px;
border-color: salmon;
margin: 14px;
padding:10px;
/* como le aplicamos varios estilos a la vez lo ponemos abajo para tener el codigo bien estructurado */
${({primary}) =>{
    /* si se cumple el caso de k existre la propiedad primary aplicare lo que este dentro del return */
    if(primary){
        return css`
         background-color: darkslategray;
         border: darkred;
         border: 3px solid rebeccapurple;
         font-size: 30px;
        
        
        `
    }
}}
/* 2ºopcion sin el if
 ${({primary}) =>
 primary && css 
 `background-color: darkslategray;
  border: darkred;
  border: 3px solid rebeccapurple;    
  font-size: 30px;
`}
 */
/* para hacer efecto al pasar el raton */
&:hover{
    color: pink;
    border: 4px solid midnightblue;

}`

const BotonEstiloso = ({children, colorTexto, primary})=> {
 return <StyledButton colorTexto = {colorTexto} primary = {primary}>{children}</StyledButton>
}
export default BotonEstiloso;