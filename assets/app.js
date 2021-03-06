// There will be two modules named UIController and MainController
var UIController = (function() {
    var selector = {
        key: document.querySelector('.key'),
        display: document.querySelector('.display'),
    };  
    
    var everyElement = function(id) {
        selector.display.textContent = id;
    };
    
    var activeElement = function(id) {
        var classList = id.setAttribute('class', 'active');
    };
    
    return {
        selector: function() {
            return selector
        }, 
        element: function(id) {
            return everyElement(id);
        },
        activeElement: function(id) {
            return activeElement(id);
        }
    }
    
})();

var MainController = (function(uictrl) {
    var x, keyselector, id, classs;
    
    var init = function() {
        x = (classs === undefined ? true:false);
        keyselector = uictrl.selector().key;
        
        if(x === false) {
            classs.removeAttribute('class');
        }
    };
    
    init();
    
    keyselector.addEventListener('click', function(event) {
        init();
        event.preventDefault();
        id = event.target.id;
        classs = event.target;    
        uictrl.element(id);
        uictrl.activeElement(classs);
    });
    
    document.addEventListener('keydown', function(event) {
//        console.log(event.key);
    });
})(UIController);