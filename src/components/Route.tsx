import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import App from './App';
import About from './About'
import '../styles.scss'

const MainRoute: React.FC = () => {
	return (
		<Router>
			<Routes>
				{/* Маршрут с числовым параметром */}

				<Route path="/" element={<App />} />
				<Route path="/:id" element={<App />} />

				<Route path="/about" element={<About />} />

			</Routes>
		</Router>
  );
}

export default MainRoute;
