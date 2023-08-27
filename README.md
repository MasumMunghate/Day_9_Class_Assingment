# Day_9_Class_Assingment

The code begins by getting references to specific HTML elements on the page. It selects all elements with the class "selectors" and stores them in the selectors variable. It also selects the element with the id "changeDiv" and stores it in the changeDiv variable.

The .forEach() method is used to loop through each element in the selectors collection. For each element, it attaches a function to be executed when that element is clicked.

Inside the click event function, the class list of the clicked element is retrieved using e.currentTarget.classList. The class list contains the classes applied to the element.

The code checks which class is present in the class list using .contains(). Depending on the class present, it applies specific styles to the changeDiv element.

If the class is "Colors," it sets the text color of changeDiv to the color value selected from the dropdown.

If the class is "bg_Colors," it sets the background color of changeDiv to the color value selected from the dropdown.

If the class is "paddings," it sets the padding of changeDiv to the padding value selected from the dropdown.

If the class is "font_sizes," it sets the font size of changeDiv to the font size value selected from the dropdown.

If none of the above classes are present, it sets the font weight of changeDiv to the font weight value selected from the dropdown.

At each step, the selected value is logged to the console.
