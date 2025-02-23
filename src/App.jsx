import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
// import LoginPage from './account/LoginPage';
import TaskList from './task1/taskList';
import Task2 from './task2/task2';
import GuessGame from './task3/GuessGame';

// import ChatRoomRouter from './page/ChatRoomRoutes.jsx';

const App = () => {
    return (

        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/task1" element={<TaskList />} />
                    <Route path="/task2/*" element={<Task2 />} ></Route>
                    <Route path="/task3/*" element={<GuessGame />} />
                        {/* <Route path="create-product" element={<CreateProduct />} />
                        <Route path="product/" element={<CreateProduct />} />
                        <Route path="cart" element={<Settings />} /> */}
                    {/* </Route> */}
                </Routes>

    
            </main>
            <Footer />
        </Router>


    );
};

export default App;

