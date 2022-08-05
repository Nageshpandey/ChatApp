import React from "react";
import './App.css';
import homeLogo from "./assets/Home.svg"
import filterLogo from "./assets/Filter.svg"
import searchLogo from "./assets/Search.svg"
import userAdd from "./assets/User_add.svg"
import userData from "./data/user.json"

function App() {
	return (
		<div className="app">
			<div className="topbar">
				<div className="avathar">
					<img src="https://i.im.ge/2022/08/06/FcHaH4.pexels-christina-morillo-1181690.jpg" alt="Avathar" />
				</div>
				<div className="avathar_name">
					<h4>Diana</h4>
				</div>
			</div>

			<div className="chat">
				{userData ? userData.map((value, index) => (
					<div className="chat_list" key={index}>
						<div className="chat_img">
							<img src={value.profile_img} alt="Profile" />
						</div>
						<div className="chat_detail">
							<h4>{value.name}</h4>
							<p>{value.message}</p>
						</div>
						<div className="chat_time">
							<p className="time">{value.time}</p>
							<p className={value.notification_count === 0 ? "notification_read" : "notification_count"}>{value.notification_count === 0 ? null : value.notification_count}</p>
						</div>
					</div>
				)) : null}
			</div>

			<div className="bottom_nav">
				<ul>
					<li className="active">
						<a href="/"><img src={homeLogo} alt="Home Logo" /></a>
					</li>
					<li>
						<a href="/" ><img src={filterLogo} alt="Filter Logo" /></a>
					</li>
					<li>
						<a href="/" ><img src={searchLogo} alt="Search Logo" /></a>
					</li>
				</ul>
			</div>

			<div className="userAdd">
				<img src={userAdd} alt="Useradd" />
			</div>
		</div>
	);
}

export default App;
