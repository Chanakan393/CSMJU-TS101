interface Employee {
  id: number;
  name: string;
  position: string;
  salary: number;
}

const employees: Employee[] = [
  { id: 1, name: "Jane", position: "Singer", salary: 20000 },
  { id: 2, name: "Noon", position: "Producer", salary: 50000 },
  { id: 3, name: "Bow", position: "Musician", salary: 30000 },
];

function findEmployeeByName(name: string): Employee | undefined {
    return employees.find(emp => emp.name === name);
}

console.log("ข้อมูลพนักงานทั้งหมด");
employees.forEach(emp => {
    console.log(`id:${emp.id}, name:${emp.name}, position:${emp.position}, salary:${emp.salary}`);
});

const result = findEmployeeByName("Noon");
console.log("\nผลการค้นหาพนักงาน");
console.log(result ? result : "ไม่พบพนักงาน");