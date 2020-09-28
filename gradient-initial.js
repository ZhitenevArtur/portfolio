  
var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ["#0b0b0b", "#16222A"],
                ["#16222A", "#3A6073"],
                ["#240b36", "#c31432"],
                ["#000428", "#471287"],
                ["#a81919", "#4A569D"],
                ["#0F2027", "#2C5364"],
                ["#8E0E00", "#1F1C18"]
            ]
        }
    }
});