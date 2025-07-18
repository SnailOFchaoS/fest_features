import React from 'react'

import styles from './WeekPageCard.module.scss'

const WeekPageCard = ({dayData}: any) => {
	console.log('dayData:', dayData)
	return (
		<div className={styles.weekPageCardWrapper}>
			<div className={styles.main}>
				<div className={styles.header}>
					<div className={styles.day}>
						{dayData.data.day}
					</div>
					<div className={styles.month}>
						{dayData.data.month}
					</div>
				</div>
				<div className={styles.body}>
					{dayData.tasks.map((task:any) => (
						<div>
							{task.name}
							{task.time}
							{task.description}
						</div>
					))}
					<div>
						{dayData.description}
					</div>
				</div>
			</div>
		</div>
	)
}

export default WeekPageCard;
