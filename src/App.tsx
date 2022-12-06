import React from "react";
import MyCalendar from "./components/BigCalendar";
import CustomToolbar from "./components/CustomToolbar";

function App() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>Testing</h1>
            <CustomToolbar />
            <MyCalendar />
        </div>
    );
}

export default App;
