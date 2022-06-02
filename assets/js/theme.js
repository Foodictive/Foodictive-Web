// const content = document.getElementsByTagName("body")[0];
// const navbar = document.getElementsByTagName("nav")[0];
const foot = document.getElementsByTagName("step1")[0];
const Step1 = document.getElementById("step1");
const Step2 = document.getElementById("step2");
const Step3 = document.getElementById("step3");
const Step4 = document.getElementById("step4");
const Step5 = document.getElementById("step5");

function showall() {
    if (Step1.style.display === "none" || Step2.style.display === "none" || Step3.style.display === "none" || Step4.style.display === "none" || Step5.style.display === "none") {
        Step1.style.display = "block";
        Step2.style.display = "block";
        Step3.style.display = "block";
        Step4.style.display = "block";
        Step5.style.display = "block";
    }else{
        Step1.style.display = "none";
        Step2.style.display = "none";
        Step3.style.display = "none";
        Step4.style.display = "none";
        Step5.style.display = "none";
    }
}

function show1() {
    if (Step2.style.display === "block" || Step3.style.display === "block" || Step4.style.display === "block" || Step5.style.display === "block") {
        Step2.style.display = "none";
        Step3.style.display = "none";
        Step4.style.display = "none";
        Step5.style.display = "none";
    }
    if (Step1.style.display === "none") {
        Step1.style.display = "block";
        Step2.style.display = "none";
        Step3.style.display = "none";
        Step4.style.display = "none";
        Step5.style.display = "none";
    } else {
        Step1.style.display = "none";
    }
}

function show2() {
    if (Step1.style.display === "block" || Step3.style.display === "block" || Step4.style.display === "block" || Step5.style.display === "block") {
        Step1.style.display = "none";
        Step3.style.display = "none";
        Step4.style.display = "none";
        Step5.style.display = "none";
    }

    if (Step2.style.display === "none") {
        Step2.style.display = "block";
        Step1.style.display = "none";
        Step3.style.display = "none";
        Step4.style.display = "none";
        Step5.style.display = "none";
    } else {
        Step2.style.display = "none";
    }
}

function show3() {
    if (Step2.style.display === "block" || Step1.style.display === "block" || Step4.style.display === "block" || Step5.style.display === "block") {
        Step2.style.display = "none";
        Step1.style.display = "none";
        Step4.style.display = "none";
        Step5.style.display = "none";
    }

    if (Step3.style.display === "none") {
        Step3.style.display = "block";
        Step2.style.display = "none";
        Step1.style.display = "none";
        Step4.style.display = "none";
        Step5.style.display = "none";
    } else {
        Step3.style.display = "none";
    }
}

function show4() {
    if (Step2.style.display === "block" || Step3.style.display === "block" || Step1.style.display === "block" || Step5.style.display === "block") {
        Step2.style.display = "none";
        Step3.style.display = "none";
        Step1.style.display = "none";
        Step5.style.display = "none";
    }

    if (Step4.style.display === "none") {
        Step4.style.display = "block";
        Step2.style.display = "none";
        Step3.style.display = "none";
        Step1.style.display = "none";
        Step5.style.display = "none";
    } else {
        Step4.style.display = "none";
    }
}

function show5() {
    if (Step2.style.display === "block" || Step3.style.display === "block" || Step4.style.display === "block" || Step1.style.display === "block") {
        Step2.style.display = "none";
        Step3.style.display = "none";
        Step4.style.display = "none";
        Step1.style.display = "none";
    }
    if (Step5.style.display === "none") {
        Step5.style.display = "block";
        Step2.style.display = "none";
        Step3.style.display = "none";
        Step4.style.display = "none";
        Step1.style.display = "none";
    } else {
        Step5.style.display = "none";
    }
}


