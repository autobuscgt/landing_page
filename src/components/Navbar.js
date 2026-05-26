import Switch from "./Switch";

function NavigationBar() {
    return ( 
        <div>
        <div className="nagivation-container">
            <div className="logo-container">
                <h1>Logo</h1>
            </div>
            <div className="nagivation-container-list">
                <ul>
                    <li>Проекты</li>
                    <li>Скилы</li>
                    <li>Ссылки</li>
                </ul>
            <Switch/>
            </div>
        </div>
        </div>
        
     );
}

export default NavigationBar;