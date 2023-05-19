import React from "react";

export interface ISurveyProps {
    css: any;
    json: any;
    data: any;
    onComplete: (survey: any) => void;
}