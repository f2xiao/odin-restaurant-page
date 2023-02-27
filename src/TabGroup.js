import Tab from "./Tab"
export default function () {
	let tabs = [];

	const data = [
		{
			"title":'Home',
			"content": 'home',
			"subs": [
				{
					"subtitle":'Best',
					"subcontent":'best'
				},
				{
					"subtitle":'Hours',
					"subcontent":'hours'
				},
				{
					"subtitle":'Location',
					"subcontent":'location'
				}
			]
		},
		{
			"title":'Memu',
			"content": 'menu',
			"subs": [
				{
					"subtitle":'Beverages',
					"subcontent":'honey tea, beary tea'
				},
				{
					"subtitle":'Sides',
					"subcontent":'Toast and jam, fresh fruit'
				},
				{
					"subtitle":'Main Dishes',
					"subcontent":'Pancakes, French Toast'
				}
			]
		},
		{
			"title":'Contact',
			"content": 'contact us',
			"subs": [
				{
					"subtitle":'Mama Bear',
					"subcontent":'Chef'
				},
				{
					"subtitle":'Papa Bear',
					"subcontent":'Manager'
				},
				{
					"subtitle":'Baby Bear',
					"subcontent":'Waiter'
				}
			]
		}
	]
	
	for (let index = 0; index < data.length; index++) {
		const { title, content, subs } = data[index];
		tabs.push(Tab(title, content, subs))
	}
// console.log(tabs)
	const getTabs = () => tabs;
	
	return {
		getTabs,
	}
}