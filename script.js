import {Column} from "./column.js"
let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const FONTSIZE = 16

const columns = []
const columnsCount = canvas.width / FONTSIZE

for (let i = 0; i < columnsCount; i++) {
    columns.push(new Column(i * FONTSIZE, FONTSIZE, canvas.height, context 
        ))
}

context.font = `bold ${FONTSIZE}px monospace`

const column = new Column(100, FONTSIZE, canvas.height, context 
)

function animate() {
    context.fillStyle = "rgba(0, 0, 0, 0.08)"
    context.fillRect(0, 0, canvas.width, canvas.height ) 
    context.fillStyle = 'green'
    columns.forEach(column => {column.drawSymbol()})
    
	
	setTimeout(() => requestAnimationFrame(animate), 50) 
}

animate() 