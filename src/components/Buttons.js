const Buttons = (props) => {

    return (
        <div id="buttons">
            <button type="button" className="number" onClick={(e) => props.onClick(e)}>
                <span>7</span>
            </button>
            <button type="button" className="number" id="8" onClick={(e) => props.onClick(e)}>
                <span>8</span>
            </button>
            <button type="button" className="number" id="9" onClick={(e) => props.onClick(e)}>
                <span>9</span>
            </button>
            <button type="button" className="operation" id="/" onClick={(e) => props.onClick(e)}>
                <span>&#247;</span>
            </button>
            <button type="button" className="number" id="4" onClick={(e) => props.onClick(e)}>
                <span>4</span>
            </button>
            <button type="button" className="number" id="5" onClick={(e) => props.onClick(e)}>
                <span>5</span>
            </button>
            <button type="button" className="number" id="6" onClick={(e) => props.onClick(e)}>
                <span>6</span>
            </button>
            <button type="button" className="operation" id="*" onClick={(e) => props.onClick(e)}>
                <span>x</span>
            </button>
            <button type="button" className="number" id="1" onClick={(e) => props.onClick(e)}>
                <span>1</span>
            </button>
            <button type="button" className="number" id="2" onClick={(e) => props.onClick(e)}>
                <span>2</span>
            </button>
            <button type="button" className="number" id="3" onClick={(e) => props.onClick(e)}>
                <span>3</span>
            </button>
            <button type="button" className="operation" id="-" onClick={(e) => props.onClick(e)}>
                <span>-</span>
            </button>
            <button type="button" className="number" id="0" onClick={(e) => props.onClick(e)}>
                <span>0</span>
            </button>
            <button type="button" className="decimal" id="." onClick={(e) => props.onClick(e)}>
                <span>.</span>
            </button>
            <button type="button" className="operation" id="=" onClick={() => props.onCalculate()}>
                <span>=</span>
            </button>
            <button type="button" className="operation" id="+" onClick={(e) => props.onClick(e)}>
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
