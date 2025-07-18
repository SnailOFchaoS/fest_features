import React from "react";

import WeekPageCard from "./Card/WeekPageCard";
import styles from './WeekPage.module.scss'

const mockData = [
	{
		id: 1,
		data:{
			day: '30',
			month: 'февраля',
		},
		tasks: [
			{
				name: 'task 1', 
				time: '00:10:00',
				description: 'описание сосание',
			},
		],
		description: 'афиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.',
	},{
		id: 2,
		data:{
			day: '31',
			month: 'февраля',
		},
		tasks: [
			{
				name: 'task 2', 
				time: '00:10:00',
				description: 'описание сосание',
			},
		],
		description: 'афиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.',
	},{
		id: 3,
		data:{
			day: '32',
			month: 'февраля',
		},
		tasks: [
			{
				name: 'task 3', 
				time: '00:10:00',
				description: 'описание сосание',
			},
		],
		description: 'афиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.',
	},{
		id: 4,
		data:{
			day: '33',
			month: 'февраля',
		},
		tasks: [
			{
				name: 'task 4', 
				time: '00:10:00',
				description: 'описание сосание',
			},
		],
		description: 'афиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.',
	},{
		id: 5,
		data:{
			day: '34',
			month: 'февраля',
		},
		tasks: [
			{
				name: 'task 5', 
				time: '00:10:00',
				description: 'описание сосание',
			},
		],
		description: 'афиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.',
	},{
		id: 6,
		data:{
			day: '35',
			month: 'февраля',
		},
		tasks: [
			{
				name: 'task 6', 
				time: '00:10:00',
				description: 'описание сосание',
			},
		],
		description: 'афиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.',
	},{
		id: 7,
		data:{
			day: '36',
			month: 'февраля',
		},
		tasks: [
			{
				name: 'task 7', 
				time: '00:10:00',
				description: 'описание сосание',
			},
		],
		description: 'афиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.',
	},
]
  // justify-content: center;
  // justify-items: center;
const WeekPage = () => {
	return (
		<div className = {styles.weekPageWrapper}>
			{mockData.map(item => (
				<div key = {item.id}>
					<WeekPageCard dayData={item}/>
				</div>
			))}
		</div>
	)
}

export default WeekPage;