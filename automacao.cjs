//- criar uma nova planilha[x]
//- add dados na planilha[x]
//- salvar os dados nela [x]
//- salvar a planilha no pc[]
const XLSX = require("xlsx");

const wb = XLSX.utils.book_new()
const ws = XLSX.utils.aoa_to_sheet([
    ["produtos", "precos"],
    ["banana", "25"],
    ["arroz", "18"],
    ["maca", 4.99]
])

XLSX.utils.book_append_sheet(wb, ws, "planilhaDeProdutos")
XLSX.writeFile(wb, "produtos.xlsx")