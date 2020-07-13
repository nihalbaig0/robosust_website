const products = [
	{team_name:'SUST-U-Fortunate', contest:'Innobotics 2019',segment:'War-Machine',position:'1st Runners Up'},
	{team_name:'SUST_Predators', contest:'Mecceleration 2019',segment:'Robo Riot',position:'Runners Up'},
    {team_name:'Mecha Ingenious,SUST', contest:'Bitfest 2019',segment:'LFR',position:'2nd Runners Up'},
    {team_name:'Mecha Ingenious,SUST', contest:'EEE Day 2019',segment:'LFR',position:'1st Runners Up'},
    {team_name:'SUST_Craker_Nut', contest:'EEE Day 2019',segment:'LFR',position:'2nd Runners Up'},
    {team_name:'SUST_Triplica', contest:'Ignition 2019',segment:'LFR',position:'1st Runners Up'},
    {team_name:'SUST_Craker_Nut', contest:'Ignition 2019',segment:'LFR',position:'2nd Runners Up'},
    {team_name:'SUST_Backspace', contest:'Mechnovation 2019',segment:'Robonix V2.0',position:'Champions'},
    {team_name:'Flash SUST', contest:'Mecceleration 2019',segment:'Robonix V2.0',position:'Runners Up'},
]

const tbody = document.querySelector('.table_body');
const pagination_element = document.getElementById('pagination');



let current_page = 1;
let rows = 5;

function DisplayList (items, wrapper , rows_per_page, page) {
	wrapper.innerHTML = "";
	page--;
	
	let start = rows_per_page * page;
	let end = start + rows_per_page;
	let paginatedItems = items.slice(start, end);

	for (let i = 0; i < paginatedItems.length; i++) {
		let item = paginatedItems[i];
		console.log(item);
		wrapper.innerHTML +=  `
		<tr>
			  <th scope="row">${item.team_name}</th>
			  <td>${item.contest}</td>
			  <td>${item.segment}</td>
			  <td>${item.position}</td>

		</tr>	`
		
				
	}
}

function SetupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, items) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(items, tbody, rows, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}

DisplayList(products, tbody, rows, current_page);
SetupPagination(products, pagination_element, rows);