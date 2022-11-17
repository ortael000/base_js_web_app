let select_button = document.getElementById("select_test")

select_button.addEventListener("change",(event) => {
    test = select_button.value;
    console.log(test)
    console.log(typeof test)
});