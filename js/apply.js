var apply = (function(apply) {

    function code() {
        //fun.apply(thisArg, [argsArray])
        //Apply  adiciona temporariamente uma função a um metodo porém os argumentos são um array
        var obj = {
            num: 2
        };
        var addToThis = function(a, b, c) {
            return this.num + a + b + c;
        };
        var arr = [2, 2, 3];
        print(addToThis.apply(obj, arr));
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
        $("#title").append("Método Apply");
        $("#definition").append("O método apply() chama uma função com um dado valor this e arguments providos como uma array (ou um objeto parecido com um array).")
    };
    apply.code = code;
    apply.init = init;
    return apply;
})(apply || {});
