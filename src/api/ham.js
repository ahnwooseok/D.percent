import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  container: {
    // background: "linear-gradient(315deg, #b1bfd8 0%, #667eaa 74%)",   //배경

  },
  wrapper: {
    padding: "10px 164px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    width: "40px",
  },
  hamburber: {
    width: "30px",
    height: "3px",
    background: "#fff",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgb(255, 101, 47,.2)",
    transition: "all 0.5s ease-in-out",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#fff",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "translateY(-10px)",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#fff",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "translateY(10px)",
    },
  },
  activeHamburger: {
    width: "30px",
    height: "3px",
    borderRadius: "5px",
    transform: "translateX(-50px)",
    background: "transparent",
    transition: "all 0.5s ease-in-out",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#fff",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "rotate(45deg) translate(35px, -35px)",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#fff",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "rotate(-45deg) translate(35px, 35px)",
    },
  },
  sidenav: {
    position: "fixed",
    width: "100%",
    height: "100vh",
    // background: "linear-gradient(150deg, #b1bfd8 0%, #667eaa 74%)",    //들어갈때 배경
    // background:"#000000",
    transform: "translateX(100%)",
    transition: "all 0.5s ease-in-out",
  },
  activeSidenav: {
    position: "fixed",
    width: "100%",
    height: "100vh",
    // background: "linear-gradient(150deg, #b1bfd8 0%, #667eaa 74%)",        //나올때 배경
    // background:"#000000",
    transform: "translateX(50%)",
    transition: "all 0.5s ease-in-out",
  },
  ul: {
    listStyleType: "none",
    "& li": {
      paddingLeft: "60px",
      paddingTop:"20px"
    },
  },
  a: {
    margin: "200px 0",
    color: "white",
    textDecoration: "none"
  },
}));

const data = [
  { name: "Home", path: "/" },
  { path: '/about', name: 'About' },
  // { path: '/project', name: 'Project' },
  { path: '/recruitment', name: 'Recruitment' },
  { path: '/contact', name: 'Contact' },
];
const ham = () => {
  const classes = useStyles();
  const [active, setActive] = useState(false);
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          {/*<img src="./mob-logo.png" alt="logo" className={classes.img} />*/}


          <div onClick={() => setActive(!active)}>
            <div
              className={active ? classes.activeHamburger : classes.hamburber}
            />
          </div>
        </div>
      </div>
      <div className={active ? classes.activeSidenav : classes.sidenav}>
        <ul className={classes.ul}>
          {data.map((item, i) => (
            <li key={i}>
              <a href={item.path} className={classes.a}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ham;
