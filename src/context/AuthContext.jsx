import { createContext,useState,useContext } from "react";
export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({children}) => {

    const [input,setInput] = useState({
        name:"",
        email:"",
        year:"",
        company:"",
        linkedin:"",
        file:"",
        type:"",
    });

    const companies =["All","Google", "Microsoft", "Apple", "Amazon", "Facebook", "Tesla", "Netflix", "Adobe", "IBM", "Intel",
    "Oracle", "Samsung", "Sony", "Nvidia", "Cisco", "Qualcomm", "Salesforce", "PayPal", "Spotify", "Uber",
    "Airbnb", "Dropbox", "Snap", "Zoom", "Slack", "Square", "Twitter", "Pinterest", "eBay", "Alibaba",
    "Tencent", "Baidu", "Hewlett-Packard", "Dell", "Lenovo", "Xiaomi", "Huawei", "ASUS", "LG", "Nokia",
    "Shopify", "Atlassian", "VMware", "LinkedIn", "Reddit", "TikTok", "GitHub", "Stripe", "SpaceX", "Epic Games"];

    const Experience = [
        {
            name:"Ragul",
            company:"Amazon",
            year:"2021",
            file:"https://www.youtube.com/watch?v=Ts3kTbdQ_4U&t=19s",
            type:"Placement",
        },
        {
            name:"selva",
            company:"Google",
            year:"2020",
            file:"https://www.youtube.com/watch?v=Ts3kTbdQ_4U&t=19s",
            type:"Intern",
        },
        {
            name:"Ragul",
            company:"Microsoft",
            year:"2021",
            file:"https://www.youtube.com/watch?v=Ts3kTbdQ_4U&t=19s",
            type:"Placement",
        },
        {
            name:"selva",
            company:"Google",
            year:"2020",
            file:"https://www.youtube.com/watch?v=Ts3kTbdQ_4U&t=19s",
            type:"Intern",
        },
        {
            name:"selva",
            company:"Google",
            year:"2020",
            file:"https://www.youtube.com/watch?v=Ts3kTbdQ_4U&t=19s",
            type:"Intern",
        },
    ]

    return <AuthContext.Provider value = {{companies,Experience,input,setInput}}>
        {children}
        </AuthContext.Provider>
}