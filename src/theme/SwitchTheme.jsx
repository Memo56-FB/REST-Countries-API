import React from 'react'

export default function SwitchTheme() {
    let clickedClass = "clicked";
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;

    if(localStorage){
        theme = localStorage.getItem("theme");
    }

    if(theme === lightTheme || theme === darkTheme){
        body.classList.add(theme);
    }else{
        body.classList.add(darkTheme);
    }

    const switchTheme = (e)=>{
        if(theme === darkTheme){
            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme","light");
            theme = lightTheme;
        }else{
            body.classList.replace(lightTheme,darkTheme);
            e.target.classList.add(clickedClass);
            localStorage.setItem("theme","dark");
            theme = darkTheme;
        }
    }

    return (
        <button
            className={theme === "dark" ? clickedClass: ""}
            id="darkMode"
            onClick={(e) => switchTheme(e) }
        >
            <ion-icon name="moon"></ion-icon> 

        </button>
    )
}
