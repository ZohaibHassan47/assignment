import React from "react";
import { Button } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const CustomToolbar: React.FC = () => {
    return (
        <div>
            <Button sx={{ textTransform: "none", color: "black" }} startIcon={<CalendarMonthIcon />}>
                Monthly
            </Button>
            <Button startIcon={<CalendarMonthIcon />}>Weekly</Button>
            <Button startIcon={<CalendarMonthIcon />}>Daily</Button>
        </div>
    );
};

export default CustomToolbar;
