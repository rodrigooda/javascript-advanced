var call = (function(call) {

    function code() {
        // call adiciona temporariamente uma função a um objeto com argumentos
        var obj = {
            num: 2
        };
        var addToThis = function(a) {
            return this.num + a;
        };
        print(addToThis.call(obj, 3));
        var addToThis2 = function(a, b, c) {
            return this.num + a + b + c;
        };
        print(addToThis2.call(obj, 1, 2, 3));
    };

    function print(value) {
        var br = document.createElement("br");
        $("#result").append(value);
        $("#result").append(br);
    }

    function init() {
        var codeS = code.toString();
        var codeS = codeS.substring(codeS.indexOf('{') + 1, codeS.lastIndexOf('}'));
        $("#code").append(codeS);
        $("#title").append("Método Call");
        $("#definition").append("O método call() invoca uma função com um dado valor this  e argumentos passados individualmente.")
    };
    call.code = code;
    call.init = init;
    return call;
})(call || {});
