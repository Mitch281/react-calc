const Buttons = () => {

    return (
        <div id="buttons">
            <button type="button" className="number">
                <span>7</span>
            </button>
            <button type="button" className="number" id="8" >
                <span>8</span>
            </button>
            <button type="button" className="number" id="9" >
                <span>9</span>
            </button>
            <button type="button" className="operation" id="/">
                <span>&#247;</span>
            </button>
            <button type="button" className="number" id="4" >
                <span>4</span>
            </button>
            <button type="button" className="number" id="5" >
                <span>5</span>
            </button>
            <button type="button" className="number" id="6" >
                <span>6</span>
            </button>
            <button type="button" className="operation" id="*">
                <span>x</span>
            </button>
            <button type="button" className="number" id="1" >
                <span>1</span>
            </button>
            <button type="button" className="number" id="2" >
                <span>2</span>
            </button>
            <button type="button" className="number" id="3" >
                <span>3</span>
            </button>
            <button type="button" className="operation" id="-" >
                <span>-</span>
            </button>
            <button type="button" className="number" id="0" >
                <span>0</span>
            </button>
            <button type="button" className="decimal" id="." >
                <span>.</span>
            </button>
            <button type="button" className="operation" id="=">
                <span>=</span>
            </button>
            <button type="button" className="operation" id="+">
                <span>+</span>
            </button>
            <button type="button" id="clear"> 
                <span>AC</span>
            </button>
            <button type="button" id="backspace">
                <span>Backspace</span>
            </button>
        </div>
    )
}
export default Buttons
