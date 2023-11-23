import './Header.css'
import NavigationItem from "../NavigationItem";

const Header = () => {
    return (
        <div className="common-header"> 
            <NavigationItem text='First elem' isUppercaseText={true}/>
            <NavigationItem text='Second elem' isUppercaseText={true}/>
            <NavigationItem text='Third elem' isUppercaseText={true}/>
            <NavigationItem text='Fourth elem' isUppercaseText={true}/>
        </div> 
    );
}

export default Header;
