const CHARACTERS =
	'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトホモヨョロヲゴゾドボポヴッン'
    
 
export class Column {
    constructor(x, fontSize, canvasHeight, context) {
        this.context = context
        this.x = x
        this.y = 0
        this.fontSize = fontSize
        this.canvasHeight = canvasHeight
    }
	drawSymbol() {
        if (this.y === 0 && Math.random() < 0.98){
            return
        }
		const charRandom = Math.floor(Math.random() * CHARACTERS.length)
		const symbol = CHARACTERS[charRandom]

        this.context.fillText(symbol, this.x, this.y)
        
        if (this.y > this.canvasHeight) {
            this.y = 0
        } else {
            this.y += this.fontSize
        }
	}
}
 