import { useRouter } from 'next/router';
import NavigationBarButton from '../NavigationBarButton';
import Logo from '../Logo';

import { Wrapper } from './styles';
import useIsMobile from "../../hooks/useIsMobile";
import { useEffect } from "react";
import Ham from "../../api/ham";


const routes = [
  { path: '/about', name: 'About' },
  // { path: '/project', name: 'Project' },
  { path: '/recruitment', name: 'Recruitment' },
  { path: '/contact', name: 'Contact' },
];

function NavigationBar() {

  let mob = useIsMobile();
  useEffect(()=>{
    console.log(mob);
  },[mob]);


  const router = useRouter();

  return (
    mob ?
      <Wrapper>
        <Ham></Ham>
      </Wrapper>
    :


    <Wrapper>
      <Logo />
      {routes.map(({ path, name }) => (
        <NavigationBarButton selected={router.pathname === path} href={path} key={path}>
          {name}
        </NavigationBarButton>
      ))}
    </Wrapper>
  );

  // return(
  //     <Wrapper>
  //       <Logo />
  //       {routes.map(({ path, name }) => (
  //         <NavigationBarButton selected={router.pathname === path} href={path} key={path}>
  //           {name}
  //         </NavigationBarButton>
  //       ))}
  //     </Wrapper>
  // );
}

export default NavigationBar;
