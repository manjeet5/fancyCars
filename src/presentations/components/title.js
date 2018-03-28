import React from 'react';
export const Title = ({text,subText,textId,containerId,...props}) =>{
	let style = {
	 padding:'0',
	 margin:'0',
	 fontFamily:'Roboto'
	};
	if(typeof text !== 'undefined' && typeof subText !== 'undefined'){
		return <div id={typeof containerId !== 'undefined'? containerId:'TitlesContainer' }>
			<h1 style={style} > {Text}</h1>
			<h4> {subText}</h4>
		</div>;
	}
	if(typeof text !== 'undefined') return <h1 style={style} id={typeof textId !== 'undefined'? textId:'default'}> {text} </h1>;
	if(typeof subText !== 'undefined') return <h4 style={style}> {subText} </h4>;
};
