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
    console.log(ChoiceYN());
}

screen1()