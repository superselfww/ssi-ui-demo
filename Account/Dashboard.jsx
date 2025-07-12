import { useEffect, useState } from "react";
import { setPageMeta } from "../../utils/setPageMeta";
import { getUser, isLoggedIn } from "../../utils/auth";
import { clearStorage } from "../../utils/Storage";
import StudentDashboard from "./Student/Dashboard";
import ParentDashboard from "./Parent/Dashboard";
import TeacherDashboard from "./Teacher/Dashboard";
import SelDashboard from "./Sel/Dashboard";
import SchoolDashboard from "./School/Dashboard";

const Dashboard = () => {
    const [userData, setUserData] = useState(null);

    setPageMeta({
        title: 'Dashboard',
        description: 'Your personal dashboard'
    });

    useEffect(()=>{
        if(isLoggedIn() === false) {
            clearStorage();
            window.location.href = '/';
            return;
        }else{
            setUserData(getUser());
        }
    },[])

    useEffect(() => {
        if (!userData) return;

        setPageMeta({
            title: `Welcome ${userData.name}`,
            description: 'Your personal dashboard'
        });
    }, [userData]);

    if(userData?.role === 1){
        return (<StudentDashboard user={userData} />);
    }
    if(userData?.role === 5){
        return (<ParentDashboard user={userData} />);
    }
    if(userData?.role === 4){
        return (<SchoolDashboard user={userData} />);
    }
    if(userData?.role === 2){
        return (<TeacherDashboard user={userData} />);
    }
    if(userData?.role === 3){
        return (<SelDashboard user={userData} />);
    }
}
export default Dashboard;