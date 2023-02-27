import Tab from "./Tab"
export default function () {
	let tabs = [];

	const data = [
		{
			title:`Home`,
			content: [
				{
					subtitle:'Goldilocks',
					description: `Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.`
				},
				{
					subtitle:'Hours',
					description:`Sunday: 8am - 8pm

					Monday: 6am - 6pm
					
					Tuesday: 6am - 6pm
					
					Wednesday: 6am - 6pm
					
					Thursday: 6am - 10pm
					
					Friday: 6am - 10pm
					
					Saturday: 8am - 10pm`
				},
				{
					subtitle:'Location',
					description:'123 Forest Drive, Forestville, Maine'
				}
			]
		},
		{
			title:'Memu',
			content: [
				{
					subtitle:'Beverages',
					subcontent: [
						{
							title: 'Honey Tea',
							description: `A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!`,
							price: '$2'
						},
						{
							title: 'Beary Tea',
							description: `A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.`,
							price: '$3'
						}
					]
				},
				{
					subtitle: 'Sides',
					subcontent: [
						{
							title: 'Toast and Jam',
							description: `A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.`,
							price: '$1'
						},
						{
							title: 'Fresh Fruit',
							description: `A small bowl of fresh fruit, whatever we find at the market for the day.`,
							price: '$3'
						}
					]
					
				},
			]
		},
		{
			title:'Contact',
			content: [
				{
					subtitle:'Mama Bear',
					description:'Chef'
				},
				{
					subtitle:'Papa Bear',
					description:'Manager'
				},
				{
					subtitle:'Baby Bear',
					description:'Waiter'
				}
			]
		}
	]
	
	for (let index = 0; index < data.length; index++) {
		const { title, content } = data[index];
		tabs.push(Tab(title, content))
	}
// console.log(tabs)
	const getTabs = () => tabs;
	
	return {
		getTabs,
	}
}