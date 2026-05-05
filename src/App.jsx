import "./index.css";
import Card from "./components/Card";

const App = () => {
    const jobs = [
        {
            brandLogo: "https://logo.clearbit.com/amazon.com",
            company: "Amazon",
            posted: "5 days ago",
            role: "Frontend Engineer",
            tag1: "Part-Time",
            tag2: "Senior Level",
            pay: "$120/hr",
            location: "Mumbai, India"
        },
        {
            brandLogo: "https://logo.clearbit.com/google.com",
            company: "Google",
            posted: "3 weeks ago",
            role: "Backend Developer",
            tag1: "Full-Time",
            tag2: "Mid Level",
            pay: "$150/hr",
            location: "Bangalore, India"
        },
        {
            brandLogo: "https://logo.clearbit.com/meta.com",
            company: "Meta",
            posted: "10 days ago",
            role: "Machine Learning Engineer",
            tag1: "Contract",
            tag2: "Senior Level",
            pay: "$180/hr",
            location: "Hyderabad, India"
        },
        {
            brandLogo: "https://logo.clearbit.com/apple.com",
            company: "Apple",
            posted: "2 weeks ago",
            role: "iOS Developer",
            tag1: "Full-Time",
            tag2: "Junior Level",
            pay: "$95/hr",
            location: "Chennai, India"
        },
        {
            brandLogo: "https://logo.clearbit.com/netflix.com",
            company: "Netflix",
            posted: "1 week ago",
            role: "Frontend Engineer",
            tag1: "Remote",
            tag2: "Senior Level",
            pay: "$200/hr",
            location: "Remote"
        },
        {
            brandLogo: "https://logo.clearbit.com/microsoft.com",
            company: "Microsoft",
            posted: "4 days ago",
            role: "Backend Developer",
            tag1: "Full-Time",
            tag2: "Mid Level",
            pay: "$140/hr",
            location: "Noida, India"
        },
        {
            brandLogo: "https://logo.clearbit.com/adobe.com",
            company: "Adobe",
            posted: "2 months ago",
            role: "UI Engineer",
            tag1: "Full-Time",
            tag2: "Senior Level",
            pay: "$160/hr",
            location: "Bangalore, India"
        },
        {
            brandLogo: "https://logo.clearbit.com/uber.com",
            company: "Uber",
            posted: "6 days ago",
            role: "Backend Developer",
            tag1: "Contract",
            tag2: "Mid Level",
            pay: "$130/hr",
            location: "Pune, India"
        },
        {
            brandLogo: "https://logo.clearbit.com/airbnb.com",
            company: "Airbnb",
            posted: "8 days ago",
            role: "Frontend Engineer",
            tag1: "Remote",
            tag2: "Junior Level",
            pay: "$100/hr",
            location: "Delhi, India"
        }
    ];
    return (
        <div className="parent">
            {
                jobs.map((ele, idx) => {
                    return (
                        <div key={idx}>
                            <Card role={ele.role} company={ele.company} brandLogo={ele.brandLogo} posted={ele.posted} tag1={ele.tag1} tag2={ele.tag2} pay={ele.pay} location={ele.location}></Card>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default App;
