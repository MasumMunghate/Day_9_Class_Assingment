const selectors = document.querySelectorAll(".selectors");
const changeDiv = document.getElementById("changeDiv");



selectors.forEach(function(select_DropDown_Options){
    select_DropDown_Options.addEventListener("click" , function(e){
        console.log(e.currentTarget.classList,"How many Classes Are Present")
        let styles  = e.currentTarget.classList;

        if(styles.contains("Colors")){
            changeDiv.style.color = selectors[0].value;
            console.log(selectors[0].value,"Colores Value");
        }
        else if(styles.contains("bg_Colors")){
            changeDiv.style.backgroundColor = selectors[1].value;
            console.log(selectors[1].value,"BackGround Color Value");
            console.log("bgcolor Select");
        }
        else if(styles.contains("paddings")){
            changeDiv.style.padding = selectors[2].value;
            console.log(selectors[2].value,"Padding Value");
        }
        else if(styles.contains("font_sizes")){
            changeDiv.style.fontSize = selectors[3].value;
            console.log(selectors[3].value,"Font Size  Value");
        }
        else {
            changeDiv.style.fontWeight = selectors[4].value;
            console.log(selectors[4].value,"Font Weight Value");
        }
    })
})