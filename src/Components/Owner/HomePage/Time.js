import React, { useState, useEffect } from 'react';
import './Time.css';


function Time() {
	const [dateState, setDateState] = useState(new Date());
	useEffect(() => {
		setInterval(() => {
			console.log('watching');
			setDateState(new Date());
		}, 30000);
	}, []);
	return (
		<div className="App">
	<img src='https://i.pinimg.com/originals/d2/28/d0/d228d012b5f3852abb2b66d9da526801.png'/>
			<p>
				{' '}
				{dateState.toLocaleDateString('en-GB', {
					day: 'numeric',
					month: 'short',
					year: 'numeric',
				})}
			</p>
			<img src='https://cdn2.iconfinder.com/data/icons/pittogrammi/142/10-512.png'/>
			<p>
				{dateState.toLocaleString('en-US', {
					hour: 'numeric',
					minute: 'numeric',
					hour12: true,
				})}
			</p>
		</div>
	);
}
export default Time