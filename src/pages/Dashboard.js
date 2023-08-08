import React from 'react'
import DashboardStatsGrid from '../component/DashboardStatsGrid'
import TransactionChart from '../component/TransactionChart'
import RecentOrder from '../component/RecentOrder'
import BuyerProfileChart from '../component/BuyerProfileChart'
import PopularProducts from '../component/PopularProducts'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<TransactionChart />
				<BuyerProfileChart />
			</div>
			<div className="flex flex-row gap-4 w-full">
				<RecentOrder />
				<PopularProducts />
			</div>
		</div>
	)
}
