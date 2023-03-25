import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import MyPosts from "./components/MyPosts/MyPosts";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import s from "./components/Dialogs/Dialogs.module.css";




function App(): JSX.Element {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Dialogs />
            </div>
            {/* <Profile />*/}

        </div>

    );
}

export default App;
