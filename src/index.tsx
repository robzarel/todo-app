import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'

import './index.css';

import store from './redux/store';

import reportWebVitals from './reportWebVitals';

import TodosPage from './pages/todos';
import AboutPage from './pages/about';
import DashboardPage from './pages/dashboard';
import NotFountPage from './pages/not-found';

import Navigation from './components/navigation';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<Navigation />
				<Routes>
					<Route path="/" element={ <TodosPage /> }/>
					<Route path="/about" element={ <AboutPage /> }/>
					<Route path="/dashboard" element={ <DashboardPage  />} />
					<Route path="*" element={ <NotFountPage  />} />
				</Routes>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
