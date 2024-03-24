import countryApp from "../../assets/imagenes/country-app.png";
import todoApp from "../../assets/imagenes/todo-app.png";
import tipCalcApp from "../../assets/imagenes/tip-calc-app.png";
import formApp from "../../assets/imagenes/form-app.png";
//import interactiveFormApp from "../../assets/imagenes/interactive-form-app.png";
import ipTrackerApp from "../../assets/imagenes/ip-address-app.png";
import blogCardApp from "../../assets/imagenes/blog-card-app.png";

const projects = [
    {
        image: countryApp,
        alternative: "App with the basic info of every country",
        id: 1,
        link: "https://country-react-app-fede.netlify.app/",
        repository:"https://github.com/fedemoya1/REST-Country-API?tab=readme-ov-file"
    },
    {
        image: todoApp,
        alternative: "Todo App",
        id: 2,
        link: "https://todo-app-fedemoya.netlify.app/",
        repository: "https://github.com/fedemoya1/Todo-App"
    },
    {
        image: ipTrackerApp,
        alternative: "App that tracks an IP and shows it in a map",
        id: 3,
        link: "https://ip-address-fede.netlify.app/",
        repository:"https://github.com/fedemoya1/IP-Address-Tracker"
    },
    {
        image: formApp,
        alternative:"App Formulario",
        id: 4,
        link:"https://formulario-fede.netlify.app/",
        repository:"https://github.com/fedemoya1/Sign-Up-Form"
    },
    {
        image:tipCalcApp,
        alternative:"Calculadora de Propinas",
        id: 5,
        link:"https://calculadora-propina-fede.netlify.app/",
        repository:"https://github.com/fedemoya1/Tip-Calculator"
    },
    {
        image: blogCardApp,
        alternative: "Card for a Blog",
        id: 6,
        link: "https://blog-preview-card-fedemoya.netlify.app/",
        repository: "https://github.com/fedemoya1/Blog-Preview-Card"
    }/*,
    {
        image: interactiveFormApp,
        alternative: "Interactive Form for a Bank Card",
        id: 7,
        link: "https://interactive-form-fedemoya.netlify.app/",
        repository: "https://github.com/fedemoya1/Interactive-Card-Details-Form"
    }*/
]

export default projects;