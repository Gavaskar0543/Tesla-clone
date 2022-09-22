
import React,{useState} from 'react'
import styled from "styled-components"
import { Menu as MenuIcon } from "@material-ui/icons"
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from '../features/Car/CarSlice';
import {useSelector} from 'react-redux';




function Header() {
 
  const[burgerStatus,setBurgerStatus]=useState(false);
  
  const cars =useSelector(selectCars)
  return (
  <Container>
   <a>
    <img src="/images/logo.svg"/>
  </a>
  <Menu>

    {cars &&cars.map((car,index)=>(
      <a key={index} href="#">{car}</a>
     ))}

  </Menu>
  <RightMenu>
<a href="#">shop</a>
<a href="#">Account</a>
     <CustomMenu onClick={()=>setBurgerStatus(true)} />
  </RightMenu>
    <BurgerNav show={burgerStatus}>
      <CloseWraper>
       <CustomClose onClick={()=>setBurgerStatus(false)}/>
      </CloseWraper>
   
      {cars &&cars.map((car,index)=>(
      <li  key={index}><a href="#">{car}</a></li>
     ))}
      <li><a href="#">Used Inventory</a></li>
      <li><a href="#">Trade-in</a></li>
      <li><a href="#">Cybertruck</a></li>
     </BurgerNav>
  </Container>
  )
}

export default Header
const Container=styled.div`
z-index:1;
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 20px;
top:0;
left:0;
right:0;
`
const Menu=styled.div`
display:flex;
justify-content:center;
align-items:center;
flex:1;



a{
  font-weight:600;
  text-transform:uppercase;
  padding:0 10px;
  flex-wrap:no-wrap;

}
@media(max-width:786px){
  display:none;
}
`
const RightMenu=styled.div`
display:flex;
align-items:center;
a{
  font-weight:600;
  text-transform:uppercase;
  padding:0 10px;
  margin-right:10px;
  flex-wrap:no-wrap;

}
`
const CustomMenu=styled(MenuIcon)`
cursor:pointer;

`
const BurgerNav=styled.div `
position:fixed;
top:0;
bottom:0;
right:0;
background-color:white;
width:300px;
z-index:16;
padding:20px;
list-style:none;
display:flex;
flex-direction:column;
text-align:start;
transform:${props=>props.show ? 'translateX(0)':'translateX(100%)'};
transition:transform 0.2s;
li{
  padding:15px 0;
  border-bottom:1px solid rgba(0,0,0,.2);
}
a{
  font-weight:600;
}
`

const CustomClose=styled(CloseIcon)`
cursor:pointer;

`
const CloseWraper=styled.div`
display:flex;
justify-content:flex-end;
`
