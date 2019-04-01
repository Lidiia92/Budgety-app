//BUDGET CONTROLLER
const bundgetController = (function () {

})();

//UI CONTROLLER
const UIController = (function () {

    const DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        addButton: '.add__btn'


    }
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            }
        },
        getDOMstrings: function () {
            return DOMstrings;
        }
    };
})();

//GLOBAL APP CONTROLER
const controller = (function (budgetCtrl, UICtrl) {

    const DOM = UIController.getDOMstrings();

    const ctrlAddItem = function() {
        //1.Get the field input data

        const input = UIController.getInput();
        console.log(input);

        //2.Add the item to the budget contoller

        //3. Add the new item to the UI

        //4. Calculate the budget

        //5.Display the budget on UI

    }

    const addButton = document.querySelector(DOM.addButton);
    addButton.addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if(event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    })

})(bundgetController, UIController);