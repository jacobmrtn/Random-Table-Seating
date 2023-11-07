let staff_list = [
    "Alice Smith",
    "John Johnson",
    "Emily Davis",
    "Michael Wilson",
    "Olivia Brown",
    "William Jones",
    "Sophia Taylor",
    "James Anderson",
    "Ava White",
    "Robert Martin",
    "Isabella Harris",
    "David Clark",
    "Mia Rodriguez",
    "Joseph Thomas",
    "Emma Jackson",
    "Charles Lee",
    "Abigail Hall",
    "Daniel Turner",
    "Grace Evans",
    "Matthew Moore",
    "Sofia Wright",
    "Daniel Phillips",
    "Lily Martinez",
    "Andrew Baker",
    "Madison Lewis",
    "Thomas Allen",
    "Chloe Walker",
    "Samuel King",
    "Ella Young",
    "Christopher Nelson",
    "Scarlett Adams",
    "Joshua Parker",
    "Avery Scott",
    "Jacob Martin"
]


let staff_list_copy = staff_list.slice()
let different_tables = []
let table_count = 5

let staff_per_table = Math.ceil(staff_list.length / table_count)

for(let i=0; i < table_count; i++) {
    const sub_array = []
    for(let z=0; z < staff_per_table; z++) {
        let unique_staff = getRandomNumber(staff_list_copy)
        if(!unique_staff) break
        sub_array.push(unique_staff)
    }
    different_tables.push(sub_array)
}
function getRandomNumber(limit) {
    if (limit.length === 0) {
      console.log("All unique numbers have been generated.")
      return null
    }
  
    const random_number = Math.floor(Math.random() * limit.length)
    const unique_ramdom_number = limit[random_number]
    limit.splice(random_number, 1)
  
    return unique_ramdom_number
}

function populateStaffTables(array, table_num) {
    const table = document.createElement('div')
    table.classList.add('table')

    const group = document.createElement('ol')
    group.classList.add('names')

    const table_number = document.createElement('h3')
    table_number.textContent = `${table_num}`
    table_number.classList.add('table-number')

    array.forEach((item) => {
        const name = document.createElement('li')
        name.textContent = item
        group.appendChild(name)
        table.appendChild(table_number)
        table.appendChild(group)
    })
    document.querySelector('.room').appendChild(table)
}

for(let q=0; q < table_count; q++) {
    populateStaffTables(different_tables[q], `Table ${q + 1}`)
}