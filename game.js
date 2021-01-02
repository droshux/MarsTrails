// JavaScript source code
function screen1() {
    Output("Welcome to MARS TRAILS")
    OutputRaw("<br>")
    Input("Please enter your name:")
    OutputRaw("<br>")
    var Username = ""
    Button("Submit", "screen2()")
}
function screen2() {
    Username = Submit(0);
    ClearScreen();
    Output(`Welcome ${Username}`);
    ImageInsert("Mars-Test-image", "100px", "100px");
    Button("Next Page", "screen3()")
}
function screen3() {
    ClearScreen()
    var result;
    window.MyInputReader = new InputListener(Input("Input test 1:"));
    Button("Enter...", "window.MyInputReader.getData()");
    var searching = setInterval(function () {
        if (window.MyInputReader.data != "") {
            clearInterval(searching);
        }
    }, 10);
    result = window.MyInputReader.data;
    Output(result);
}

screen3();